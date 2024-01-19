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
      <div className="flex w-full flex-col items-center sm:flex-row p-3 md:p-6 lg:p-16 ">
        <div className="w-[20%] text-[14px] lg:text-[18px] font-semibold ">
          Logo
        </div>
        <div className="flex flex-col sm:flex-row sm:w-[80%] justify-around gap-4 lg:gap-6">
          {footerLinks.map((link, index) => {
            return (
              <div key={index} className="flex text-start flex-col">
                <h2 className="text-[11px] xxs:text-[12px] xs:text-[14px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-bold mb-2 md:mb-4">
                  {link.name}
                </h2>
                <div className="flex flex-col gap-1 md:gap-1.5">
                  {link.links.map((link: Props) => (
                    <Link
                      href={link.href}
                      className="text-[11px] xxs:text-[12px]  xs:text-[14px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]"
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
