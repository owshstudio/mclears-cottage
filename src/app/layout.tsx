import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "McLear's Cottage Colony | Black Lake, NY Vacation Rentals",
  description: "Family-owned cottage colony and campground on Black Lake, NY. Lakefront cottages, camping cabins, RV sites, and boat rentals. Book your fishing vacation today.",
  keywords: ["Black Lake", "cottage rentals", "NY vacation", "fishing", "camping", "boat rentals", "Hammond NY"],
  openGraph: {
    title: "McLear's Cottage Colony | Black Lake, NY",
    description: "Black Lake's favorite destination since the 1920s. Family-owned cottages, cabins, camping, and boat rentals.",
    type: "website",
    locale: "en_US",
  },
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
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
