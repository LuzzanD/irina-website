import { footerLinks } from "@/constants/data";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <div className="flex h-[300px] w-full p-10">
        <div className="text-center w-[20%]">Logo</div>
        <div className="flex gap-4 w-[80%] justify-around">
          {footerLinks.map((link, index) => {
            return (
              <div key={index}>
                <h2 className="text-[18px] font-semibold">{link.name}</h2>
                <div>
                  {link.links.map((link, index) => (
                    <p key={index}>{link.linkName}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center gap-24 items-center h-[70px] bg-slate-100">
        <p>Irina 2009</p>
        <p>+381 987654321</p>
        <p>Veternik, Novi Sad</p>
      </div>
    </footer>
  );
};

export default Footer;
