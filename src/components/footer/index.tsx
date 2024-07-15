import FooterMenu from "./footer-menu";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="">
      <div className="container mb-24 flex flex-col gap-y-8 py-5 md:flex-row">
        <div className="grid w-full gap-2 bg-inherit">
          <div className="flex items-start gap-2">
            <span className="flex items-center space-x-3 border-r-2">
              <Image
                src={"/logo-brand.svg"}
                alt="logo brand"
                width={32}
                height={32}
                className="w-10"
                priority
                draggable="false"
              />
            </span>
            <span className="flex items-center space-x-3">
              <Image
                src={"/logoeskalasi-svg.svg"}
                alt="logo brand"
                width={32}
                height={32}
                className="w-12"
                priority
                draggable="false"
              />
            </span>
          </div>
          <div className="gap-6">
            <p className="text-sm font-semibold">
              BEM PM Universitas Udayana
            </p>
            <p className="text-sm font-semibold">Eskalasi Cita Udayana</p>
            <p className="text-balance text-xs font-extralight text-gray-400 py-3">
              Jl. Raya Kampus UNUD, Bukit Jimbaran, Kuta Selatan, Badung, Bali,
              Indonesia 80361
            </p>
          </div>
        </div>
        <div className="w-full bg-transparent text-justify text-xs font-light">
          BEM Udayana adalah singkatan dari Badan Eksekutif Mahasiswa
          Universitas Udayana. Organisasi ini merupakan lembaga eksekutif yang
          mewakili mahasiswa di Universitas Udayana. Tugas utama BEM Udayana
          adalah mengadvokasi kepentingan mahasiswa, mengorganisir
          kegiatan-kegiatan mahasiswa, serta menjembatani komunikasi antara
          mahasiswa dengan pihak universitas dan pemerintah.
        </div>
      </div>
      <FooterMenu />
    </section>
  );
}
