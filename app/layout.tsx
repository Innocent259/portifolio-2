import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innocent|Personnal Portfolio",
  description: "Innocent is a full stack developer with 2 years of experience"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-between bg-gray-50 text-gray-950`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
