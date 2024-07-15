import Image from "next/image";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer";
// import { fetchPages } from "@/lib/notion";
import MeshGradient from "@/components/mainpage/section1";
import BlogPreview from "@/components/mainpage/blog";
import Link from "next/link";

export default async function Home() {
  // const posts: any = await fetchPages();
  return (
    <>
      <header className="fixed z-[20] mx-auto w-full bg-white">
        <Navbar />
      </header>
      <main className="bg-primary flex min-h-screen flex-col items-center justify-between">
        <MeshGradient />
        <BlogPreview />
      </main>
      <footer className="mx-auto w-full">
        <Footer />
      </footer>
    </>
  );
}
