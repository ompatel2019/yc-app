"use client";

import React, { useEffect, useState } from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

export default function View({ id }: { id: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/views/${id}`, { method: "POST" });

    const getViews = async () => {
      const data = await client
        .withConfig({ useCdn: false })
        .fetch(STARTUP_VIEWS_QUERY, { id });
      setViews(data?.views ?? 0);
    };

    getViews();
  }, [id]);

  return (
    <div className="view-container flex items-center gap-2 bg-black text-white p-2 rounded-lg shadow-lg fixed bottom-4 right-4 z-50">
      <Ping />
      <p className="view-text">
        {views === null ? null : (
          <span className="font-black">{views} views</span>
        )}
      </p>
    </div>
  );
}
