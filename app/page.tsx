"use client";
import Button from "@/components/ui/Button";
import useGlobalStore from "@/lib/store";
import useAuthGuard from "@/hooks/useAuthGuard";
import { initializeAuth, logout } from "@/lib/auth";

initializeAuth();

export default function Home() {
  const loading = useAuthGuard();
  const user = useGlobalStore((store) => store.user);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <h1>Home</h1>
      {user && (
        <div>
          <p>{user?.name}</p>
          <Button onClick={logout}>Cerrar sesión</Button>
        </div>
      )}
    </main>
  );
}
