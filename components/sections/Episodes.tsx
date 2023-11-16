import React from "react";
import { LastEpisodes } from "@/config/last-episodes";
import { ArrowRight, Play, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Episodes = () => {
  return (
    <div className="container relative">
      <div className="text-center flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-extrabold">Top Selected Podcasts</h1>
        <p className="lg:text-lg opacity-50 w-1/2">
          This is the top selected podcasts by the community, you can listen to
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 md:max-w-[1000px] max-w-[450px] mx-auto my-8">
        {LastEpisodes.map((item, index) => (
          <div className="border p-5 rounded-3xl" key={index}>
            <div className="flex mb-1 items-center justify-start gap-1">
              <User className="inline text-muted-foreground" size={18}/>
              <p className="inline text-muted-foreground">{item.name}</p>
            </div>
            {/* embed YouTube */}
            <iframe
              className="w-full h-56 object-cover rounded-2xl bg-primary"
              src={item.link}
              title={item.episodeTitle}
              allowFullScreen
            />
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-t from-background to-transparent absolute bottom-8 left-1/2 -translate-x-1/2 pt-16 w-full">
        <Link href="https://www.youtube.com/@hadithtech/podcasts" className="flex items-center justify-center group gap-1 text-primary underline relative top-6">
          Eplore Podcasts <ArrowRight size={14} className="group-hover:animate-bounce-right"/>
        </Link>
      </div>
    </div>
  );
};

export default Episodes;
