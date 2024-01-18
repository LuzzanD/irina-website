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

interface Props {
  name: string;
  href: string;
}

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
      className="flex borderb-white flex-col items-center h-[400px] lg:h-[600px] w-full bg-cover transition-all duration-1000 bg-no-repeat"
    >
      <div className="hidden lg:flex bg-transparent justify-center items-top w-full gap-8 p-12 mb-24">
        {navbarLinks.map((link) => {
          return (
            <>
              {!link.extralinks && (
                <Link
                  key={link.name}
                  className="text-white text-[20px] h-fit"
                  href={`${link.href}`}
                >
                  {link.name}
                </Link>
              )}
              {link.extralinks && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-white bg-transparent text-[20px] w-fit m-0 p-0 h-fit border-none">
                    OUR SERVICES
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded-none">
                    {link.extralinks.map((link) => {
                      return (
                        <DropdownMenuItem
                          className="font-semibold"
                          key={link.name}
                        >
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
      <h1 className="text-white z-10 text-[20px] lg:text-[40px] tracking-[6px]">
        Multi Award Winning
      </h1>
      <h1 className="text-white z-10 text-[20px] lg:text-[40px] tracking-[6px]">
        Design Studio
      </h1>
    </nav>
  );
};

export default Navbar;
