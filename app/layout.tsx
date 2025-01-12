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
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <div className=" flex flex-col w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(port.png)" }}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
