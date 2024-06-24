import Link from "next/link";
import Image from "next/image";

export default function FooterMenu() {
  return (
    <>
      <section className="relative border-t-2 border-stone-500 py-5 text-center text-[10px] md:text-xs font-medium md:px-0">
        <div className="absolute inset-x-0 -top-5 flex items-center justify-center">
          <div className="relative flex h-10 w-14 justify-center">
            <div className="absolute inset-0 -top-[1px] h-full w-full rounded-full bg-white blur-[6px]"></div>
            <Image
              src={"/logo-anit.svg"}
              alt="logo brand"
              width={32}
              height={32}
              className="w-7 relative"
              priority
            />
          </div>
        </div>
        <div className="container mx-auto flex justify-between flex-col-reverse lg:flex-row">
          <figcaption className="flex items-center justify-center lg:justify-start">
            © {new Date().getFullYear()} BEM Udayana
            <span className="mx-1 h-[2px] w-[2px] rounded-full bg-black"></span>
            All right reserved
          </figcaption>
          <div className="flex items-center justify-center lg:justify-evenly space-x-2 font-medium py-5 lg:py-0">
            <Link
              href="/support"
              className="underline-offset-4 hover:underline"
            >
              Kebijakan Privasi
            </Link>
            <span className="h-[2px] w-[2px] rounded-full bg-black"></span>
            <Link href="/brand" className="underline-offset-4 hover:underline">
              Syarat Penggunaan
            </Link>
            <span className="h-[2px] w-[2px] rounded-full bg-black"></span>
            <Link href="#" className="underline-offset-4 hover:underline">
              Keamananan Informasi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
