"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { SelectedElementsProvider } from "./contexts/SelectedElementsProvider";
import { GlobalSettingsProvider, useGlobalSettings } from "./contexts/GlobalSettingsContext";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

function Layout({ children }) {
  const { globalSettings } = useGlobalSettings();

  // Dynamically update the document title when globalSettings.title changes
  useEffect(() => {
    if (globalSettings?.title) {
      document.title = globalSettings.title;
    }
  }, [globalSettings?.title]);

  return (
    <html lang="en">
      <head>
        <meta name="description" content={globalSettings?.description || "Welcome to my website"} />
      </head>
      <body className={inter.className}>
        <SelectedElementsProvider>{children}</SelectedElementsProvider>
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <GlobalSettingsProvider>
      <Layout>{children}</Layout>
    </GlobalSettingsProvider>
  );
}
