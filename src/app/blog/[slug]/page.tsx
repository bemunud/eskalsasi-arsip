import { fetchBySlug, fetchPageBloks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import Navbar from "@/components/navbar/page";
import Image from "next/image";
import Footer from "@/components/footer";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

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
        <section className="flex flex-col container mx-auto">
          <h1 className="text-center">
            {post.properties.Title.title[0].plain_text}
          </h1>
          <div className="flex justify-center">
            <Image
              src={post.cover.file.url}
              alt={`cover ${post.properties.Title.title[0].plain_text}`}
              width={500}
              height={500}
              className="rounded-lg w-full md:prose py-16"
              priority
            />
          </div>
          <div
            className="prose text-justify mx-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </section>
      </main>
      <footer className="w-full mx-auto">
        <Footer />
      </footer>
    </>
  );
}
