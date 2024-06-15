import Footer from "@/components/footer";
import Navbar from "@/components/navbar/page";

export default function Page() {
  return (
    <>
      <header className="fixed z-[20] w-full bg-white mx-auto">
        <Navbar />
      </header>
      <main className="h-screen w-full flex justify-center bg-primary">hello</main>
      <footer className="w-full mx-auto">
        <Footer />
      </footer>
    </>
  );
}
