import Image from "next/image";
import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import { Button } from "../ui/button";

export default async function BlogPreview() {
  const posts = await fetchPages();

  return (
    <>
      <section className="w-full flex flex-col gap-7 container">
        <h2 className="font-extrabold text-4xl text-center text-black">
          Informasi & Kajian Terbaru
        </h2>
        <div className="md:container">
          <div className="md:container">
            <div className="md:container">
              <div className="gap-3 mt-4 justify-evenly border-y border-black divide-y divide-black">
                {posts.results.slice(0, 3).map((post: any) => (
                  <Link
                    key={post.id}
                    className="flex gap-8 py-3 flex-col lg:flex-row"
                    href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
                  >
                    <div
                      className="bg-cover bg-center w-full h-64 lg:w-64 lg:h-32 rounded-lg"
                      style={{
                        backgroundImage: `url(${post.cover.external.url})`,
                      }}
                    ></div>

                    <div className="flex flex-col justify-center items-start align-middle w-auto gap-1">
                      <h1 className="font-extrabold text-2xl text-center text-black">
                        {post.properties.Title.title[0].plain_text}
                      </h1>
                      {post.properties.Tags.multi_select.map((tag: any) => (
                        <div
                          key={tag.id}
                          className={
                            tag.name === "kajian"
                              ? "px-2 py-0.5 text-sm font-medium bg-green-200 text-green-600 border-green-400 border-2 rounded-lg"
                              : tag.name === "warta"
                              ? "px-2 py-0.5 text-sm font-medium bg-purple-200 text-purple-600 border-purple-400 border-2 rounded-lg"
                              : tag.name === "berita"
                              ? "px-2 py-0.5 text-sm font-medium bg-stone-200 text-stone-600 border-stone-400 border-2 rounded-lg"
                              : ""
                          }
                        >
                          {tag.name}
                        </div>
                      ))}
                      <div className="text-lg font-medium">
                        {new Date(
                          post.properties.Date.created_time
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

        <Link href={"/blog"} className="flex items-center justify-center">
          <Button
            className="rounded-xl px-12 py-6 font-medium"
            variant={"esklasi"}
          >
            Baca selengkapnya dari kami
          </Button>
        </Link>
      </section>
    </>
  );
}
