"use client";

import Image from "next/image";
import { DEPARTEMEN } from "@/scripts";

export default function WhatSectionASPER() {
  return (
    <>
      <section className="container mt-24 grid items-center gap-y-36 md:mt-0 md:grid-cols-2 md:gap-y-0">
        <div className="">
          <h1 className="my-10 text-7xl font-semibold md:mb-10">
            Analisis dan Pergerakan
          </h1>
          <p className="text-justify font-medium">
            Bergerak sebagai ujung tombak dan garda terdepan dalam menyuarakan
            segala aspirasi dan keresahan yang terstruktur dan ilmiah
            berdasarkan kajian. Dan mampu Menjadi pencerdas isu sosial dan
            politik kepada masyarakat dan mahasiswa secara luas melalui
            propaganda media-media
          </p>
        </div>
        <div className="relative order-first flex justify-center md:order-last">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={"/logoeskalasi-svg.svg"}
              alt="logo brand"
              width={400}
              height={400}
              className="opacity-40 blur-md"
              priority
              draggable="false"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={"/asset/atribut.svg"}
              alt="logo brand"
              width={500}
              height={500}
              className="opacity-40"
              priority
              draggable="false"
            />
          </div>
          <Image
            src="/icon/analisis-dan-pergerakan.svg"
            alt="Kepala Staf Presiden"
            className="opacity-90"
            width={200}
            height={200}
          />
        </div>
      </section>
      <section className="container">
        <h1 className="text-3xl font-semibold text-stone-500">Koordinasi</h1>
        {DEPARTEMEN.filter((departemen) => departemen.label === 'asper').map((departemen) => (
          <Image src={departemen.img} alt={departemen.label} width={100} height={100}/>
        ))}
      </section>
    </>
  );
}
