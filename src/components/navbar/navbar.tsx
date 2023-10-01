"use client";
import React from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";

const NavbarComp = () => {
    return (
        <div className="bg-green-400">
            <div className="max-w-[1920px] mx-auto">
                <div className="container mx-auto">
                    <Navbar
                        fluid={true}
                        rounded={false}
                        className="bg-green-400 p-4"
                    >
                        <Navbar.Brand href="/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">
                                Sanity Blog
                            </span>
                        </Navbar.Brand>
                        <Navbar.Toggle className="bg-white text-green-400" />
                        <Navbar.Collapse>
                            <Navbar.Link
                                href="/"
                                active={false}
                                className="text-white"
                            >
                                Blog
                            </Navbar.Link>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default NavbarComp;
