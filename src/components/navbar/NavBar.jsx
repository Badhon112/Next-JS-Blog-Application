import Link from "next/link";
import React from "react";

export default function NavBar() {
  const session = true;
  const isAdmin = true;
  let links;
  links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 has-[:checked]:bg-white has-[:checked]:text-black">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Blog
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {links.map((link) => {
              return (
                <li key={link.title}>
                  <Link
                    href={link.path}
                    className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page">
                    {link.title}
                  </Link>
                </li>
              );
            })}
            {session ? (
              <>
                {isAdmin ? (
                  <>
                    <li className=" flex space-x-6">
                      <Link
                        href={"/admin"}
                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                        aria-current="page">
                        Admin
                      </Link>
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      href={"/login"}
                      className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                      aria-current="page">
                      Login
                    </Link>
                  </li>
                )}
              </>
            ) : (
              <li>
                <Link
                  href={"/login"}
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
