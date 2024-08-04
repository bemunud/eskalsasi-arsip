"use client";

import Image from "next/image";
import { DEPARTEMEN } from "@/scripts";

export default function WhatSectionBPH() {
  return (
    <>
      <section className="container mt-24 grid items-center gap-y-36 lg:mt-0 lg:grid-cols-2 lg:gap-y-0">
        <div className="">
          <h1 className="my-10 text-5xl font-semibold lg:mb-10">
            Badan Pengurus Harian
          </h1>
          <p className="text-justify font-medium">
            Bertanggung jawab atas operasional harian ormawa, seperti koordinasi
            rapat, pengawasan kegiatan, dan administrasi. Menyelenggarakan
            keputusan dan kebijakan yang telah disetujui oleh organisasi.
            Mengkoordinasikan kegiatan antar departemen atau divisi dalam ormawa
            untuk memastikan konsistensi dan sinergi. Menjadi jembatan
            komunikasi antara anggota ormawa.Bertanggung jawab atas operasional
            harian ormawa, seperti koordinasi rapat, pengawasan kegiatan, dan
            administrasi. Menyelenggarakan keputusan dan kebijakan yang telah
            disetujui oleh organisasi. Mengkoordinasikan kegiatan antar
            departemen atau divisi dalam ormawa untuk memastikan konsistensi dan
            sinergi. Menjadi jembatan komunikasi antara anggota ormawa.
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
              width={500}
              height={500}
              className="opacity-40"
              priority
              draggable="false"
            />
          </div>
          <Image
            src="/icon/pengurus-harian.svg"
            alt="Badan Pengurus Harian"
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
          {DEPARTEMEN.filter((departemen) => departemen.label === "bph").map(
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
