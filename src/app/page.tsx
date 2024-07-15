import Footer from "@/components/footer";
import BlogPreview from "@/components/mainpage/blog";
import MeshGradient from "@/components/mainpage/section1";
import InformantBem from "@/components/mainpage/section2";
import Navbar from "@/components/navbar/page";
import MarqueeSlider from "@/components/mainpage/section3";

export default async function Home() {
  return (
    <>
      <header className="fixed z-[20] mx-auto w-full bg-white">
        <Navbar />
      </header>
      <main className="bg-primary flex min-h-screen flex-col gap-y-24 pb-32">
        <MeshGradient />
        <InformantBem />
        <MarqueeSlider />
        <BlogPreview />
      </main>
      <footer className="mx-auto w-full">
        <Footer />
      </footer>
    </>
  );
}
