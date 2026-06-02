import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const title = `${profile.name} — Portfolio`;
const description =
  "Web3 engineer building DeFi primitives and on-chain systems. Smart contracts, dApp interfaces, and blockchain infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ducmanh1101.github.io"),
  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Web3",
    "Solidity",
    "DeFi",
    "Smart Contracts",
    "Blockchain Engineer",
    "Ethereum",
    "viem",
    "wagmi",
    "Next.js",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title,
    description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: profile.twitter,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070710",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
