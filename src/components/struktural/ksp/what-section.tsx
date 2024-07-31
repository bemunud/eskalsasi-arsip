import Image from "next/image";
export default function WhatSectionKSP() {
  return (
    <>
      <section className="container grid md:grid-cols-2 gap-y-36 md:gap-y-0 mt-24 md:mt-0 items-center">
        <div className="">
          <h1 className="my-10 text-7xl font-semibold md:mb-10">
            Kepala Staf Presiden
          </h1>
          <p className="text-justify font-medium">
            Kepala Staf Presiden adalah pejabat yang bertanggung jawab atas
            koordinasi dan administrasi pelaksanaan tugas-tugas Presiden. Kepala
            Staf Presiden membantu Presiden dalam melaksanakan tugas-tugasnya
            dan bertanggung jawab kepada Presiden. Kepala Staf Presiden dipilih
            dan diangkat oleh Presiden.
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
            src="/icon/pengurus-inti.svg"
            alt="Kepala Staf Presiden"
            className="opacity-90"
            width={200}
            height={200}
          />
        </div>
      </section>
    </>
  );
}
