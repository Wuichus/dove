import React from "react";
import Image from "next/image";
import Link from "next/link";
import { logout } from "@/lib/auth";
import useGlobalStore from "@/lib/store";

const navItems = [
  {
    name: "Inicio",
    href: "/",
  },
];

const Nav = () => {
  const user = useGlobalStore((store) => store.user);

  return (
    <nav className="bg-base-light border-mainborder-light  dark:bg-base-dark">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/dove.png"
            className="invert"
            alt="Dove logo"
            width={30}
            height={30}
            priority
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-light rounded-lg md:hidden hover:bg-white-light focus:outline-none focus:ring-2 focus:ring-mainborder-light  dark:text-white-dark dark:hover:bg-secondary-dark dark:focus:ring-mainborder-dark"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Abrir navegación</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white-light rounded-lg bg-white-light md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white-light dark:bg-secondary-light md:dark:bg-base-dark dark:border-secondary">
            {navItems.map((item, idx) => (
              <li key={`nav_link_${idx}`}>
                <Link
                  href={item.href}
                  className="block py-2 pl-3 pr-4 text-base-dark rounded hover:bg-white-light md:hover:bg-transparent md:border-0 md:hover:text-secondary-light md:p-0 dark:text-white-light md:dark:hover:text-secondary-dark dark:hover:bg-secondary-light dark:hover:text-white-light md:dark:hover:bg-transparent"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {user && (
              <li>
                <span
                  onClick={logout}
                  className="block py-2 pl-3 pr-4 cursor-pointer text-base-dark rounded hover:bg-white-light md:hover:bg-transparent md:border-0 md:hover:text-secondary-light md:p-0 dark:text-white-light md:dark:hover:text-secondary-dark dark:hover:bg-secondary-light dark:hover:text-white-light md:dark:hover:bg-transparent"
                >
                  Logout
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
