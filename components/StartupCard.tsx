import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import type { Startup, Author } from "@/sanity/types";

export type StartupCardType = Omit<Startup, "author"> & {
  author?: Author;
};

export default function StartupCard({ post }: { post: StartupCardType }) {
  const {
    _id,
    _createdAt,
    title = "Untitled",
    description = "",
    views = 0,
    image = "https://placehold.co/600x400",
    category = "Uncategorized",
    author,
  } = post;

  const authorId = author?._id ?? "unknown";
  const authorName = author?.name ?? "Unknown";

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="author avatar"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
      </Link>

      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="startup-card_img rounded-xl object-cover w-full h-auto"
      />

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
}
