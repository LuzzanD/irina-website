import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { navbarLinks } from "@/constants/data";

const MobileMenu = ({ scrolling }: { scrolling: boolean }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div
            className={`w-[20px] h-[1px] -translate-y-[4px] ${
              scrolling ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          ></div>
          <div
            className={`w-[20px] h-[1.5px] ${
              scrolling ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          ></div>
          <div
            className={`w-[20px] h-[1px] translate-y-[4px] ${
              scrolling ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          ></div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="sm:text-[14px]  md:text-[16px] -mt-0.5 sm:-mt-1 text-start mb-8 w-[70%]">
              Irina 2009
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-2 text-zinc-900">
            {navbarLinks.map((link, index) => {
              return (
                <div key={index}>
                  {!link.extralinks && (
                    <Link
                      className="text-zinc-900 text-[11px] xxs:text-[15px] sm:text-[16px] md:text-[17px] h-fit"
                      href={`${link.href}`}
                    >
                      {link.name}
                    </Link>
                  )}
                  {link.extralinks && (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="text-zinc-900 bg-transparent text-[11px] xxs:text-[15px] sm:text-[16px] md:text-[17px] w-fit m-0 p-0 h-fit border-none">
                        OUR SERVICES
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="rounded-none">
                        {link.extralinks.map((link, index) => {
                          return (
                            <DropdownMenuItem
                              className="font-semibold"
                              key={index}
                            >
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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
