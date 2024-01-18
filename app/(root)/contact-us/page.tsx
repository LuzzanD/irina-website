import ContactForm from "@/components/forms/ContactForm";
import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col w-full p-16 items-center ">
      <h2 className="text-[22px] tracking-[5px] font-semibold">
        LET&apos;S GET IN TOUCH
      </h2>
      <ContactForm hasOpenButton={false} />
    </div>
  );
};

export default ContactUs;
