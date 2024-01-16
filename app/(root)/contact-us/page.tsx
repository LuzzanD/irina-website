import ContactForm from "@/components/forms/ContactForm";
import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col w-full p-16">
      <h2 className="text-[30px] font-bold">Contact Us</h2>
      <ContactForm hasOpenButton={false} />
    </div>
  );
};

export default ContactUs;
