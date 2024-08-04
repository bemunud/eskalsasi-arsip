"use client";

import Image from "next/image";
import { DEPARTEMEN } from "@/scripts";

export default function WhatSectionRHH() {
  return (
    <>
      <section className="container mt-24 grid items-center gap-y-36 md:mt-0 md:grid-cols-2 md:gap-y-0">
        <div className="">
          <h1 className="my-10 text-5xl font-semibold md:mb-10">
          Relasi & Harmonisasi Hubungan
          </h1>
          <p className="text-justify font-medium">
          Media sinergi untuk Badan Eksekutif Mahasiswa dalam menjalin hubungan antar
organisasi mahasiswa di luar dan di dalam lingkup Universitas Udayana serta membersamai
proses hubungan dengan pendekatan harmonis.
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
              width={400}
              height={400}
              className="opacity-40"
              priority
              draggable="false"
            />
          </div>
          <Image
            src="/icon/relasi-dan-harmonisasi-hubungan.svg"
            alt="rhh"
            className="opacity-90"
            width={200}
            height={200}
          />
        </div>
      </section>
      <section className="container">
        <h1 className="mb-6 text-3xl font-semibold text-gray-500">
          Koordinasi
        </h1>
        <div className="grid grid-flow-row-dense gap-9 md:grid-cols-2 lg:flex">
          {DEPARTEMEN.filter((departemen) => departemen.label === "rhh").map(
            (departemen) => (
              <div className="flex gap-2" key={departemen.name}>
                <Image
                  src={departemen.img}
                  alt={departemen.body}
                  width={50}
                  height={50}
                />
                <h3 className="flex w-2/3 items-center text-sm font-bold text-slate-700">
                  {departemen.body}
                </h3>
              </div>
            ),
          )}
        </div>
      </section>
    </>
  );
}
