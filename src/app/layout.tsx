import type { Metadata } from "next";
import { Orbitron, IBM_Plex_Sans, Rajdhani, Russo_One } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Header, Footer, PageTransition } from "@/components/layout";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vulcan GP",
  description: "STEM Racing Regionals Winner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${ibmPlexSans.variable} ${rajdhani.variable} ${russoOne.variable} antialiased`}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
