import Footer from "@/components/footer";
import ComingSoon from "@/components/magicui/comingsoon";
import Navbar from "@/components/navbar/page";
import JumbotronRHH from "@/components/struktural/rhh/hero-section";
import WhatSectionRHH from "@/components/struktural/rhh/what-section";

export default async function Home() {
  return (
    <>
      <header className="fixed z-[20] mx-auto w-full bg-white">
        <Navbar />
      </header>
      <main className="bg-primary flex min-h-screen flex-col gap-y-24 pb-32">
        <JumbotronRHH/>
        <WhatSectionRHH />
      </main>
      <footer className="mx-auto w-full">
        <Footer />
      </footer>
    </>
  );
}
