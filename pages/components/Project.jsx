import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const demoHandler = (demo) => {
  gsap.fromTo(
    demo,
    {
      width: 0,
    },
    {
      width: "100%",
      ease: "sine.inOut",
      stagger: 1,
      duration: 1,
      scrollTrigger: {
        scrub: true,
        trigger: demo,
        end: "center center+=200",
        toggleActions: "play none none reverse",
      },
    }
  );
};

const Project = () => {
  useEffect(() => {
    gsap.fromTo(
      ".project",
      {
        color: "#191919",
      },
      {
        color: "#501683",
        ease: "power2.in",
        stagger: 1,
        scrollTrigger: {
          scrub: true,
          trigger: ".project",
          end: "center center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    demoHandler(".demo1");
    demoHandler(".demo2");
    demoHandler(".demo3");
    demoHandler(".demo4");
  }, []);

  return (
    <div className="w-screen h-max  flex items-center flex-col justify-center bg-kayan py-24">
      <div className="flex rounded-md bg-amel p-2 font-bold text-4xl text-kayan  text-center">
        <h1 className="project">P</h1>
        <h1 className="project">R</h1>
        <h1 className="project">O</h1>
        <h1 className="project">J</h1>
        <h1 className="project">E</h1>
        <h1 className="project">C</h1>
        <h1 className="project">T</h1>
        <h1 className="project">💻</h1>
      </div>
      <div className="lg:w-1/2 md:w-3/4 mt-16  grid sm:grid-cols-2 w-4/5   gap-4 overflow-hidden text-white ">
        <div className="border-2 border-black">
          <div className="h-[200px] bg-ani"></div>
          <div className="bg-awar h-[65px] p-2">
            <p className="font-bold text-amel">Just try a taste of Three.js</p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <p className="bg-kayan demo1 font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer">
              DEMO
            </p>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="h-[200px] bg-ani"></div>
          <div className="bg-awar h-[65px] p-2">
            <p className="font-bold text-amel">
              Crush finder using facebook friend
            </p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <p className="bg-kayan demo2 overflow-hidden demo font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer">
              DEMO
            </p>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="h-[200px] bg-ani"></div>
          <div className="bg-awar h-[65px] p-2">
            <p className="font-bold text-amel">Smart Attendance with Php</p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <p className="bg-kayan demo3 font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer">
              DEMO
            </p>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="h-[200px] bg-ani"></div>
          <div className="bg-awar h-[65px] p-2">
            <p className="font-bold text-amel">Chat App</p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <p className="bg-kayan demo4 font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer">
              DEMO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
