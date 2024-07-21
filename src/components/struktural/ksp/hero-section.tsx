import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function JumbotronSPI() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center overflow-hidden lg:h-full xl:h-[48rem]">
      <div className="relative h-screen w-full overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={`/cover/spi.png`}
          width={1980}
          height={1020}
          alt="cover"
          className="h-screen w-full blur-md brightness-50 filter"
        />
        <div className="absolute inset-0 w-full bg-stone-700 bg-opacity-20 backdrop-blur-xl"></div>
      </div>
      <BlurFade delay={0.75} inView className="absolute z-10 rounded-md overflow-hidden">
        <div className="flex flex-col items-center justify-center p-3 gap-2">
          <Image src={`/cover/spi.svg`} width={150} height={150} alt="spi" />
          <div className="font-semibold text-white">
            Satuan Pengendali Internal
          </div>
        </div>
        <BorderBeam/>
      </BlurFade>
    </section>
  );
}
