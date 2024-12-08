import QueryProvider from "./queryProvidor";
import type { Metadata } from "next";
import { Store } from "./redux/store";
import { Provider } from "react-redux";
import { Providers } from "./redux/provider";
import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from "@mantine/core";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import { breakpoints, colors } from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const queryClient = new  QueryClient();

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

const theme = mergeMantineTheme(
  DEFAULT_THEME,
  createTheme({
    fontFamily: geistSans.style.fontFamily,
    fontFamilyMonospace: geistMono.style.fontFamily,
    breakpoints,
    colors,
  }),
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript />
      </Head>
      <body className="antialiased">
        <MantineProvider theme={theme}>
          <ToastContainer />
          <QueryProvider>
            {" "}
            <Provider store={Store}>
              <Providers>{children}</Providers>
            </Provider>
          </QueryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
