import type { Metadata } from "next";

import Head from "next/head";
import "./globals.css";
import { ColorSchemeScript } from "@mantine/core";
import { Provider } from "./Provider";

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
