import Footer from "@/components/footer";
import ComingSoon from "@/components/magicui/comingsoon";
import Navbar from "@/components/navbar/page";
import JumbotronKemasya from "@/components/struktural/kemasya/hero-section";
import WhatSectionKEMASYA from "@/components/struktural/kemasya/what-section";


export default async function Home() {
  return (
    <>
      <header className="fixed z-[20] mx-auto w-full bg-white">
        <Navbar />
      </header>
      <main className="bg-primary flex min-h-screen flex-col gap-y-24 pb-32">
        <JumbotronKemasya/>
        <WhatSectionKEMASYA />
      </main>
      <footer className="mx-auto w-full">
        <Footer />
      </footer>
    </>
  );
}
