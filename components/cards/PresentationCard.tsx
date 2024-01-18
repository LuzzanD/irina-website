import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
  card: {
    title: string;
    href: string;
    imageLink: StaticImageData;
    description: string;
  };
  odd: boolean;
}

const PresentationCard = ({ card, odd }: CardProps) => {
  return (
    <div className="flex w-full flex-col lg:flex-row items-center h-[600px] lg:h-[450px] border-t-[2px]">
      {odd && (
        <div className="w-full lg:w-[35%] p-12 lg:p-20 flex flex-col items-start justify-center bg-zinc-50 h-[300px] lg:h-full gap-2">
          <h2 className="text=[16px] lg:text-[20px] font-semibold tracking-wider">
            {card.title}
          </h2>
          <div className="text-[12px] lg:text-[20px]">{card.description}</div>
          <p className="text-[12px] lg:text-[16px] mt-3 italic">
            Read more -{" "}
            <span className="font-semibold hover:no-underline underline hover:cursor-pointer under">
              <Link href={card.href}>{card.title}</Link>
            </span>
          </p>
        </div>
      )}
      <div className="lg:w-[65%] w-full h-[400px] lg:h-full relative">
        <Image
          src={card.imageLink}
          alt=""
          fill={true}
          className=" object-cover"
        />
      </div>

      {!odd && (
        <div className="w-full lg:w-[35%] p-12 lg:p-20 flex flex-col items-start justify-center bg-zinc-50 h-[300px] lg:h-full gap-2">
          <h2 className="text=[16px] lg:text-[20px] font-semibold tracking-wider">
            {card.title}
          </h2>
          <div className="text-[12px] lg:text-[20px]">{card.description}</div>
          <p className="text-[12px] lg:text-[16px] mt-3 italic">
            Read more -{" "}
            <span className="font-semibold hover:no-underline underline hover:cursor-pointer">
              <Link href={card.href}>{card.title}</Link>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PresentationCard;
