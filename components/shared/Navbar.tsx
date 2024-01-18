"use client";

import { navbarLinks } from "@/constants/data";
import { pictureArray } from "@/constants/data";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import MobileMenu from "./MobileMenu";

interface Props {
  name: string;
  href: string;
}

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [picture, setPicture] = useState<StaticImageData>(pictureArray[index]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > document.getElementById("menubar")!.scrollHeight) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
      <nav
        id="nav"
        style={{
          backgroundColor: "gray",
          backgroundBlendMode: "multiply",
          // opacity: "50%",
          backgroundImage: `url(${picture.src})`,
        }}
        className="flex border-b-white flex-col items-center justify-center h-[400px] lg:h-[600px] w-full bg-cover transition-all duration-1000 bg-no-repeat"
      >
        <h1 className="text-white z-10 text-[8px] xxs:text-[12px] xs:text-[14px] sm:text-[20px] md:text-[30px] lg:text-[40px] tracking-[6px]">
          Multi Award Winning
        </h1>
        <h1 className="text-white z-10 text-[6px] xxs:text-[8px] xs:text-[10px] sm:text-[15px] md:text-[25px] lg:text-[35px] tracking-[6px]">
          Design Studio
        </h1>
      </nav>
      <div
        id="menubar"
        className={`transition-colors duration-200 ease-in-out hidden z-10 fixed top-0 md:flex h-[80px] justify-center items-center w-full gap-8 p-12 mb-24 ${
          scrolling
            ? "text-zinc-900 bg-gradient-to-b from-zinc-100 via-zinc-100 to-zinc-100/80 border-b-[1px] border-zinc-300"
            : "bg-transparent text-zinc-100"
        }`}
      >
        {navbarLinks.map((link, index) => {
          return (
            <>
              {!link.extralinks && (
                <Link
                  key={index}
                  className=" md:text-[14px] lg:text-[16px] xl:text-[20px] h-fit"
                  href={`${link.href}`}
                >
                  {link.name}
                </Link>
              )}
              {link.extralinks && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="bg-transparent md:text-[14px] lg:text-[16px] xl:text-[20px] w-fit m-0 p-0 h-fit border-none">
                    OUR SERVICES
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded-none">
                    {link.extralinks.map((link, index) => {
                      return (
                        <DropdownMenuItem className="font-semibold" key={index}>
                          {link.name}
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </>
          );
        })}
      </div>
      <div className="absolute top-5 right-10 md:hidden">
        <MobileMenu />
      </div>
    </>
  );
};

export default Navbar;
