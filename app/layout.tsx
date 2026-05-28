import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AssetCycle – Self-Learning Asset Management",
  description: "The asset management platform that gets more accurate over time. Condition assessments, lifecycle forecasting, and compliance reporting — all in one system.",
  openGraph: {
    title: "AssetCycle – Self-Learning Asset Management",
    description: "The platform that learns while you work.",
    url: "https://assetcycle.com.au",
    siteName: "AssetCycle",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
