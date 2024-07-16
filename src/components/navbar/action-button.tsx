import { GOVERNANCE, AUDIT, TENTANG } from "@/scripts";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaTiktok, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { buttonVariants } from "../ui/button";

export default function ActionButtons() {
  return (
    <div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignLeft />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {/* desain nav harusnya disini */}
              <SheetDescription>
                <div className="mt-20 flex w-full flex-col items-start space-y-6 text-lg text-black">
                  <SheetTitle className="text-xl">Governance</SheetTitle>
                  <ul className="space-y-4 rounded-xl bg-white p-4 text-justify">
                    {GOVERNANCE.map((component) => (
                      <li key={component.title}>
                        <Link
                          href={`${component.href}`}
                          className="block select-none border border-stone-200 space-y-1 rounded-xl bg-white p-4 leading-none no-underline outline-none transition-colors hover:bg-stone-100"
                        >
                          <Image
                            src={`${component.icon}`}
                            alt="N"
                            width={32}
                            height={32}
                            className="w-8 py-1.5"
                            priority
                          />
                          <div className="text-sm font-semibold leading-none">
                            {component.title}
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {component.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <SheetTitle className="text-xl">Audit</SheetTitle>
                  <ul className="w-full space-y-4 rounded-lg bg-white p-4 text-justify">
                    {AUDIT.map((component) => (
                      <li key={component.title} className="w-full">
                        <Link
                          href={`${component.href}`}
                          className="border border-stone-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md bg-white p-4 leading-none no-underline outline-none transition-colors hover:bg-stone-200"
                        >
                          <div className="text-sm font-semibold leading-none">
                            {component.title}
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {component.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <SheetTitle className="text-xl">Tentang</SheetTitle>
                  <ul className="w-full space-y-4 rounded-lg bg-white p-4 text-justify">
                    {TENTANG.map((component) => (
                      <li key={component.title} className="w-full">
                        <Link
                          href={`${component.href}`}
                          className="border border-stone-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md bg-white p-4 leading-none no-underline outline-none transition-colors hover:bg-stone-200"
                        >
                          <div className="text-sm font-semibold leading-none">
                            {component.title}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <SheetTitle className="text-xl">Postingan</SheetTitle>
                  <Link href={"/blog"} className={buttonVariants({variant: "link", className: "text-lg font-semibold",})}>Informasi Terkini</Link>
                  <SheetTitle className="text-xl">Sosial Media</SheetTitle>
                  <div className="flex space-x-4">
                    <Link
                      href={"https://web.facebook.com/bemudayana"}
                      target="_blank"
                    >
                      <FaFacebook />
                    </Link>
                    <Link href={"https://x.com/BEM_Udayana"} target="_blank">
                      <FaXTwitter />
                    </Link>
                    <Link
                      href={"https://www.instagram.com/bem_udayana/"}
                      target="_blank"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href={"https://www.tiktok.com/@bem_udayana"}
                      target="_blank"
                    >
                      <FaTiktok />
                    </Link>
                    <Link
                      href={"https://www.linkedin.com/company/bemudayana/"}
                      target="_blank"
                    >
                      <FaLinkedin />
                    </Link>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex lg:space-x-4">
        <Link href={"https://web.facebook.com/bemudayana"} target="_blank">
          <FaFacebook />
        </Link>
        <Link href={"https://x.com/BEM_Udayana"} target="_blank">
          <FaXTwitter />
        </Link>
        <Link href={"https://www.instagram.com/bem_udayana/"} target="_blank">
          <FaInstagram />
        </Link>
        <Link href={"https://www.tiktok.com/@bem_udayana"} target="_blank">
          <FaTiktok />
        </Link>
        <Link
          href={"https://www.linkedin.com/company/bemudayana/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}
