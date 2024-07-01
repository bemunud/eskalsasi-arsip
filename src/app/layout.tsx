import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BEM Udayana - Pengantar aspirasi Mahasiswa Universitas Udayana",
  description: "Jembatan pengantar aspirasi mahasiswa Universitas Udayana. Klik link ini, sampaikan suaramu untuk Udayana ",
  applicationName: 'Blogsite',
  referrer: 'origin-when-cross-origin',
  keywords: ['BEM UNUD', 'Website BEM Unud', 'BEM Udayana'],
  authors: [{ name: 'Riandika' }, { name: 'BEM Udayana', url: 'https://bemunud.id' }],
  creator: 'Riandika',
  publisher: 'BEM Udayana',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
