import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "uOttahack 7 - 2025",
  description: "The largest Ottawa-based hackathon for the last half-decade, uOttaHack is returning for its most exciting iteration yet! To celebrate this momentous occasion, uOttaHack 6 is expanding the hacker experience with new initiatives to create an unforgettable weekend for its hackers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}