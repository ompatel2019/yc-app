import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export default async function page() {
  const session = await auth();

  if (!session) redirect("/");
  return (
    <>
      <section className="pink_container pattern !min-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </section>
      <Toaster />
      <StartupForm />
    </>
  );
}
