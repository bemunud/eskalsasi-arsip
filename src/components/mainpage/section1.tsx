import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import Ripple from "../magicui/ripple";

export default function MeshGradient() {
  return (
    <section className="meshGradient relative flex h-full w-full flex-col items-center justify-center overflow-hidden xl:h-[48rem]">
      <div className="z-10 flex h-screen w-full flex-col items-center justify-center gap-7 xl:h-[48rem]">
        <h1 className="max-w-screen-md text-center text-4xl font-extrabold text-black md:text-5xl lg:max-w-screen-lg lg:text-6xl">
          Jembatan pengantar aspirasi di kampus &quot;pewahyu rakyat&quot;
        </h1>
        <p className="max-w-2xl text-center text-base md:text-xl">
          Selamat datang di portal informasi Badan Eksekutif Mahasiswa
          Universitas Udayana
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Link
            href={"https://t.me/hotlineUdayanabot"}
            className={buttonVariants({
              variant: "eskalasi",
              className: "w-96 md:w-auto",
              size: "lg",
            })}
            target="_blank"
          >
            Yuk Bersuara!
          </Link>
          <Link
            href={"/blog"}
            className={buttonVariants({
              variant: "outline",
              className: "w-96 md:w-auto",
              size: "lg",
            })}
          >
            Informasi Terbaru
          </Link>
        </div>
      </div>
      <Ripple />
    </section>
  );
}

// md:container max-h-[50rem]
