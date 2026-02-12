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
  metadataBase: new URL("https://mclears.com"),
  title: {
    default: "McLear's Cottage Colony | Black Lake, NY Vacation Rentals",
    template: "%s | McLear's Cottage Colony"
  },
  description: "Family-owned cottage colony and campground on Black Lake, NY since the 1920s. Lakefront cottages, camping cabins, RV sites, and boat rentals. Book your fishing vacation today!",
  keywords: ["Black Lake", "cottage rentals", "NY vacation", "fishing", "camping", "boat rentals", "Hammond NY", "Thousand Islands", "bass fishing", "family vacation"],
  authors: [{ name: "McLear's Cottage Colony" }],
  creator: "McLear's Cottage Colony",
  openGraph: {
    title: "McLear's Cottage Colony | Black Lake, NY",
    description: "Black Lake's favorite destination since the 1920s. Family-owned cottages, cabins, camping, and boat rentals.",
    url: "https://mclears.com",
    siteName: "McLear's Cottage Colony",
    images: [
      {
        url: "/images/aerial1000.jpg",
        width: 1200,
        height: 630,
        alt: "Aerial view of McLear's Cottage Colony on Black Lake, NY"
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "McLear's Cottage Colony | Black Lake, NY",
    description: "Black Lake's favorite destination since the 1920s. Family-owned cottages, cabins, camping, and boat rentals.",
    images: ["/images/aerial1000.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mclears.com",
  },
};

// JSON-LD Structured Data for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://mclears.com",
  name: "McLear's Cottage Colony",
  description: "Family-owned cottage colony and campground on Black Lake, NY since the 1920s. Lakefront cottages, camping cabins, RV sites, and boat rentals.",
  url: "https://mclears.com",
  telephone: "+1-315-375-6508",
  email: "gofishin@mclears.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2477 County Route #6",
    addressLocality: "Hammond",
    addressRegion: "NY",
    postalCode: "13646",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.4338,
    longitude: -75.7184
  },
  image: "https://mclears.com/images/aerial1000.jpg",
  priceRange: "$$",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Lakefront Access" },
    { "@type": "LocationFeatureSpecification", name: "Boat Rentals" },
    { "@type": "LocationFeatureSpecification", name: "Fishing" },
    { "@type": "LocationFeatureSpecification", name: "Pet Friendly" },
    { "@type": "LocationFeatureSpecification", name: "RV Sites" },
    { "@type": "LocationFeatureSpecification", name: "Tent Camping" }
  ],
  sameAs: [],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
    validFrom: "2026-05-01",
    validThrough: "2026-10-31"
  },
  foundingDate: "1920",
  slogan: "Black Lake's Favorite Destination Since the 1920s"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
