"use client";
import Button from "@/components/ui/Button";
import useGlobalStore from "@/lib/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

function Login() {
  const user = useGlobalStore((store) => store.user);
  const router = useRouter();

  if (user) {
    setTimeout(() => router.push("/"), 0);
    return null;
  }

  return (
    <section className="bg-base-light dark:bg-base-dark">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6"
        >
          <Image
            src="/dove.png"
            className="invert"
            alt="Dove logo"
            width={90}
            height={90}
            priority
          />
        </a>
        <div className="w-full bg-white-light text-center rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-secondary-light dark:border-secondary">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-base-dark md:text-2xl dark:text-white-light">
              Bienvenido
            </h1>
            <div className="space-y-4 md:space-y-6">
              <Button onClick={login}>Iniciar sesión</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
