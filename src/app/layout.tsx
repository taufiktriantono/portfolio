import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taufiktriantono.railzway.com"),

  title: {
    default: "Taufik Triantono — Backend Engineer",
    template: "%s — Taufik Triantono",
  },

  description:
    "Backend engineer with 8+ years of experience working with Go, PostgreSQL, distributed systems, observability, and cloud infrastructure.",

  openGraph: {
    title: "Taufik Triantono — Backend Engineer",
    description:
      "Building reliable backend systems and exploring cloud platform engineering.",
    url: "/",
    siteName: "Taufik Triantono",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Taufik Triantono — Backend Engineer",
    description:
      "Building reliable backend systems and exploring cloud platform engineering.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top"><Header />{children}<Footer /></body>
    </html>
  );
}
