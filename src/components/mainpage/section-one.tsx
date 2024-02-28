"use client";

import Spline from "@splinetool/react-spline";

export default function PolygonGradient() {
  return (
    <div className="w-full h-auto">
      <Spline
        scene="https://prod.spline.design/CQ1nUX99oHr-a0Ee/scene.splinecode"
        className="w-full !h-[32rem] md:!h-[40rem] lg:!h-[48rem] polygonGradientImageUtilize md:container"
      />
      <section className="bg-transparent absolute top-0 mx-auto flex h-[30rem] w-full bg-cover bg-center bg-no-repeat text-center md:h-[40rem] pt-36">
        <div className="mx-auto w-full px-6 md:px-0 flex flex-col justify-center items-center gap-10">
          <h1 className="max-w-5xl mt-6 text-center text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-snug">
            Jembatan pengantar aspirasi di kampus &quot;pewahyu rakyat&quot;
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Selamat datang di portal informasi Badan Eksekutif Mahasiswa
            Universitas Udayana
          </p>
          <span className="rounded-full w-8 h-16 border border-slate-600">
            <span className="animate-bounce rounded-full bg-black">t</span>
          </span>
        </div>
      </section>
    </div>
  );
}

// md:container max-h-[50rem]
