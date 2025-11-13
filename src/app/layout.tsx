import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Home Bite – Design System",
  description: "Component library for the Home Bite customer experience"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-warm-white text-neutral-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
