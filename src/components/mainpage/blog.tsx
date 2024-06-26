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
              <div className="gap-5 mt-4 justify-evenly border-y border-black divide-y divide-black">
                {posts.results.slice(0, 3).map((post: any) => (
                  <div key={post.id} className="flex gap-8 py-6">
                    <div
                      className="bg-cover bg-center w-64 h-32"
                      style={{
                        backgroundImage: `url(${post.cover.external.url})`,
                      }}
                    ></div>

                    <div className="">
                      <h1 className="font-extrabold text-2xl text-center text-black">
                        {post.properties.Title.title[0].plain_text}
                      </h1>
                      {post.properties.Tags.multi_select.map((tag: any) => (
                        <p key={tag.id}>{tag.name}</p>
                      ))}
                      <p>{post.properties.slug.rich_text[0].plain_text}</p>
                      <p>{post.properties.Date.created_time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Link href={"/blog"} className="flex items-center justify-center">
          <Button className="rounded-xl px-12 py-6 font-medium">
            Baca selengkapnya dari kami
          </Button>
        </Link>
      </section>
    </>
  );
}
