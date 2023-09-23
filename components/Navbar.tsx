"use client";

import { AlertOctagon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const navbar = document.querySelector("nav.navbar");
    console.log(latest);
    
    if (latest >= 50) {
      navbar?.classList.add("navbar-active");
    } else {
      navbar?.classList.remove("navbar-active");
    }
  });

  return (
    <nav className="navbar container py-4 flex items-center justify-between rounded-b-3xl backdrop-blur">
      <Link href="/" className="flex gap-2 hover:gap-1 justify-center items-center font-medium hover:bg-accent py-2 px-3 rounded-3xl group duration-500 active:rounded-md">
        <AlertOctagon className="group-hover:scale-90 duration-200" />
        Hadith Tech
      </Link>
      <div className="flex gap-1 items-center justify-center">
        <Link href="/" className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-md">
          Home
        </Link>
        <Link href="/about" className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-md">
          About
        </Link>
        <Link href="/episodes" className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-md">
          Episodes
        </Link>
        <Link href="/contact" className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-md">
          Contact
        </Link>
      </div>
      <Link className={buttonVariants()} href="/subscribe">
        Subscribe
      </Link>
    </nav>
  );
};

export default Navbar;
