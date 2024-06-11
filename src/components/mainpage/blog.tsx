import Image from "next/image";
import { fetchPages } from "@/lib/notion";
import Link from "next/link";

export default async function BlogPreview() {
  const posts = await fetchPages();

  return (
    <>
      <main className="min-h-screen">
        <h1 className="font-extrabold text-4xl text-center text-black">
          Informasi & Kajian Terbaru
        </h1>
        <div className="gap-5 bg-slate-500 mt-4 justify-around">
          {posts.results.map((post: any) => (
            <div key={post.id} className="flex gap-8">
              <Image
                src={post.cover.external.url}
                width={200}
                height={200}
                alt="cover"
                className="w-64 h-42"
              />
              <div className="">
                <h1 className="font-extrabold text-2xl text-center text-black">
                  {post.properties.Title.title[0].plain_text}
                </h1>
                {post.properties.Tags.multi_select.map((tag: any) => (
                  <p key={tag.id}>{tag.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
