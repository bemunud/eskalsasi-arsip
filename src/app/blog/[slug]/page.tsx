import { fetchBySlug, fetchPageBloks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import Navbar from "@/components/navbar/page";
import Image from "next/image";
import Footer from "@/components/footer";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function renderProse({
  params,
}: {
  params: { slug: string };
}) {
  const post: any = await fetchBySlug(params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  const blocks = await fetchPageBloks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  return (
    <>
      <header className="fixed top-0 z-[20] mx-auto w-full bg-white">
        <Navbar />
      </header>
      <main className="bg-primary container flex flex-col min-h-screen justify-center pt-24 pb-12">
        <section className="prose mx-auto flex flex-col justify-center gap-y-5">
          <h1 className="text-center text-lg font-bold">
            {post.properties.Title.title[0].plain_text}
          </h1>
          <div className="flex justify-center">
            <Image
              src={post.cover.file.url}
              alt={`cover ${post.properties.Title.title[0].plain_text}`}
              width={400}
              height={400}
              className="w-full rounded-lg md:prose"
              priority
            />
          </div>
          <div
            className="mx-auto text-justify"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </section>
        <section className="container mx-auto max-w-prose rounded-lg bg-white p-3">
            <div className="flex flex-col gap-3">
              <span className="w-fit text-sm font-bold">Author</span>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`/icon/${post.properties.icon.select.name}`} />
                  <AvatarFallback>EC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-balance text-sm font-medium">
                    {post.properties.Author.select.name}
                  </span>
                  <div className="text-xs font-medium">
                    {new Date(
                      post.properties.Date.created_time,
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
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
