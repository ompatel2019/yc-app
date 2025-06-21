import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import View from "@/components/View";
import { Skeleton } from "@/components/ui/skeleton";

export const experimental_ppr = true;

type StartupProp = {
  params: { id: string };
};

export default async function Page({ params }: StartupProp) {
  const { id } = params;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  return (
    <>
      <section className="pink_container !min-h-[230px] pattern">
        <p className="tag">{formatDate(post._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        <div className="flex justify-center">
          <Image
            src={post.image}
            alt="thumbnail"
            width={500}
            height={300}
            className="w-full max-w-[500px] h-auto rounded-xl object-contain"
          />
        </div>

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex justify-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium">{post.author.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{post.author.username}
                </p>
              </div>
            </Link>

            <p className="category-tag">{post.category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>
          {post.pitch ? (
            <article className="prose max-w-4xl font-work-sans break-all">
              {post.pitch}
            </article>
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>

        <hr className="divider" />
      </section>

      {/* Sticky View Counter */}
      <div className="fixed bottom-4 right-4 z-50 rounded-md bg-white px-4 py-2 shadow-lg border text-sm flex items-center gap-2">
        <Suspense fallback={<Skeleton className="w-[80px] h-[20px]" />}>
          <View id={id} />
        </Suspense>
      </div>
    </>
  );
}
