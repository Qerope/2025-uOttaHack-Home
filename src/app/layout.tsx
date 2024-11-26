import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./styles/globals.css";
import { Jost } from "next/font/google";
import opengraph_image from "@/app/assets/open-graph.png";

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
    title: "uOttaHack 7 - 2025 - Apply NOW!",
    description:
      "Join us and apply now to attend uOttaHack 7, the most anticipated hackathon in Ottawa, proudly celebrating 7 years of innovation, creativity, and community. This year, we’re leveling up the hacker experience with exciting new initiatives, exclusive workshops, inspiring keynote speakers, and unforgettable activities. Whether you're a seasoned hacker or a first-timer, uOttaHack 7 promises to be an incredible weekend of collaboration, learning, and fun.",
    url: "https://yourwebsite.com/uottahack7",
    siteName: "uOttaHack",
    images: [
      {
        url: opengraph_image.src,
        width: 1200,
        height: 630,
        alt: "uOttaHack 7 banner",
      },
    ],
    locale: "en_US",
    type: "website",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
