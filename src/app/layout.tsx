import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BEM Udayana - Pengantar aspirasi Mahasiswa Universitas Udayana",
  description:
    "Jembatan pengantar aspirasi mahasiswa Universitas Udayana. Klik link ini, sampaikan suaramu untuk Udayana ",
  referrer: "origin-when-cross-origin",
  keywords: ["BEM UNUD", "Website BEM Unud", "BEM Udayana"],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Next.js",
    description: "Jembatan pengantar aspirasi mahasiswa Universitas Udayana. Yuk bersuara! ",
    url: "https://bemunud.id/",
    siteName: "Bem Unud",
    images: [
      {
        url: "https://cdn.discordapp.com/attachments/1025050491551485997/1261728243279466606/Slide_16_9_-_17.webp?ex=6694037e&is=6692b1fe&hm=a69b4971a381a03c8ab25222f8727211df8687dfadb259b92e211e3a923b77d1&", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://cdn.discordapp.com/attachments/1025050491551485997/1261728243279466606/Slide_16_9_-_17.webp?ex=6694037e&is=6692b1fe&hm=a69b4971a381a03c8ab25222f8727211df8687dfadb259b92e211e3a923b77d1&", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Background Image BEM UNUD",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: '/favicon-ico/favicon-16x16.png',
    shortcut: '/favicon-ico/favicon-32x32.png',
    apple: '/favicon-ico/apple-touch-icon.png',
    other: {
      rel: 'favicon-ico/apple-touch-icon',
      url: '/favicon-ico/apple-touch-icon.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
