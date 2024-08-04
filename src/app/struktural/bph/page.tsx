import Footer from "@/components/footer";
import ComingSoon from "@/components/magicui/comingsoon";
import Navbar from "@/components/navbar/page";
import JumbotronBPH from "@/components/struktural/bph/hero-section";
import WhatSectionBPH from "@/components/struktural/bph/what-section";

export default async function Home() {
  return (
    <>
      <header className="fixed z-[20] mx-auto w-full bg-white">
        <Navbar />
      </header>
      <main className="bg-primary flex min-h-screen flex-col gap-y-24 pb-32">
        <JumbotronBPH/>
        <WhatSectionBPH />
      </main>
      <footer className="mx-auto w-full">
        <Footer />
      </footer>
    </>
  );
}
