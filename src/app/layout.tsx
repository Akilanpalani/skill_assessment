import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "tailwindcss/tailwind.css";
import { Navbar } from "./nav/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill Assessment",
  description: "This is a skill assessment application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
