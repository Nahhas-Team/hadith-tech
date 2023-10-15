"use client";
import { Loader2 } from "lucide-react";
import React from "react";
import { InlineWidget } from "react-calendly";

const ContactWidget = () => {
  return (
    <section className="sm:container px-2 relative">
      <InlineWidget
        url="https://calendly.com/nahhas909/30min"
        styles={{
          height: "800px",
          borderRadius: 25,
          overflow: "hidden",
          marginBottom: "50px",
          borderWidth: "1px",
          borderColor: "#F97316",
          backgroundColor: "#F9731610",
          zIndex: 50,
        }}
        pageSettings={{
          primaryColor: "#F97316",
          // hideEventTypeDetails: false,
        }}
      />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold z-[-1] flex gap-2 items-center justify-center">
        <Loader2 className="animate-spin" size={35}/>
        Loading
      </p>
    </section>
  );
};

export default ContactWidget;
