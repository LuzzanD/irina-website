"use client";

import { navbarLinks } from "@/constants/data";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-8 items-center h-[100px] w-full bg-slate-100">
      {navbarLinks.map((link) => (
        <Link key={link.name} href={`${link.href}`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
