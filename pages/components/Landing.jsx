import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Lottie from "lottie-react";
import * as animationData from "./profile.json";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

let tl = gsap.timeline();

const landAnime = (image, complete) => {
  tl.to(".line-vertical", {
    height: "50px",
    ease: "expo.inOut",
    duration: 0.3,
    stagger: 0.4,
    onComplete: complete,
  })
    .to(".line-horizontal", {
      width: "100%",
      ease: "expo.inOut",
      duration: 0.3,
      stagger: 0.4,
      onComplete: complete,
    })
    .fromTo(
      ".logo",
      {
        opacity: 0,
        rotate: -90,
      },
      {
        opacity: 1,
        rotate: 0,
        ease: "expo.inOut",
        duration: 0.3,
        stagger: 0.4,
        onComplete: complete,
      }
    )
    .to(".profile-container", {
      height: "208px",
      ease: "power2.easeInOut",
      duration: 0.3,
      onComplete: complete,
    })
    .to(image, {
      width: "0%",
      ease: "power2.easeInOut",
      duration: 0.8,
      onComplete: complete,
    })
    .fromTo(
      ".profile",
      { scale: 1.5 },
      {
        scale: 1,
        ease: "power2.easeOut",
        duration: 0.8,
        onComplete: complete,
      }
    )
    .to(".hi-wrap", {
      opacity: 1,
      onComplete: complete,
    })
    .fromTo(
      ".hi",

      {
        yPercent: 150,
      },
      {
        yPercent: 0,
        ease: "expo.inOut",
        duration: 0.5,
        stagger: 0.3,
        onComplete: complete,
      }
    );
};

const Landing = () => {
  const [complete, setcomplete] = useState(false);
  const imageReveal = CSSRulePlugin.getRule(".profile-container::after");

  const completeHandler = () => {
    setcomplete(true);
  };
  useEffect(() => {
    console.log(complete);
    complete === false ? landAnime(imageReveal, completeHandler) : alert("aaa");

    // setcomplete(false);
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
          <div className=" p-1 hi-wrap opacity-0 overflow-hidden rounded-lg inline-flex self-start">
            <h2
              className="bg-white hi px-1 rounded-lg"
              onClick={() => alert("arr")}
            >
              👋 Hi
            </h2>
          </div>
          <div className=" p-1 hi-wrap opacity-0 overflow-hidden rounded-lg inline-flex self-start">
            <h2
              className="bg-white hi px-1 rounded-lg"
              onClick={() => alert("arr")}
            >
              I'm Da Gu Gu Gu
            </h2>
          </div>
          <div className=" p-1 hi-wrap opacity-0 overflow-hidden rounded-lg inline-flex self-start">
            <h2
              className="bg-white hi px-1 rounded-lg"
              onClick={() => alert("arr")}
            >
              Developer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
