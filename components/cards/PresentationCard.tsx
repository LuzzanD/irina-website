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
    <div className="flex w-full items-center h-[400px]">
      {odd && (
        <div className="w-[35%] px-20 py-16 flex flex-col items-start justify-center bg-zinc-50 h-full gap-2">
          <h2 className="text-[20px] font-semibold tracking-wider">
            {card.title}
          </h2>
          <div>{card.description}</div>
          <p className="mt-3 italic">
            Read more -{" "}
            <span className="font-semibold hover:no-underline underline hover:cursor-pointer under">
              <Link href={card.href}>{card.title}</Link>
            </span>
          </p>
        </div>
      )}
      <div className="w-[65%] h-full relative">
        <Image
          src={card.imageLink}
          alt=""
          fill={true}
          className="object-cover"
        />
      </div>

      {!odd && (
        <div className="w-[35%] px-20 py-16 flex flex-col items-start justify-center bg-zinc-50 h-full gap-2">
          <h2 className="text-[20px] font-semibold tracking-wider">
            {card.title}
          </h2>
          <div>{card.description}</div>
          <p className="mt-3 italic">
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
