import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "AssetCycle – Fixed Asset Lifecycle Management",
  description: "Track fixed assets from acquisition to disposal. Depreciation, work orders, lifecycle forecasting, and field inspection — all in one platform.",
  openGraph: {
    title: "AssetCycle – Fixed Asset Lifecycle Management",
    description: "Know every asset. Plan every cost.",
    url: "https://assetcycle.com.au",
    siteName: "AssetCycle",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
