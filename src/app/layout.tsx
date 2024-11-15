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
  title: "uOttaHack 7",
  description:
    "The largest Ottawa-based hackathon for the last half-decade, uOttaHack is returning for its most exciting iteration yet! To celebrate this momentous occasion, uOttaHack 7 is expanding the hacker experience with new initiatives to create an unforgettable weekend for its hackers.",
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
