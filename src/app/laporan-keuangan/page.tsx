"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar/page";
import { FaRegFileAlt } from "react-icons/fa";
import { PROOFOFRESERVE } from "@/scripts";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="fixed z-[20] mx-auto w-full bg-white">
        <Navbar />
      </header>
      <main className="bg-primary flex min-h-screen flex-col gap-y-16 py-32">
        <h1 className="text-center text-2xl font-semibold">Laporan Keuangan</h1>
        <section className="container">
          <div className="md:container">
            <div className="md:container">
              <div className="md:container">
                <div className="flex flex-col md:container">
                  {PROOFOFRESERVE.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={buttonVariants({
                        variant: "link",
                        className:
                          "!w-full !items-start !justify-start md:!w-1/2",
                      })}
                    >
                      <FaRegFileAlt className="mr-2 h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="mx-auto w-full">
        <Footer />
      </footer>
    </>
  );
}
