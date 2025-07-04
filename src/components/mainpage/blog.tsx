import Image from "next/image";
import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import { Button } from "../ui/button";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default async function BlogPreview() {
  const posts = await fetchPages();

  return (
    <>
      <section className="container flex w-full flex-col gap-7">
        <div className="flex w-full flex-col justify-center gap-4">
          <h2 className="text-center text-3xl font-extrabold text-black md:text-4xl">
            Tetap terhubung dengan kegiatan kami
          </h2>
          <h2 className="text-balance text-center text-sm font-medium text-[#9daec5] md:text-lg">
            Kunjungi blog kami untuk mendapatkan informasi terkini seputar
            kegiatan mahasiswa Udayana
          </h2>
        </div>
        <Suspense fallback={<Loading />}>
          <div className="md:container">
            <div className="md:container">
              <div className="md:container">
                <div className="mt-4 justify-evenly gap-3 divide-y divide-black border-y border-black">
                  {posts.results.slice(0, 3).map((post: any) => (
                    <Link
                      key={post.id}
                      className="flex flex-col gap-8 py-3 transition-all duration-300 ease-in-out hover:bg-[#e1e6ea] hover:shadow-lg focus:outline-none focus:ring focus:ring-[#515355] focus:ring-opacity-50 md:flex-row"
                      href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={`/cover/${post.properties.slug.rich_text[0].plain_text}.webp`}
                          alt={`cover ${post.properties.Title.title[0].plain_text}`}
                          width={200}
                          height={200}
                          className="w-full rounded-lg md:h-auto md:w-64"
                          priority
                        />
                      </div>

                      <div className="flex w-auto flex-col items-start justify-start gap-1 align-middle md:justify-center">
                        <h1 className="text-start text-xl font-extrabold capitalize text-black">
                          {post.properties.Title.title[0].plain_text}
                        </h1>
                        <div className="flex gap-2">
                          {post.properties.Tags.multi_select.map((tag: any) => (
                            <div
                              key={tag.id}
                              className={
                                "text-sm font-extrabold uppercase text-blue-500"
                              }
                            >
                              {tag.name}
                            </div>
                          ))}
                        </div>
                        <div className="text-lg font-medium">
                          {new Date(
                            post.properties.Date.created_time,
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Suspense>

        <Link href={"/blog"} className="flex items-center justify-center">
          <Button
            className="rounded-xl px-12 py-6 font-medium"
            variant={"eskalasi_scale"}
          >
            Baca selengkapnya dari kami
          </Button>
        </Link>
      </section>
    </>
  );
}
