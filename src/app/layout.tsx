import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost", // Define a custom CSS variable for Jost
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "uOttahack 7 - 2025",
  description:
    "The largest Ottawa-based hackathon for the last half-decade, uOttaHack is returning for its most exciting iteration yet! To celebrate this momentous occasion, uOttaHack 6 is expanding the hacker experience with new initiatives to create an unforgettable weekend for its hackers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jost.variable} font-sans`}>
      {" "}
      {/* Use Jost font for specific components or sections */}
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
