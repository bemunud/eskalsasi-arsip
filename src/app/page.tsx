import Footer from "@/components/footer";
import BlogPreview from "@/components/mainpage/blog";
import MeshGradient from "@/components/mainpage/section1";
import Navbar from "@/components/navbar/page";

export default async function Home() {
  return (
    <>
      <header className="fixed z-[20] w-full bg-white mx-auto">
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col gap-y-24 bg-primary pb-32">
        <MeshGradient />
        <BlogPreview />
      </main>
      <footer className="w-full mx-auto">
        <Footer />
      </footer>
    </>
  );
}
