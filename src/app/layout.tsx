import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://islandparty.purduebyx.com"),
  title: "Island Party 2026 — Purdue BYX",
  description:
    "Island Party 2026 — A live music festival at Slayter Hill, Purdue University, hosted by BYX Fraternity. Three bands, one unforgettable night, all for charity.",
  openGraph: {
    title: "Island Party 2026",
    description: "Live music at Slayter Hill — Purdue BYX",
    images: ["/images/slayter-hill.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
