import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="px-5 py-3 shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} priority />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href="/startup/create" className="flex items-center gap-1">
                <span className="hidden sm:inline cursor-pointer">Create</span>
                <BadgePlus className="size-6 sm:hidden cursor-pointer" />
              </Link>

              <form action="/api/auth/signout" method="POST">
                <button
                  type="submit"
                  className="flex items-center gap-1 text-red-500"
                >
                  <span className="hidden sm:inline cursor-pointer">
                    Log out
                  </span>
                  <LogOut className="size-6 sm:hidden cursor-pointer" />
                </button>
              </form>

              <Link href={`/user/${session.id}`}>
                <Avatar className="size-10 cursor-pointer">
                  <AvatarImage
                    src={session.user.image || ""}
                    alt={session.user.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form action="/api/auth/signin" method="POST">
              <button type="submit" className="text-primary">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}
