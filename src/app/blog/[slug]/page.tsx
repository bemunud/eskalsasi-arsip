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
      <header className="fixed z-[20] w-full bg-white top-0 mx-auto">
        <Navbar />
      </header>
      <main className="min-h-screen flex justify-center py-24 bg-primary">
        <section className="flex flex-col container justify-center gap-y-10 mx-auto">
          <h1 className="text-center font-bold text-lg">
            {post.properties.Title.title[0].plain_text}
          </h1>
          <Avatar>
            <AvatarImage src={`https://github.com/shadcn.png`} />
            <AvatarFallback>EC</AvatarFallback>
          </Avatar>
          <div className="flex justify-center">
            <Image
              src={post.cover.file.url}
              alt={`cover ${post.properties.Title.title[0].plain_text}`}
              width={500}
              height={500}
              className="rounded-lg w-full md:prose"
              priority
            />
          </div>
          <div
            className="prose text-justify mx-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
          <div className="bg-white rounded-lg prose mx-auto p-3 w-full">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold w-fit">Author</span>
              <div className="flex gap-3 items-center">
                <Avatar>
                  <AvatarImage src={`https://github.com/shadcn.png`} />
                  <AvatarFallback>EC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-balance">
                    {post.properties.Author.select.name}
                  </span>
                  <div className="text-xs font-medium">
                    {new Date(
                      post.properties.Date.created_time
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full mx-auto">
        <Footer />
      </footer>
    </>
  );
}
