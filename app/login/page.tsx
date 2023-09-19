"use client";
import Button from "@/components/ui/Button";
import useGlobalStore from "@/lib/store";
import Image from "next/image";
import { FormEventHandler } from "react";
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
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
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
        <div className="w-full bg-white text-center rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
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
