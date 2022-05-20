import React from "react";

const About = () => {
  return (
    <div className="h-screen w-screen py-24 flex justify-center bg-amel text-white text-3xl">
      <div className="lg:w-1/2 md:w-3/4 relative w-4/5 p-8 bg-kayan">
        <h1>Firstly,</h1>
        <p className="my-5  w-auto text-left text-[20px] md:text-2xl lg:text-3xl">
          I'm very <span className="bg-ani p-1">handsome developer</span>, from
          Yangon. Studied at University of Computer Studies Yangon. I'm the boy
          fall in love with{" "}
          <span className="bg-awar text-amel p-1">Javascript</span>.
        </p>
        <p className="absolute bottom-5">Love To Design</p>
      </div>
    </div>
  );
};

export default About;
