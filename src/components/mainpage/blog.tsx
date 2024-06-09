import Image from "next/image";

export default async function BlogPreview() {
  return (
    <>
      <div className="min-h-screen">
        <main className="max-w-5xl mx-auto relative">
          <div className="h-full pt-4 pb-16 mx-auto">
            <div className="flex items-center justify-center">
              <h1 className="font-extrabold text-4xl text-black">
                Notion + NextJS Sample Blog
              </h1>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
              {/* <div>
                {posts.map((post: BlogPost) => (
                  <p key={post.id}>{post.title}</p>
                ))}
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
