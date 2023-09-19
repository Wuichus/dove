"use client";
import Button from "@/components/ui/Button";
import useGlobalStore from "@/lib/store";
import useAuthGuard from "@/hooks/useAuthGuard";
import { initializeAuth, logout } from "@/lib/auth";
import Nav from "@/components/ui/Nav";

initializeAuth();

export default function Home() {
  const loading = useAuthGuard();
  const user = useGlobalStore((store) => store.user);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <Nav />
      Content
    </main>
  );
}
