import React from "react";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function View({ id }: { id: string }) {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  return (
    <div className="view-container flex items-center gap-2">
      <Ping />
      <p className="view-text">
        <span className="font-black">{totalViews ?? 0} views</span>
      </p>
    </div>
  );
}
