import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";

export const experimental_ppr = true;

type StartupProp = {
  params: { id: string };
};

export default async function Page({ params }: StartupProp) {
  const { id } = params;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
    </main>
  );
}
