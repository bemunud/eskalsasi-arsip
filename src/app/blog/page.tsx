import Footer from "@/components/footer";
import Navbar from "@/components/navbar/page";
import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Page() {
  const posts = await fetchPages();

  return (
    <>
      <header className="fixed z-[20] mx-auto w-full bg-white">
        <Navbar />
      </header>
      <main className="bg-primary flex min-h-screen flex-col gap-y-24 pb-32">
        <section className="mt-40 flex flex-col space-y-4">
          <h1 className="text-primary text-center text-4xl font-bold">Blog</h1>
          <p className="text-muted-foreground text-center text-lg">
            Informasi terkini dari BEM Udayana
          </p>
        </section>
        <section className="container grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.results.map((post: any) => (
            <Link
              key={post.id}
              className="flex flex-col gap-10 rounded-lg border p-3 transition-all duration-300 ease-in-out hover:bg-[#e1e6ea] hover:shadow-lg focus:outline-none focus:ring focus:ring-[#515355] focus:ring-opacity-50"
              href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
            >
              <div className="">
                <Image
                  src={post.cover.file.url}
                  alt={`cover ${post.properties.Title.title[0].plain_text}`}
                  width={200}
                  height={200}
                  className="h-auto w-full rounded-lg"
                  priority
                />
              </div>

              <div className="flex w-auto flex-col gap-1.5">
                <h1 className="text-start text-2xl font-extrabold text-black md:text-center">
                  {post.properties.Title.title[0].plain_text}
                </h1>
                {post.properties.Tags.multi_select.map((tag: any) => (
                  <div
                    key={tag.id}
                    className={
                      tag.name === "kajian"
                        ? "w-fit rounded-lg border-2 border-green-400 bg-green-200 px-2 py-0.5 text-sm font-medium text-green-600"
                        : tag.name === "warta"
                          ? "w-fit rounded-lg border-2 border-purple-400 bg-purple-200 px-2 py-0.5 text-sm font-medium text-purple-600"
                          : tag.name === "berita"
                            ? "w-fit rounded-lg border-2 border-stone-400 bg-stone-200 px-2 py-0.5 text-sm font-medium text-stone-600"
                            : ""
                    }
                  >
                    {tag.name}
                  </div>
                ))}
                <article className="text-muted-foreground py-3 text-justify text-xs font-thin leading-snug">
                  {post.properties.deskripsi.rich_text[0].plain_text}
                </article>
                <div className="flex items-center justify-start gap-2">
                  <Avatar>
                    <AvatarImage
                      src={`icon/${post.properties.icon.select.name}`}
                    />
                    <AvatarFallback>Kominfo</AvatarFallback>
                  </Avatar>
                  <div className="w-1/2 text-sm font-medium">
                    {post.properties.Author.select.name}
                  </div>
                </div>
                <div className="text-end text-xs font-medium">
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
        </section>
      </main>
      <footer className="mx-auto w-full">
        <Footer />
      </footer>
    </>
  );
}
