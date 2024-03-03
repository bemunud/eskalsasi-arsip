"use client";

import { Button } from "../ui/button";

export default function MeshGradient() {
  return (
    <section className="w-full h-screen xl:h-[48rem] flex flex-col items-center justify-center gap-7 meshGradient">
      <h1 className="max-w-4xl lg:max-w-5xl text-center text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-snug">
        Jembatan pengantar aspirasi di kampus &quot;pewahyu rakyat&quot;
      </h1>
      <p className="text-lg md:text-xl max-w-2xl">
        Selamat datang di portal informasi Badan Eksekutif Mahasiswa Universitas
        Udayana
      </p>
      <div className="flex items-center gap-4">
        <Button>Baca kajian terakhir</Button>
        <Button variant="outline">Lihat Pengumuman</Button>
      </div>
    </section>
  );
}

// md:container max-h-[50rem]
