import React from "react";
import Link from "next/link";
import { BsLinkedin, BsInstagram, BsGithub} from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { SiGitlab } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-zinc-900">
            <div className="max-w-[1920px] mx-auto py-8">
                <div className="container flex justify-between items-center flex-wrap mx-auto p-4">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                Sanity Blog
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Resources
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1920px] mx-auto py-8">
                    <div className="container flex justify-between items-center flex-wrap mx-auto p-4">
                        <span className="text-sm sm:text-centertext-gray-400">
                            © 2023{" "}
                            <Link
                                href="/"
                                className="hover:underline text-green-400"
                            >
                                Sanity Blog
                            </Link>
                        </span>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <Link href="https://www.linkedin.com/in/axel-raboit/">
                                <BsLinkedin className="w-6 h-6 text-white hover:text-green-400" />
                            </Link>
                            <Link href="https://www.axelraboit.fr/">
                                <TbWorld className="w-6 h-6 text-white hover:text-green-400" />
                            </Link>
                            <Link href="https://www.instagram.com/axelr_7/">
                                <BsInstagram className="w-6 h-6 text-white hover:text-green-400" />
                            </Link>
                            <Link href="https://github.com/AxelRaboit">
                                <BsGithub className="w-6 h-6 text-white hover:text-green-400" />
                            </Link>
                            <Link href="https://gitlab.com/axel.raboit">
                                <SiGitlab className="w-6 h-6 text-white hover:text-green-400" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
