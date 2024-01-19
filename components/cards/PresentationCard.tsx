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
    <div className="flex w-full flex-col md:flex-row items-center h-[600px] md:h-[350px] lg:h-[400px] border-t-[2px]">
      {odd && (
        <div className="w-full md:w-[50%] p-8 md:p-12 lg:p-20 flex flex-col items-start justify-center bg-zinc-50 h-[300px] md:h-full gap-2">
          <h2 className="xs:text-[12px] sm:text-[15px] lg:text-[18px] xl:text-[20px] font-semibold tracking-wider">
            {card.title}
          </h2>
          <div className="xxs:text-[12px] sm:text-[15px] lg:text-[16px] xl:text-[18px]">
            {card.description}
          </div>
          <p className="text-[10px] xs:text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] mt-3 italic">
            Read more -{" "}
            <span className="font-semibold hover:no-underline underline hover:cursor-pointer under">
              <Link href={card.href}>{card.title}</Link>
            </span>
          </p>
        </div>
      )}
      <div className="md:w-[50%] w-full h-[350px] md:h-full relative">
        <Image
          src={card.imageLink}
          alt=""
          fill={true}
          className=" object-cover"
        />
      </div>

      {!odd && (
        <div className="w-full md:w-[50%] p-8 md:p-12 lg:p-20 flex flex-col items-start justify-center bg-zinc-50 h-[300px] md:h-full gap-2">
          <h2 className="xs:text-[12px] sm:text-[15px] lg:text-[18px] xl:text-[20px] font-semibold tracking-wider">
            {card.title}
          </h2>
          <div className="xxs:text-[12px] sm:text-[15px] lg:text-[16px] xl:text-[18px]">
            {card.description}
          </div>
          <p className="text-[10px] xs:text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] mt-3 italic">
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
