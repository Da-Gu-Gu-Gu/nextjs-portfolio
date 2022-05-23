import React, { useEffect } from "react";
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
        ease: "power2.in",
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
        ease: "power2.in",
        stagger: 1,
        duration: 1,
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

    gsap.to(".skill-line-horizontal", {
      width: "100%",
      ease: "expo.inOut",
      stagger: 1,
      duration: 1,
      scrollTrigger: {
        scrub: true,
        trigger: ".skill-line-horizontal",
        start: "center bottom-=200",
        end: "center center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    gsap.fromTo(
      ".skill-icon",
      {
        color: "#F75656",
      },
      {
        color: "#191919",
        ease: "power2.in",
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
    <div
      id="skill"
      className="w-screen h-max py-24 flex items-center flex-col justify-center  bg-ani text-3xl"
    >
      <div className="flex rounded-md bg-amel p-2 font-bold text-4xl text-ani  text-center">
        <h1 className="skill">S</h1>
        <h1 className="skill">K</h1>
        <h1 className="skill">I</h1>
        <h1 className="skill">L</h1>
        <h1 className="skill">L</h1>
        <h1 className="skill">👀</h1>
      </div>
      <div className="lg:w-1/2 md:w-3/4 mt-10  h-[400px] w-4/5 py-8 px-5  overflow-hidden  bg-awar">
        <div className="w-0 h-0.5  skill-line-horizontal bg-amel"></div>
        <div className="h-1/4  flex  items-center justify-center">
          <p className=" bg-ani block text-center px-5 py-1   ">
            <SiMongodb className="skill-icon  " />
          </p>

          <div className="grow text-center relative">
            <p className="sm:text-3xl md:text-4xl programming text-xl  font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              MONGO
            </p>
          </div>
        </div>

        <div className="w-0 h-0.5  skill-line-horizontal bg-amel"></div>
        <div className="h-1/4  flex  items-center justify-center">
          <p className=" bg-ani  block  text-center px-5 py-1 ">
            <SiExpress className="skill-icon  " />
          </p>
          <div className="grow relative">
            <p className="sm:text-3xl md:text-4xl programming text-xl font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              EXPRESS
            </p>
          </div>
        </div>

        <div className="w-0 h-0.5  skill-line-horizontal bg-amel"></div>
        <div className="h-1/4  flex  items-center justify-center">
          <p className=" bg-ani  block  text-center px-5 py-1  ">
            <SiReact className="skill-icon  " />
          </p>
          <div className="grow relative">
            <p className="sm:text-3xl md:text-4xl programming text-xl  font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              REACT
            </p>
          </div>
        </div>

        <div className="w-0 h-0.5  skill-line-horizontal bg-amel"></div>
        <div className="h-1/4  flex  items-center justify-center">
          <p className=" bg-ani block  text-center px-5 py-1  ">
            <SiNodedotjs className="skill-icon  " />
          </p>
          <div className="grow relative">
            <p className="sm:text-3xl md:text-4xl text-xl programming   font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              NODE
            </p>
          </div>
        </div>
        <div className="w-0 h-0.5  skill-line-horizontal bg-amel"></div>
      </div>
    </div>
  );
};

export default Skills;
