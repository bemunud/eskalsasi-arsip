import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BEM Udayana - Pengantar aspirasi Mahasiswa Universitas Udayana",
  description:
    "Jembatan pengantar aspirasi mahasiswa Universitas Udayana. Klik link ini, sampaikan suaramu untuk Udayana ",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "LL1Eh_-hdKAuFSwaxJjsgl7PkNQE1ClF_bfK6yLPEQs",
  },
  keywords: [
    "BEM UNUD",
    "Website BEM Unud",
    "BEM Udayana",
    "BEM Universitas Udayana",
    "bem unud",
  ],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://bemunud.id/" || "localhost:3000"),
  openGraph: {
    title: "BEM Udayana - Pengantar aspirasi Mahasiswa Universitas Udayana",
    description:
      "Jembatan pengantar aspirasi mahasiswa Universitas Udayana. Yuk bersuara! ",
    url: "https://bemunud.id/",
    siteName: "Badan Eksekutif Mahasiswa (BEM PM) Universitas Udayana",
    images: [
      {
        url: "/cover/og-image.webp",
        alt: "Cover Image",
        width: "1200",
        height: "630", // Must be an absolute URL
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `/`,
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon-ico/favicon-16x16.png",
    shortcut: "/favicon-ico/favicon-32x32.png",
    apple: "/favicon-ico/apple-touch-icon.png",
    other: {
      rel: "favicon-ico/apple-touch-icon",
      url: "/favicon-ico/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary">
      <body className={font.className}>{children}</body>
    </html>
  );
}
