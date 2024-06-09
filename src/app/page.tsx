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
      <header className="fixed z-[20] w-full bg-white mx-auto">
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between bg-primary">
        <MeshGradient />
        <BlogPreview />
        {/* {posts.results.map((post: any) => (
          <div key={post.id}>
            <Link href='#'>{post.properties.Name.title.plain_text}</Link>
          </div>
        ))} */}
      </main>
      <footer className="w-full mx-auto">
        <Footer />
      </footer>
    </>
  );
}
