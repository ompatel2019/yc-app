import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} priority />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href="/startup/create">Create</Link>
              <form action="/api/auth/signout" method="POST">
                <button type="submit">Log out</button>
              </form>
              <Link href={`/user/${session.user.email}`}>
                {session.user.name}
              </Link>
            </>
          ) : (
            <form action="/api/auth/signin" method="POST">
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}
