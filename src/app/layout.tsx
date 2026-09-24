import type { Metadata } from "next";
import { Noto_Serif_Devanagari, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import BookingModal from "@/components/BookingModal";

const notoSerif = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pindaanpanditji.com"),
  title: "PindaanPanditJi | गया जी में पिंडदान · एक विश्वसनीय पंडित जी",
  description:
    "गया जी में पिंडदान और श्राद्ध के लिए सीधे अनुभवी तीर्थ पुरोहित पं. रामानुज शास्त्री जी से संपर्क करें। विधि, तिथि, तैयारी और स्पष्ट दक्षिणा के साथ व्यक्तिगत मार्गदर्शन।",
  keywords: [
    "Pind Daan Gaya",
    "Gaya Pind Daan Pandit Ji",
    "PindaanPanditJi",
    "गया जी पिंडदान",
    "पितृ श्राद्ध गया",
    "Tripindi Shraddha Gaya",
    "Narayan Bali Gaya",
    "Tirtha Purohit Gaya",
    "Vishnupad Gaya Pind Daan",
  ],
  authors: [{ name: siteConfig.pandit.name }],
  openGraph: {
    title: "PindaanPanditJi | गया जी में पिंडदान · एक विश्वसनीय पंडित जी",
    description:
      "एक पंडित जी। एक परंपरा। आपके परिवार के लिए पूरी श्रद्धा के साथ। सीधे गया जी के अनुभवी पंडित जी से मार्गदर्शन लें।",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/pandit-ji.jpg",
        width: 1200,
        height: 1500,
        alt: siteConfig.pandit.name,
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${notoSerif.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased text-primary-text bg-background flex flex-col min-h-screen">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <StickyMobileBar />
          <BookingModal />
        </LanguageProvider>
      </body>
    </html>
  );
}
