import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";

export default function JumbotronSPI() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center overflow-hidden lg:h-full xl:h-[48rem]">
      <div className="relative h-screen w-full overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={`/cover/ksp.png`}
          width={1980}
          height={1020}
          alt="cover"
          className="brightness-50 h-screen w-full blur-md filter"
        />
        <div className="absolute inset-0 w-full bg-stone-700 bg-opacity-20 backdrop-blur-xl"></div>
      </div>
      <BlurFade delay={0.5} inView>
        <Image
          src={`/cover/spi.svg`}
          width={150}
          height={150}
          alt="spi"
          className="top-0 right-0 absolute z-10"
        />
      </BlurFade>
    </section>
  );
}
