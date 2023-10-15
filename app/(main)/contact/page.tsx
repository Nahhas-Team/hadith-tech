import ContactWidget from "@/components/ContactWidget";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-0 mb-6">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-bold">Call Me</h1>
        <p className="opacity-50 font-light lg:text-lg md:text-base text-sm">Need Some Seconds To Load</p>
      </div>
      <ContactWidget />
    </div>
  );
};

export default page;
