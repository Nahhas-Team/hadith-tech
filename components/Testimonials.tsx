import React from "react";

const guestsInformation = [
  {
    "name": "Daniel Lenton",
    "topic": "Machine Learning Unified (Ivy)",
    "bio": "Daniel is the founder of Ivy a machine learning unfication framework.",
    "company": "Ivy"
  },
  {
    "name": "Brian Douglas (bdougie)",
    "topic": "How to Maximize Your Open Source Benefits?",
    "bio": "Brian is the founder and CEO of OpenSauced.",
    "company": "Open Sauced"
  },
  {
    "name": "Megan Kaczanowski",
    "topic": "Cybersecurity",
    "bio": "Megan is a cybersecurity professional.",
    "company": "CLEAR (clearme.com)"
  },
  {
    "name": "Bo Percival",
    "topic": "UNICEF and Open Source",
    "bio": "Bo is actively involved in open-source initiatives with a focus on leveraging technology for UNICEF's mission.",
    "company": "UNICEF"
  },
  {
    "name": "Cynthia Lo",
    "topic": "Tech and Social Sector",
    "bio": "Cynthia is working with GitHub Social Impact team in bridging the gap between technology and the social sector, driving positive change.",
    "company": "GitHub"
  },
  {
    "name": "Bedeho Mender",
    "topic": "Web 3",
    "bio": "Bedeho is the founder of Jsgenesis a company in the Web 3 space, exploring the decentralized future of the internet.",
    "company": "Jsgenesis"
  },
  {
    "name": "Mark Jackson",
    "topic": "Quantum Computing",
    "bio": "Mark is a quantum computing evangelist at Quantinuum, contributing to advancements in this cutting-edge field.",
    "company": "Quantinuum"
  },
  {
    "name": "Prof. Jay McClelland",
    "topic": "Brains and Computing",
    "bio": "Prof. Jay McClelland is a renowned expert in the intersection of neuroscience and computing, providing unique perspectives on brain-inspired computing.",
    "company": "Stanford University"
  },
  {
    "name": "Sara Cross",
    "topic": "Tech For All",
    "bio": "Sara dicsuesed her journey in working in tech and how tech is not only for programmers.",
    "company": "Microsoft"
  },
  {
    "name": "Elise Hollowed",
    "topic": "Developer Communities",
    "bio": "Elise is passionate about fostering strong and inclusive developer communities, driving collaboration and knowledge-sharing.",
    "company": "GitHub"
  },
  {
    "name": "Juan Pa Flores",
    "topic": "Autonomous Communities",
    "bio": "Juan Pa Flores explores the concept of autonomous communities and their role in shaping the future.",
    "company": "GitHub"
  }
];

const TestimonialsCard = (name:string, company:string, information:string) => (
  <div className="rounded-3xl border duration-300 hover:shadow-md p-6">
    <div className="flex flex-row">
      <div className="p-2 w-12 h-12 mr-4 bg-primary rounded-full text-white flex items-center justify-center text-xl font-bold">
     {name[0]}
   </div>
      <div className="flex flex-col gap-0">
        <h1 className="text-2xl font-medium">
          {name}
        </h1>
        <h3 className="text-primary font-bold text-sm">
          {company}
        </h3>
      </div>
    </div>
    <p className="mt-2 pb-1">
      {information}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="container my-10">
      <div className="flex flex-col gap-6 mb-10">
        <h1 className="text-5xl font-medium">
          Some of our <span className="text-primary font-bold">guests</span> 
        </h1>
        <p className="">
          Here is a short information about some of our guests
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {
          guestsInformation.map((guest) => (
            TestimonialsCard(guest.name, guest.company, guest.bio)
          ))
        }
      </div>
    </section>
  );
};

export default Testimonials;