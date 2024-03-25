import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "tailwindcss/tailwind.css";
import { ModalProvider } from '@/components/providers/modal-providers';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill Assessment",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ModalProvider /> */}
        {children}
      </body>
    </html>
  );
}
