import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-green-400">
            <div className="max-w-[1920px] mx-auto">
            <div className="container flex justify-between items-center flex-wrap mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        Sanity Blog
                    </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-solid-bg"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-solid-bg"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-solid-bg"
                >
                    <ul className="flex flex-col font-medium mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 pl-3 pr-4 text-white md:p-0"
                                aria-current="page"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;
