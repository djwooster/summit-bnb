import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Summit BnB | Colorado Short-Term Rental Management",
  description:
    "Summit BnB manages your Colorado short-term rental property — listings, guests, cleaning, pricing, and more. Completely hands-off. Maximum returns.",
  keywords: [
    "short-term rental management Colorado",
    "Airbnb property management",
    "Colorado vacation rental management",
    "Summit BnB",
    "hassle-free rental management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-[#14181F] text-[#F0EDE8] antialiased">
        {children}
      </body>
    </html>
  );
}
