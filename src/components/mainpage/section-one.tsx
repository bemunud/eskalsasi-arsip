"use client";

import Spline from "@splinetool/react-spline";
import { Button } from "../ui/button";

export default function PolygonGradient() {
  return (
    <div className="w-full h-auto">
      <Spline
        scene="https://prod.spline.design/CQ1nUX99oHr-a0Ee/scene.splinecode"
        className="w-full !h-screen xl:!h-[48rem] polygonGradientImageUtilize"
      />
      <section className="bg-transparent absolute top-0 mx-auto flex h-screen w-full bg-cover bg-center bg-no-repeat text-center xl:h-[48rem]">
        <div className="mx-auto w-full px-6 md:px-0 flex flex-col justify-center items-center gap-7">
          <h1 className="max-w-4xl lg:max-w-5xl text-center text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-snug">
            Jembatan pengantar aspirasi di kampus &quot;pewahyu rakyat&quot;
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Selamat datang di portal informasi Badan Eksekutif Mahasiswa
            Universitas Udayana
          </p>
          <div className="flex items-center gap-4">
            <Button>Baca kajian terakhir</Button>
            <Button variant="outline">Lihat Pengumuman</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// md:container max-h-[50rem]
