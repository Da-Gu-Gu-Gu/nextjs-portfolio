import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SiExpress, SiMongodb, SiReact, SiNodedotjs } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    gsap.fromTo(
      ".skill",
      {
        color: "#191919",
      },
      {
        color: "#F75656",
        ease: "power2.easeIn",
        stagger: 1,
        scrollTrigger: {
          scrub: true,
          trigger: ".skill",
          end: "center center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".programming",
      {
        color: "#ffd95c",
      },
      {
        color: "#191919",
        ease: "power2.easeIn",
        stagger: 1,
        scrollTrigger: {
          scrub: true,
          trigger: ".programming",
          start: "center bottom-=200",
          end: "center center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".skill-line-horizontal",
      {
        height: 0,
      },
      {
        height: "100%",
        ease: "power4.easeInOut",
        stagger: 1,
        scrollTrigger: {
          scrub: true,
          trigger: ".skill-line-horizontal",
          start: "center bottom-=200",
          end: "center center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".skill-icon",
      {
        color: "#F75656",
      },
      {
        color: "#191919",
        ease: "power2.easeIn",
        stagger: 1,
        scrollTrigger: {
          scrub: true,
          trigger: ".skill-icon",
          start: "center bottom-=200",
          end: "center center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-screen h-max py-24 flex items-center flex-col justify-center  bg-ani text-3xl">
      <div className="flex rounded-md bg-amel p-2 font-bold text-4xl text-ani  text-center">
        <h1 className="skill">S</h1>
        <h1 className="skill">K</h1>
        <h1 className="skill">I</h1>
        <h1 className="skill">L</h1>
        <h1 className="skill">L</h1>
        <h1 className="skill">👀</h1>
      </div>
      <div className="lg:w-1/2 md:w-3/4 mt-10  h-[400px] w-4/5 py-8 px-5  overflow-hidden  bg-awar">
        <div className="h-1/4 border-amel  flex border-2 border-l-0 border-r-0 items-center justify-center">
          <div className="w-0.5 h-full skill-line-horizontal bg-amel"></div>
          <p className=" bg-ani block text-center px-5 py-1   ">
            <SiMongodb className="skill-icon  " />
          </p>

          <div className="grow text-center relative">
            <p className="sm:text-3xl md:text-4xl programming text-xl  font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              MONGO
            </p>
          </div>
          <div className="w-0.5 h-full skill-line-horizontal bg-amel"></div>
        </div>
        <div className="h-1/4 border-amel border-t-0   flex border-2  border-l-0 border-r-0 items-center justify-center">
          <div className="w-0.5 h-full skill-line-horizontal bg-amel"></div>
          <p className=" bg-ani  block  text-center px-5 py-1 ">
            <SiExpress className="skill-icon  " />
          </p>
          <div className="grow relative">
            <p className="sm:text-3xl md:text-4xl programming text-xl font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              EXPRESS
            </p>
          </div>
          <div className="w-0.5 h-full skill-line-horizontal bg-amel"></div>
        </div>
        <div className="h-1/4 border-amel border-t-0   flex border-2  border-l-0 border-r-0 items-center justify-center">
          <div className="w-0.5 h-full skill-line-horizontal bg-amel"></div>
          <p className=" bg-ani  block  text-center px-5 py-1  ">
            <SiReact className="skill-icon  " />
          </p>
          <div className="grow relative">
            <p className="sm:text-3xl md:text-4xl programming text-xl  font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              REACT
            </p>
          </div>
          <div className="w-0.5 h-full skill-line-horizontal bg-amel"></div>
        </div>

        <div className="h-1/4 border-amel border-t-0   flex border-2  border-l-0 border-r-0 items-center justify-center">
          <div className="w-0.5 h-full skill-line-horizontal bg-amel"></div>
          <p className=" bg-ani block  text-center px-5 py-1  ">
            <SiNodedotjs className="skill-icon  " />
          </p>
          <div className="grow relative">
            <p className="sm:text-3xl md:text-4xl text-xl programming   font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              NODE
            </p>
          </div>
          <div className="w-0.5 h-full skill-line-horizontal bg-amel"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
