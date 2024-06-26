"use client";

import { Button } from "../ui/button";
import Ripple from "../magicui/ripple";

export default function MeshGradient() {
  return (
    <section className="relative flex h-full w-full items-center overflow-hidden justify-center xl:h-[48rem] flex-col meshGradient">
      <div className="z-10 w-full h-screen xl:h-[48rem] flex flex-col items-center justify-center gap-7">
        <h1 className="max-w-4xl lg:max-w-5xl text-black text-center text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-snug">
          Jembatan pengantar aspirasi di kampus &quot;pewahyu rakyat&quot;
        </h1>
        <p className="text-base md:text-xl max-w-2xl text-center">
          Selamat datang di portal informasi Badan Eksekutif Mahasiswa
          Universitas Udayana
        </p>
        <div className="flex items-center gap-4 flex-col md:flex-row">
          <Button className="bg-black">Baca kajian terakhir</Button>
          <Button variant="outline">Lihat Pengumuman</Button>
        </div>
      </div>
      <Ripple />
    </section>
  );
}

// md:container max-h-[50rem]
