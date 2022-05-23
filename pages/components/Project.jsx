import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const demoHandler = (demo, reveal, image) => {
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

  gsap.fromTo(
    reveal,
    {
      height: "100%",
    },
    {
      height: 0,
      ease: "power2.easeInOut",
      duration: 0.8,
      scrollTrigger: {
        trigger: reveal,
        start: "top center+=100",
        end: "top+=50 center",
        toggleActions: "play none none reverse",
      },
    }
  );
  gsap.fromTo(
    image,
    { scale: 1.5 },
    {
      scale: 1,
      ease: "power2.easeOut",
      duration: 0.8,
      delay: 1,
      scrollTrigger: {
        trigger: reveal,
        start: "top center+=100",
        end: "top+=50 center",
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

    demoHandler(".demo1", ".portal-reveal", ".portal");
    demoHandler(".demo2", ".crush-reveal", ".crush");
    demoHandler(".demo3", ".attendance-reveal", ".attendance");
    demoHandler(".demo4", ".chat-reveal", ".chat");
  }, []);

  return (
    <div
      id="project"
      className="w-screen h-max  flex items-center flex-col justify-center bg-kayan py-24"
    >
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
          <div className="h-[200px] overflow-hidden relative bg-amel ">
            <div className="h-[200px] bg-ani portal-reveal z-[1] absolute top-0 left-0 w-full"></div>
            <img
              src="/portal.png"
              alt="portal"
              className="h-[150px] absolute w-fit border-2  border-amel top-1/2 portal left-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="bg-awar h-[65px] p-2">
            <p className="font-bold text-amel">Just try a taste of Three.js</p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <a
              href="https://portal3d.herokuapp.com/"
              className="bg-kayan demo1 font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer"
            >
              DEMO
            </a>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="h-[200px]   overflow-hidden bg-amel relative">
            <div className="h-[200px] bg-ani crush-reveal z-[1] absolute top-0 left-0 w-full"></div>
            <img
              src="/crushhook.png"
              alt="crushhook"
              className="h-[150px] crush  w-fit border-2 border-amel absolute top-1/2  left-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="bg-awar h-[65px] p-2">
            <p className="font-bold text-amel">
              Crush hook using facebook friend
            </p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <a
              href="https://crushhook.herokuapp.com/"
              className="bg-kayan demo2 overflow-hidden demo font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer"
            >
              DEMO
            </a>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="h-[200px]  overflow-hidden bg-amel relative ">
            <div className="h-[200px] bg-ani attendance-reveal z-[1] absolute top-0 left-0 w-full"></div>
            <img
              src="/attendance.png"
              alt="attendance"
              className="h-[150px]  attendance w-fit border-2 border-amel absolute top-1/2  left-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="bg-awar h-[65px] p-2">
            <p className="font-bold text-amel">Smart Attendance with Php</p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <a
              href="http://attendance-smart.herokuapp.com/"
              className="bg-kayan demo3 font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer"
            >
              DEMO
            </a>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="h-[200px]  overflow-hidden bg-amel relative">
            <div className="h-[200px] bg-ani chat-reveal z-[1] absolute top-0 left-0 w-full"></div>
            <img
              src="/chat.png"
              alt="chatapp"
              className="h-[150px]  chat  absolute top-1/2 w-fit border-2 border-amel left-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="bg-awar h-[65px] p-2">
            <p className="font-bold text-amel">Chat App</p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <a
              href="https://mesg.vercel.app/"
              className="bg-kayan demo4 font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer"
            >
              DEMO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
