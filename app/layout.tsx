import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

import "./globals.css";

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

const zagzookFont = localFont({
  src: "./fonts/Zagzook-Regular.ttf",
  variable: "--font-Zagzook-Regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zagzook Overflow",
  description: "A better version of Stack Overflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
