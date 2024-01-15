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
      <div className="flex w-full p-16">
        <div className="text-center w-[20%]">Logo</div>
        <div className="flex gap-4 w-[80%] justify-around">
          {footerLinks.map((link, index) => {
            return (
              <div key={index}>
                <h2 className="text-[18px] font-semibold mb-4">{link.name}</h2>
                <div className="flex flex-col gap-2">
                  {link.links.map((link: Props) => (
                    <Link
                      href={link.href}
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
        <p>Irina 2009 MM</p>
        <p>+381 987654321</p>
        <p>Novi Sad, Austro-Ugarska</p>
      </div>
    </footer>
  );
};

export default Footer;
