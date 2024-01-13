import Image from "next/image";
import PresentationCard from "@/components/cards/PresentationCard";
import { presentationCards } from "@/constants/data";

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
    </main>
  );
}
