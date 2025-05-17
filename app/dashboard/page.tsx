// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/nextAuth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // not signed in
    return redirect("/login");
  }
  if ((session.user as any).role !== "client") {
    // wrong role
    return redirect("/unauthorized");
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {session.user?.name}
      </h1>
      {/* …your leads table / charts go here… */}
    </div>
  );
}
