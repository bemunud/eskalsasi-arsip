import Image from "next/image";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer";
import PolygonGradient from "@/components/mainpage/section-one";
import MeshGradient from "@/components/mainpage/section1";
import Junk from "@/components/mainpage/section-two";

export default function Home() {
  return (
    <>
      <header className="fixed z-[20] w-full bg-white mx-auto">
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between bg-primary">
        <MeshGradient/>
        <Junk/>
      </main>
      <footer className="w-full mx-auto">
        <Footer />
      </footer>
    </>
  );
}
