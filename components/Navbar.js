import React from "react";
import Link from "next/link";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="pb-24">
      <nav className="fixed z-10 w-full bg-white border-b-2 border-navy">
        <div className="container mx-auto">
          <div className="flex items-center h-24 ">
            <div className="inset-y-0 left-0 flex items-center justify-between w-full mx-auto xs:px-2">
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
                  className={`${navbarOpen ? "hidden" : "block"} h-6 w-6"`}
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
                  className={`${navbarOpen ? "block" : "hidden"} h-6 w-6`}
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

              <div className="hidden w-auto sm:block">
                <Link href="/">
                  <div className="flex items-center font-bold cursor-pointer">
                    <div className="ml-2">
                      Front<span className="text-indigo-700">end</span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="relative text-gray-600">
                <input
                  className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 mt-2 mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="hidden sm:block">
                <Link href="/about">O mnie</Link>
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
                <Link href="/">Strona główna</Link>
              </li>
              <li
                className="z-10 px-3 py-2 text-sm font-medium"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Link href="/about">O mnie</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
