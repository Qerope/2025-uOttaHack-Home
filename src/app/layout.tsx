import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./styles/globals.css";
import { Jost } from "next/font/google";

// Set up fonts without exporting them
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

// const harabara = localFont({
//   src: "/fonts/Harabara.woff", // Correct path
//   display: "swap",
//   variable: "--font-harabara",
// });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Metadata for the layout
export const metadata: Metadata = {
  title: "uOttaHack 7 - 2025 - Apply NOW!",
  description:
    "Join us and apply now to attend uOttaHack 7, the most anticipated hackathon in Ottawa, proudly celebrating 7 years of innovation, creativity, and community. This year, we’re leveling up the hacker experience with exciting new initiatives, exclusive workshops, inspiring keynote speakers, and unforgettable activities. Whether you're a seasoned hacker or a first-timer, uOttaHack 7 promises to be an incredible weekend of collaboration, learning, and fun.",
  openGraph: {
    type: 'website',
    title: "uOttaHack 7 - 2025 - Apply NOW!",
    description: "Join us and apply now to attend uOttaHack 7, the most anticipated hackathon in Ottawa.",
    url: "https://2025.uOttahack.com",
    images: [ 
      {
        url: "https://2025.uOttahack.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "uOttaHack 7 - Apply Now!"
      }
    ],    
    siteName: "uOttaHack",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image", 
    title: "uOttaHack 7 - 2025 - Apply NOW!",
    description: "Join us for uOttaHack 7 and apply now! The most anticipated hackathon in Ottawa.",
    images: [ 
      {
        url: "https://2025.uOttahack.com/twitter-card.jpg",
        width: 800,
        height: 418,
        alt: "uOttaHack 7 - Apply Now!"
      }
    ],
    site: "@uOttaHack",
  },
  appleWebApp: {
    title: "uOttaHack 7",
    statusBarStyle: "black-translucent",
  },
};

// Layout component definition
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jost.variable}  font-sans`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/icons/web-app-manifest-192x192.png" sizes="192x192" />
        <link rel="icon" href="/icons/web-app-manifest-512x512.png" sizes="512x512" />
      </head>
      
      <body className="antialiased">{children}</body>
    </html>
  );
}
