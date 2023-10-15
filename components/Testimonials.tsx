import React from "react";

const TestimonialsCard = () => (
  <div className="rounded-3xl border duration-300 hover:shadow-md p-6">
    <div className="flex flex-row">
      <div className="p-2 w-12 h-12 mr-4 bg-primary rounded-full text-white flex items-center justify-center text-xl font-bold">
     A
   </div>
      <div className="flex flex-col gap-0">
        <h1 className="text-2xl font-medium">
          Ali Mcharka
        </h1>
        <h3 className="text-primary font-bold text-sm">
          Programmer
        </h3>
      </div>
    </div>
    <p className="mt-2 pb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam
      asperiores totam possimus eius quam.
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="container my-10">
      <div className="flex flex-col gap-6 mb-10">
        <h1 className="text-5xl font-medium">
          What Our <span className="text-primary font-bold">Clients</span> Say?
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          unde est deleniti... <br /> similique Inventore unde est deleniti,
          similique
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </section>
  );
};

export default Testimonials;