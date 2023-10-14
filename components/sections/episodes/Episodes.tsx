import React from "react";
import { LastEpisodes } from "@/config/last-episodes";
import { Play, User } from "lucide-react";
import Image from "next/image";
import "./episodes.css"
const Episodes = () => {
  return (
    <div className="container-special my-7 container">
      <div className="title text-center px-56 ">
        <h1 className="text-5xl font-extrabold">Last 4 Podcast</h1>
        <p className="text-xs my-3 text-ac2">Lorem ipsum dolor sit amet consectetur,  elit. Incidunt dolorem vitae et, perferendis quasi nulla, quaerat  exercitationem. Quod, velit possimus.</p>
      </div>
      <div className="podcast1 bg-w2 rounded-lg px-5 py-2">
        <User className="inline text-ac2 w-4"/>   <p className="inline text-ac2 text-xs">{LastEpisodes[0].name}</p>
        <Image className=" rounded-lg w-[620px] h-40 my-2" src="/episodephoto.jpeg" alt="" width={300} height={100}/>
        <h2 className="text-xl font-bold my-2">{LastEpisodes[0].episodeTitle}</h2>
        <Play className=" bg-gradient-to-t from-purple-300 to-purple-500 rounded-full px-2 py-2 text-white fill-white"/>

      </div>
      <div className="podcast2 bg-w2 rounded-lg px-5 py-2">
        <User className="inline text-ac2 w-4"/>   <p className="inline text-ac2 text-xs">{LastEpisodes[1].name}</p>
        <Image className=" rounded-lg w-[620px] h-40 my-2" src="/episodephoto.jpeg" alt="" width={300} height={100}/>
        <h2 className="text-xl font-bold my-2">{LastEpisodes[1].episodeTitle}</h2>
        <Play className=" bg-gradient-to-t from-purple-300 to-purple-500 rounded-full px-2 py-2 text-white fill-white"/>

      </div>
      <div className="podcast3 bg-w2 rounded-lg px-5 py-2">
        <User className="inline text-ac2 w-4"/>   <p className="inline text-ac2 text-xs">{LastEpisodes[2].name}</p>
        <Image className=" rounded-lg w-[620px] h-40 my-2" src="/episodephoto.jpeg" alt="" width={300} height={100}/>
        <h2 className="text-xl font-bold my-2">{LastEpisodes[2].episodeTitle}</h2>
        <Play className=" bg-gradient-to-t from-purple-300 to-purple-500 rounded-full px-2 py-2 text-white fill-white"/>

      </div>
      <div className="podcast4 bg-w2 rounded-lg px-5 py-2">
        <User className="inline text-ac2 w-4"/>   <p className="inline text-ac2 text-xs">{LastEpisodes[3].name}</p>
        <Image className=" rounded-lg w-[620px] h-40 my-2" src="/episodephoto.jpeg" alt="" width={300} height={100}/>
        <h2 className="text-xl font-bold my-2">{LastEpisodes[3].episodeTitle}</h2>
        <Play className=" bg-gradient-to-t from-purple-300 to-purple-500 rounded-full px-2 py-2 text-white fill-white"/>

      </div>
      
    </div>
  );
};

export default Episodes;
