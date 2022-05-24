import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Lottie from "lottie-react";
import * as animationData from "./profile.json";
import gsap from "gsap";

const landAnime = (image) => {
  gsap.to(".line-vertical", {
    height: "50px",
    ease: "expo.inOut",
    duration: 0.3,
    stagger: 0.4,
  });
  gsap.to(".line-horizontal", {
    width: "100%",
    ease: "expo.inOut",
    duration: 0.6,
    stagger: 0.4,
    delay: 0.3,
  });

  gsap.fromTo(
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
      delay: 0.6,
    }
  );
  gsap.to(".profile-container", {
    height: "208px",
    ease: "power2.easeInOut",
    duration: 0.3,
    delay: 0.9,
  });
  gsap.to(".profile-reveal", {
    width: "0%",
    // transformOrigin: "left right",
    ease: "power2.easeInOut",
    duration: 0.8,
    delay: 1.2,
    stagger: -1,
  });

  gsap.fromTo(
    ".profile",
    { scale: 1.5 },
    {
      scale: 1,
      ease: "power2.easeOut",
      duration: 0.8,
      delay: 2,
    }
  );
  gsap.to(".hi-wrap", {
    opacity: 1,
  });
  gsap.fromTo(
    ".hi",

    {
      yPercent: 150,
    },
    {
      yPercent: 0,
      ease: "expo.inOut",
      duration: 0.5,
      stagger: 0.3,
      delay: 2.3,
    }
  );
};

const Landing = () => {
  useEffect(() => {
    landAnime();
  }, []);

  //need to fix
  return (
    <div id="landing" className="overflow-hidden  bg-awar">
      <Nav />
      <div className="text-3xl  w-screen h-screen flex flex-col   justify-center">
        <div className="sm:w-96 w-80 rounded-3xl relative self-center content-center profile-container place-content-center bg-white overflow-hidden justify-center">
          <div className="h-full bg-amel profile-reveal z-[1] absolute top-0 left-0 w-full"></div>
          <Lottie
            animationData={animationData}
            className="w-full h-52 profile  absolute   z-0 "
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
