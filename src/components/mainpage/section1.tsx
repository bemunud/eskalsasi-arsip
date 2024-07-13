import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import Ripple from "../magicui/ripple";

export default function MeshGradient() {
  return (
    <section className="relative flex h-full w-full items-center overflow-hidden justify-center xl:h-[48rem] flex-col meshGradient">
      <div className="z-10 w-full h-screen xl:h-[48rem] flex flex-col items-center justify-center gap-7">
        <h1 className="max-w-screen-md lg:max-w-screen-lg text-black text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">
          Jembatan pengantar aspirasi di kampus &quot;pewahyu rakyat&quot;
        </h1>
        <p className="text-base md:text-xl max-w-2xl text-center">
          Selamat datang di portal informasi Badan Eksekutif Mahasiswa
          Universitas Udayana
        </p>
        <div className="flex items-center gap-4 flex-col md:flex-row">
          <Link href={"#"} className={buttonVariants({variant : "eskalasi", className : "w-96 md:w-auto", size : "lg"})}>Baca Kajian Terakhir</Link>
          <Link href={"#"} className={buttonVariants({variant : "outline", className : "w-96 md:w-auto", size : "lg"})}>Lihat Pengumuman</Link>
        </div>
      </div>
      <Ripple />
    </section>
  );
}

// md:container max-h-[50rem]
