import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PaymentScope Analytics | Global Payment Methods Intelligence",
  description: "Leading strategy consultancy specializing in global payment methods, e-commerce trends, and market intelligence across North America, Europe, Asia-Pacific, and Latin America.",
  keywords: "payment methods, digital wallets, payment analytics, e-commerce intelligence, payment trends, market research, payment consulting",
  authors: [{ name: "PaymentScope Analytics" }],
  metadataBase: new URL('https://homtagu-ai.github.io/tet'),
  openGraph: {
    title: "PaymentScope Analytics | Global Payment Methods Intelligence",
    description: "Expert payment methods intelligence and market analysis for global markets",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

