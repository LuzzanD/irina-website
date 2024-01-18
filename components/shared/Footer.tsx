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
      <div className="flex w-full p-5 lg:p-16">
        <div className="w-[15%] lg:w-[20%] text-[14px] lg:text-[18px] font-semibold text-center">
          Logo
        </div>
        <div className="flex w-[80%] justify-around ">
          {footerLinks.map((link, index) => {
            return (
              <div key={index} className="flex flex-col w-full text-center">
                <h2 className="text-[14px] lg:text-[18px] font-semibold mb-4">
                  {link.name}
                </h2>
                <div className="flex flex-col gap-1">
                  {link.links.map((link: Props) => (
                    <Link
                      href={link.href}
                      className="text-[1px] lg:text-[16px]"
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
      <div className="flex justify-center gap-24 items-center p-8 bg-zinc-600">
        <p className="text-[11px] lg:text-[18px]">Irina 2009 MM</p>
        <p className="text-[11px] lg:text-[18px]">+381 987654321</p>
        <p className="text-[11px] lg:text-[18px]">Novi Sad, Austro-Ugarska</p>
      </div>
    </footer>
  );
};

export default Footer;
