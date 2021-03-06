import React from "react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import ThemeButton from "@/components/ThemeButton";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="pb-24">
      <nav className="fixed z-40 w-full bg-white border-b-2 border-navy dark:bg-dark-800">
        <div className="container px-8 mx-auto xs:px-3">
          <div className="flex items-center h-24">
            <div className="relative left-0 flex items-center justify-center w-full mx-auto">
              {/* <!-- Mobile menu button--> */}
              <button
                className="inline-flex items-center justify-center text-gray-400 sm:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {/* <!-- Icon when menu is closed. -->
                    <!--
                      Heroicon name: menu

                      Menu open: "hidden", Menu closed: "block"
                    --> */}
                <svg
                  className={`${
                    navbarOpen ? "hidden" : "block"
                  } h-6 w-6 absolute left-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!-- Icon when menu is open. -->
                  <!--
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                  --> */}
                <svg
                  className={`${
                    navbarOpen ? "block" : "hidden"
                  } h-6 w-6  absolute left-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="absolute left-0 hidden w-auto sm:block">
                <Link href="/">
                  <div className="flex items-center font-bold cursor-pointer">
                    <div className="text-xl">
                      Front<span className="text-indigo-700">review</span>
                    </div>
                  </div>
                </Link>
              </div>
              <SearchBar />

              <div className="absolute right-0 flex items-center xs:right-4">
                <div className="mr-6 text-xl xs:hidden">
                  <Link href="/o-mnie">O mnie</Link>
                </div>

                <ThemeButton />
              </div>
            </div>
          </div>
          {/* <!--
            Mobile menu, toggle classes based on menu state.

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <div
            className={`${navbarOpen ? "block" : "hidden"} sm:hidden xs:-mt-8`}
          >
            <ul className="flex flex-col px-2 pt-2 pb-3 space-y-1">
              <li
                className="z-10 px-3 py-2 text-sm font-medium"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Link href="/">Strona g????wna</Link>
              </li>
              <li
                className="z-10 px-3 py-2 text-sm font-medium"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Link href="/o-mnie">O mnie</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
