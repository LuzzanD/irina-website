"use client";

import { navbarLinks } from "@/constants/data";
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

const Navbar = ({ pictureArray }: { pictureArray: StaticImageData[] }) => {
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
        <h1 className="text-white z-10 text-[13px] xxs:text-[18px] xs:text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] tracking-[2px] sm:tracking-[4px] lg:tracking-[6px]">
          Multi Award Winning
        </h1>
        <h1 className="text-white z-10 text-[10px] xxs:text-[14px] xs:text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] tracking-[2px] sm:tracking-[4px] lg:tracking-[6px]">
          Design Studio
        </h1>
      </nav>
      <div
        id="menubar"
        className={`transition-colors duration-200 ease-in-out z-10 fixed top-0 md:flex md:h-[60px] lg:h-[80px] justify-center items-center w-full md:gap-6 lg:gap-8 p-6 lg:p-10 mb-24 ${
          scrolling
            ? "text-zinc-900 bg-gradient-to-b from-zinc-100 via-zinc-100 to-zinc-100/80 border-b-[1px] border-zinc-300"
            : "bg-transparent text-zinc-100"
        }`}
      >
        {navbarLinks.map((link, index) => {
          return (
            <div key={index} className="hidden md:flex">
              {!link.extralinks && (
                <Link
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
            </div>
          );
        })}
        <div className="w-fit ml-auto md:hidden">
          <MobileMenu scrolling={scrolling} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
