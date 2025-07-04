"use client";

import Image from "next/image";
import { DEPARTEMEN } from "@/scripts";

export default function WhatSectionASPER() {
  return (
    <>
      <section className="container mt-24 grid items-center gap-y-36 lg:mt-0 lg:grid-cols-2 lg:gap-y-0">
        <div className="">
          <h1 className="my-10 text-5xl font-semibold lg:mb-10">
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
        <div className="relative order-first flex justify-center lg:order-last">
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
              width={400}
              height={400}
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
        <h1 className="text-3xl font-semibold text-gray-500 mb-6">Koordinasi</h1>
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-flow-col-dense gap-9">
          {DEPARTEMEN.filter((departemen) => departemen.label === "asper").map(
            (departemen) => (
              <div className="flex gap-2" key={departemen.name}>
                <Image
                src={departemen.img}
                alt={departemen.body}
                width={50}
                height={50}
              />
              <h3 className="w-2/3 text-sm font-bold items-center flex text-slate-700">{departemen.body}</h3>
              </div>
            ),
          )}
        </div>
      </section>
    </>
  );
}
