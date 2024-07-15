import FooterMenu from "./footer-menu";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="">
      <div className="container mb-24 flex flex-col gap-y-8 py-5 md:flex-row">
        <div className="grid w-full gap-4 bg-inherit">
          <div className="flex items-center gap-2">
            <span className="flex items-center space-x-3 border-r-2 border-black pr-4">
              <Image
                src={"/logo-brand.svg"}
                alt="logo brand"
                width={32}
                height={32}
                className="w-10"
                priority
                draggable="false"
              />
              <label
                htmlFor="logo"
                className="hidden text-lg font-bold md:inline"
              >
                Badan Eksekutif Mahasiswa
                <br />
                Universitas Udayana
              </label>
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
              <label
                htmlFor="logo"
                className="hidden text-lg font-bold md:inline"
              >
                Kabinet Eskalasi <br />
                Cita Udayana
              </label>
            </span>
          </div>
          <p className="text-sm font-medium">Kunjungi akun sosial media kami</p>
        </div>
        <div className="w-full bg-transparent text-justify text-xs font-medium">
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
