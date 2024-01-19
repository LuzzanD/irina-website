import Image from "next/image";
import PresentationCard from "@/components/cards/PresentationCard";
import { presentationCards } from "@/constants/data";
import ContactForm from "@/components/forms/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-0 w-full">
      {presentationCards.map((card, index) => (
        <PresentationCard
          key={index}
          card={card}
          odd={index % 2 === 0 ? false : true}
        />
      ))}
      <div className="w-full flex flex-col text-center items-center xs:px-4 px-1 py-4 xs:py-6 sm:px-8 lg:px-10 sm:py-16 lg:py-28 gap-1.5 sm:gap-3 lg:gap-6 bg-zinc-100">
        <h2 className="text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] tracking-[2px] lg:tracking-[5px] font-semibold my-1.5 sm:my-3 lg:my-4">
          BOOK AN INITIAL CONSULTATION
        </h2>
        <p className="text-[8px] xxs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
          We’d love to discuss your project, to book an initial no charge
          consultation, please click below.
        </p>
        <ContactForm hasOpenButton={true} />
      </div>
    </main>
  );
}
