
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";

<head>
  <link rel="canonical" href="https://photo-poses.vercel.app">
</head>

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Photo Poses Platform - Discover Perfect Poses for Every Occasion",
  description: "Professional photo poses guide with step-by-step instructions, body language tips, and inspiration for girls, boys, and couples. Discover poses for saree, streetwear, casual, formal, and romantic photography.",
  keywords: "photo poses, photography poses, posing guide, portrait photography, fashion poses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-950`}
      >
        <StructuredData />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

