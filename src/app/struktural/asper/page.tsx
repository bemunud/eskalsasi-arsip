import Footer from "@/components/footer";
import Navbar from "@/components/navbar/page";
import JumbotronAsper from "@/components/struktural/asper/hero-section";
import WhatSectionASPER from "@/components/struktural/asper/what-section";

export default async function Home() {
  return (
    <>
      <header className="fixed z-[20] mx-auto w-full bg-white">
        <Navbar />
      </header>
      <main className="bg-primary flex min-h-screen flex-col gap-y-24 pb-32">
        <JumbotronAsper/>
        <WhatSectionASPER />
      </main>
      <footer className="mx-auto w-full">
        <Footer />
      </footer>
    </>
  );
}
