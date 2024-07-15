import Image from "next/image";
import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import { Button } from "../ui/button";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { Agent } from "https";

export default async function BlogPreview() {
  const posts = await fetchPages();

  return (
    <>
      <section className="container flex w-full flex-col gap-7">
        <h2 className="text-center text-4xl font-extrabold text-black">
          Informasi & Kajian Terbaru
        </h2>
        <Suspense fallback={<Loading />}>
          <div className="md:container">
            <div className="md:container">
              <div className="md:container">
                <div className="mt-4 justify-evenly gap-3 divide-y divide-black border-y border-black">
                  {posts.results.slice(0, 3).map((post: any) => (
                    <Link
                      key={post.id}
                      className="flex flex-col gap-8 rounded-lg py-3 transition-all duration-300 ease-in-out hover:bg-[#e1e6ea] hover:shadow-lg focus:outline-none focus:ring focus:ring-[#515355] focus:ring-opacity-50 md:flex-row"
                      href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={post.cover.file.url}
                          alt={`cover ${post.properties.Title.title[0].plain_text}`}
                          width={200}
                          height={200}
                          className="rounded-lg w-full md:h-auto md:w-64"
                          priority
                        />
                      </div>

                      <div className="flex w-auto flex-col items-start justify-start gap-1 align-middle md:justify-center">
                        <h1 className="text-start text-2xl font-extrabold text-black">
                          {post.properties.Title.title[0].plain_text}
                        </h1>
                        {post.properties.Tags.multi_select.map((tag: any) => (
                          <div
                            key={tag.id}
                            className={
                              tag.name === "kajian"
                                ? "rounded-lg border-2 border-green-400 bg-green-200 px-2 py-0.5 text-sm font-medium text-green-600"
                                : tag.name === "warta"
                                  ? "rounded-lg border-2 border-purple-400 bg-purple-200 px-2 py-0.5 text-sm font-medium text-purple-600"
                                  : tag.name === "berita"
                                    ? "rounded-lg border-2 border-stone-400 bg-stone-200 px-2 py-0.5 text-sm font-medium text-stone-600"
                                    : ""
                            }
                          >
                            {tag.name}
                          </div>
                        ))}
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
