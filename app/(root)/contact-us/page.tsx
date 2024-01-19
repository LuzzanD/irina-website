import ContactForm from "@/components/forms/ContactForm";
import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col w-full px-1 py-5 xxs:p-4 sm:p-8 lg:p-16 items-center ">
      <h2 className="text-[12px] sm:text-[15px] md:text-[20px] lg:text-[25px] tracking-[1px] sm:tracking-[3px] lg:tracking-[5px] font-semibold">
        LET&apos;S GET IN TOUCH
      </h2>
      <ContactForm hasOpenButton={false} />
    </div>
  );
};

export default ContactUs;
