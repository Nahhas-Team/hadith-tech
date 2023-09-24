import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const HomeHero = () => {
  return (
    <section className="container rounded-3xl h-[75vh] px-10 w-[calc(100vw-32px)] md:h-[75vh] md:min-h-[750px] border-2 max-h-[1200px] flex flex-row svgbg">
      {/* squere */}
      <div className=" relative top-16 left-24  bg-orange-200 h-[400px] rounded w-[370px]   ">
        <div className="pl-4 pb-2 h-min absolute -left-7 -top-6 rounded white-cafe ml-20 mt-16 flex flex-col gap-7 w-[400px] z-10 ">
          <h1 className="text-primary title-font  text-6xl font-semibold">
            Futuristic <span className="redcolor">podcast</span> with technology
            leaders
          </h1>
          <p className="w-96 text-lg font-light">
            Fireside tech <b className=" "> podcast</b> with technology leaders.
            This podcast hosts people to talk about their experience, most
            valuable work for them and their vision
          </p>
          <div className="grow-0 w-max self-center">
            <Link className={cn("mr-4", buttonVariants())} href="/episodes">
              start listening
            </Link>
            <Link className={buttonVariants()} href="/about">
              More About hadith
            </Link>
          </div>
        </div>
      </div>
      {/* photo */}
      <div className="grow relative">
            <Image
              className=" absolute right-10 top-10 "
              src="/ideogram.jpeg"
              alt="podcast theme"
              width={400}
              height={400}
            />
      </div>
      {/* <div className="flex rounded-md items-center w-fit mx-auto gap-8 h-12 justify-center mt-4">
        <Image
          alt="google"
          src="/companies_logos/Google.png"
          className=" h-full w-auto p-1"
          height={200}
          width={200}
        />
        <Image
          alt="github"
          src="/companies_logos/Github.png"
          className="h-full w-auto p-2"
          height={200}
          width={200}
        />
        <Image
          alt="microsoft"
          src="/companies_logos/Microsoft.png"
          className="h-full w-auto p-1"
          height={200}
          width={200}
        />
      </div> */}
    </section>
  );
};

export default HomeHero;
