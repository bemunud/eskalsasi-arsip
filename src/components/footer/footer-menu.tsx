import Link from "next/link";
import Image from "next/image";

export default function FooterMenu() {
  return (
    <>
      <section className="relative border-t-2 border-stone-500 py-5 text-center text-[10px] font-medium md:px-0 md:text-xs">
        <div className="absolute inset-x-0 -top-5 flex items-center justify-center">
          <div className="relative flex h-10 w-14 justify-center">
            <div className="absolute inset-0 -top-[1px] h-full w-full rounded-full bg-white blur-[6px]"></div>
            <Image
              src={"/logo-anit.svg"}
              alt="logo brand"
              width={32}
              height={32}
              className="relative w-7"
              priority
            />
          </div>
        </div>
        <div className="container mx-auto flex flex-col-reverse justify-between lg:flex-row">
          <figcaption className="flex items-center justify-center lg:justify-start">
            © {new Date().getFullYear()} BEM Udayana
            <span className="mx-1 h-[2px] w-[2px] rounded-full bg-black"></span>
            All right reserved
          </figcaption>
          <div className="flex items-center justify-center space-x-2 py-5 font-medium lg:justify-evenly lg:py-0">
            <Link
              href="https://www.figma.com/proto/WfTVnHmI757tzbLl3nsR2Y/BEM-Udayana?page-id=1%3A2&node-id=1-3&viewport=451%2C294%2C0.05&t=fAscTnkA7KiEDHbu-1&scaling=contain&content-scaling=fixed"
              className="underline-offset-4 hover:underline"
              target="_blank"
            >
              Press Kit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
