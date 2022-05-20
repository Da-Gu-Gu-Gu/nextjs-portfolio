import React, { useRef, useEffect } from "react";
import Nav from "./Nav";
import Lottie from "lottie-react";
import * as animationData from "./profile.json";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

const Landing = () => {
  const textRef = useRef(null);

  useEffect(() => {
    let imageReveal = CSSRulePlugin.getRule(".profile-container::after");

    tl.to(".line-vertical", {
      height: "50px",
      ease: "expo.inOut",
      duration: 0.5,
      stagger: 0.4,
    })
      .to(".line-horizontal", {
        width: "100%",
        ease: "expo.inOut",
        duration: 0.5,
        stagger: 0.4,
      })
      .to(".profile-container", {
        height: "208px",
        ease: "power2.easeInOut",
        duration: 1,
      })
      .to(imageReveal, {
        width: "0%",
        ease: "power2.easeInOut",
        duration: 1,
      })
      .fromTo(
        ".profile",
        { scale: 1.5 },
        {
          scale: 1,
          ease: "power2.easeOut",
          duration: 1,
          delay: -0.9,
        }
      )

      .to(".hi", {
        y: 0,
        ease: "power4.out",
        stagger: 0.3,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.3,
      });
  }, []);

  return (
    <div className="overflow-hidden bg-awar">
      <Nav />
      {/* h-52  */}
      <div className="text-3xl  w-screen h-screen flex flex-col   justify-center">
        <div className="sm:w-96 w-80 rounded-3xl self-center profile-container place-content-center bg-white overflow-hidden flex justify-center ">
          <Lottie
            animationData={animationData}
            className="w-80 h-52 profile "
            autoplay={true}
            loop={true}
          />
        </div>
        <div className="self-center sm:w-96  w-80 mt-8 flex flex-col">
          <h2
            onClick={() => alert("arr")}
            className="bg-white hi p-1  translate-y-[110%] px-2 rounded-lg inline self-start "
          >
            👋 Hi
          </h2>
          <h2 className="bg-white hi   p-1 px-2 translate-y-[110%] rounded-lg mt-2 inline self-start ">
            I'm Da Gu Gu Gu
          </h2>
          <h2 className="bg-white hi   p-1 px-2 translate-y-[110%] rounded-lg mt-2 inline self-start ">
            Developer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
