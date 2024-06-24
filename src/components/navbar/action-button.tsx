import { Button } from "@/components/ui/button";
import { GOVERNANCE, AUDIT, TENTANG } from "@/scripts";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowUpRight } from "lucide-react";
import { AlignLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
                <div className="flex flex-col space-y-6 items-start w-full text-lg text-black mt-20">
                  <SheetTitle className="text-xl">Governance</SheetTitle>
                  <ul className="text-justify space-y-4 bg-white p-4 rounded-xl">
                    {GOVERNANCE.map((component) => (
                      <li key={component.title}>
                        <Link
                          href={`${component.href}`}
                          className="block select-none bg-white space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-colors hover:bg-stone-100"
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
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {component.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <SheetTitle className="text-xl">Audit</SheetTitle>
                  <ul className="text-justify space-y-4 bg-stone-500 p-4 rounded-lg w-full">
                    {AUDIT.map((component) => (
                      <li key={component.title} className="w-full">
                        <Link
                          href={`${component.href}`}
                          className="block select-none bg-white space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-stone-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-semibold leading-none">
                            {component.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {component.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <SheetTitle className="text-xl">Tentang</SheetTitle>
                  <ul className="text-justify space-y-4 bg-stone-500 p-4 rounded-lg w-full">
                    {TENTANG.map((component) => (
                      <li key={component.title} className="w-full">
                        <Link
                          href={`${component.href}`}
                          className="block select-none bg-white space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-stone-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-semibold leading-none">
                            {component.title}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <SheetTitle className="border-b-2 border-black w-full text-start">
                    <Link
                      href={"/"}
                      className="text-2xl flex justify-between w-full p-2"
                    >
                      Kajian
                      <ArrowUpRight className="h-8 w-8" aria-hidden="true" />
                    </Link>
                  </SheetTitle>
                  <SheetTitle className="border-b-2 border-black w-full text-start">
                    <Link
                      href={"/"}
                      className="text-2xl flex justify-between w-full p-2"
                    >
                      Berita
                      <ArrowUpRight className="h-8 w-8" aria-hidden="true" />
                    </Link>
                  </SheetTitle>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex lg:space-x-4">
        <Button className="text-sm font-semibold" variant="link">
          Hubungi Kami
        </Button>
      </div>
    </div>
  );
}
