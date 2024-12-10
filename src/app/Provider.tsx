// app/providers.tsx
"use client";
import { Provider as ReduxProvider } from "react-redux";
import { Store } from "@/redux/store";
import QueryProvider from "./queryProvidor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from "@mantine/core";
import { breakpoints, colors } from "./theme";
import localFont from "next/font/local";

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

export function Provider({ children }: { children: React.ReactNode }) {
  const theme = mergeMantineTheme(
    DEFAULT_THEME,
    createTheme({
      fontFamily: geistSans.style.fontFamily,
      fontFamilyMonospace: geistMono.style.fontFamily,
      breakpoints,
      colors,
    }),
  );

  return (
    <MantineProvider theme={theme}>
      <ToastContainer />
      <QueryProvider>
        {" "}
        <ReduxProvider store={Store}>{children}</ReduxProvider>
      </QueryProvider>
    </MantineProvider>
  );
}
