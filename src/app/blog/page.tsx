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
      <header className="fixed z-[20] w-full bg-white mx-auto">
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col gap-y-24 bg-primary pb-32">
        <section className="flex flex-col space-y-4 mt-40">
          <h1 className="text-4xl font-bold text-center text-primary">Blog</h1>
          <p className="text-lg text-center text-muted-foreground">
            Informasi terkini dari BEM Udayana
          </p>
        </section>
        <section className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.results.map((post: any) => (
            <Link
              key={post.id}
              className="flex gap-10 p-3 border flex-col hover:bg-[#e1e6ea] hover:shadow-lg rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring focus:ring-[#515355] focus:ring-opacity-50"
              href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
            >
              <div className="">
                <Image
                  src={post.cover.file.url}
                  alt={`cover ${post.properties.Title.title[0].plain_text}`}
                  width={200}
                  height={200}
                  className="rounded-lg w-full h-auto"
                  priority
                />
              </div>

              <div className="flex flex-col w-auto gap-1.5">
                <h1 className="font-extrabold text-2xl text-start md:text-center text-black">
                  {post.properties.Title.title[0].plain_text}
                </h1>
                {post.properties.Tags.multi_select.map((tag: any) => (
                  <div
                    key={tag.id}
                    className={
                      tag.name === "kajian"
                        ? "w-fit px-2 py-0.5 text-sm font-medium bg-green-200 text-green-600 border-green-400 border-2 rounded-lg"
                        : tag.name === "warta"
                        ? "w-fit px-2 py-0.5 text-sm font-medium bg-purple-200 text-purple-600 border-purple-400 border-2 rounded-lg"
                        : tag.name === "berita"
                        ? "w-fit px-2 py-0.5 text-sm font-medium bg-stone-200 text-stone-600 border-stone-400 border-2 rounded-lg"
                        : ""
                    }
                  >
                    {tag.name}
                  </div>
                ))}
                <article className="text-sm py-3 text-justify leading-snug text-muted-foreground">{post.properties.deskripsi.rich_text[0].plain_text}</article>
                <div className="flex items-center justify-start gap-2">
                  <Avatar>
                    <AvatarImage
                      src={`icon/${post.properties.icon.select.name}`}
                    />
                    <AvatarFallback>Kominfo</AvatarFallback>
                  </Avatar>
                  <div className="text-sm font-medium w-1/2">{post.properties.Author.select.name}</div>
                </div>
                <div className="text-xs font-medium text-end">
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
        </section>
      </main>
      <footer className="w-full mx-auto">
        <Footer />
      </footer>
    </>
  );
}
