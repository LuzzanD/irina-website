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
      <div className="w-full flex flex-col text-center items-center px-8 lg:px-12 py-16 lg:py-28 gap-6 bg-zinc-100">
        <h2 className="text-[14px] lg:text-[18px] tracking-[2px] lg:tracking-[5px] font-semibold my-4">
          BOOK AN INITIAL CONSULTATION
        </h2>
        <p className="text-[12pxpx-8 lg:] lg:text-[14px]">
          We’d love to discuss your project, to book an initial no charge
          consultation, please click below.
        </p>
        <ContactForm hasOpenButton={true} />
      </div>
    </main>
  );
}
