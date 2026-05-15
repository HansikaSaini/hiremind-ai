import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { userId } = await auth();

  // If user not logged in
  if (!userId) {
    redirect("/sign-in");
  }
return (
  <div className="flex min-h-screen bg-black text-white">

    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <main className="flex-1 p-8 overflow-y-auto">

      {children}

    </main>

  </div>
);
}