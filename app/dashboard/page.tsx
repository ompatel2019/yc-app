import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    return <p>Access Denied</p>;
  }

  return <div>Welcome, {session.user?.name}</div>;
}