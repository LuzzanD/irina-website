import { footerLinks } from "@/constants/data";
import Link from "next/link";
import React from "react";

interface Props {
  linkName: string;
  href: string;
  blank?: boolean;
}

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-zinc-800 text-slate-100">
      <div className="flex w-full p-3 md:p-6 lg:p-16 ">
        <div className="w-[15%] lg:w-[20%] text-[14px] lg:text-[18px] font-semibold ">
          Logo
        </div>
        <div className="flex w-[80%] gap-3 lg:gap-4">
          {footerLinks.map((link, index) => {
            return (
              <div key={index} className="flex flex-col w-full">
                <h2 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-semibold mb-2 md:mb-4">
                  {link.name}
                </h2>
                <div className="flex flex-col gap-1 md:gap-2">
                  {link.links.map((link: Props) => (
                    <Link
                      href={link.href}
                      className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]"
                      key={link.href}
                      target={link.blank ? "_blank" : ""}
                    >
                      {link.linkName}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center gap-6 sm:gap-12 lg:gap-24 items-center p-2 sm:p-4 lg:p-8 bg-zinc-600">
        <p className="text-[8px] xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
          Irina 2009 MM
        </p>
        <p className="text-[8px] xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
          +381 987654321
        </p>
        <p className="text-[8px] xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
          Novi Sad, Austro-Ugarska
        </p>
      </div>
    </footer>
  );
};

export default Footer;
