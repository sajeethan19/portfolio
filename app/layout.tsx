import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne"
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Sajeethan Gulendran - Software Engineer",
  description: "Portfolio of Sajeethan Gulendran"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${syne.variable} ${spaceMono.variable}`}>{children}</body>
    </html>
  );
}
