"use client";

import { navbarLinks } from "@/constants/data";
import { pictureArray } from "@/constants/data";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [picture, setPicture] = useState<StaticImageData>(pictureArray[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevValue) => {
        if (prevValue + 1 === 8) return 0;
        else return prevValue + 1;
      });
    }, 10000);
    setPicture(pictureArray[index]);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <nav
      style={{
        backgroundImage: `url(${picture.src})`,
      }}
      className="flex border-b-[5px] borderb-white flex-col items-center h-[700px] w-full bg-cover transition-all duration-1000 bg-no-repeat"
    >
      <div className="flex bg-transparent justify-center items-top w-full gap-8 p-16 mb-24">
        {navbarLinks.map((link) => (
          <Link
            key={link.name}
            className="text-white text-[20px] h-fit"
            href={`${link.href}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <h1 className="text-white z-10 text-[40px] tracking-[6px]">
        Multi Award Winning
      </h1>
      <h1 className="text-white z-10 text-[40px] tracking-[6px]">
        Design Studio
      </h1>
    </nav>
  );
};

export default Navbar;
