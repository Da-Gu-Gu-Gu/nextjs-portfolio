import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Typical from "react-typical";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutwrapRef = useRef(null);
  const emojiRef = useRef(null);
  const aboutRef = useRef(null);
  const abouttitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutwrapRef.current,
      {
        height: 0,
      },
      {
        height: "100%",

        ease: "power2.easeInOut",
        duration: 1,
        scrollTrigger: {
          trigger: aboutwrapRef.current,
          scrub: true,
          start: "bottom bottom",
          end: "center center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      emojiRef.current,
      {
        opacity: 0,
        y: -150,
      },
      {
        opacity: 1,
        y: 0,

        ease: "expo.inOut",
        delay: 0.5,
        scrollTrigger: {
          scrub: true,
          trigger: aboutwrapRef.current,

          end: "center center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      abouttitleRef.current,
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 1,
        x: 0,

        ease: "expo.inOut",
        delay: 0.8,
        scrollTrigger: {
          scrub: true,
          trigger: aboutwrapRef.current,
          end: "center center+=100",
          // start: "top center+=100",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      aboutRef.current,
      {
        yPercent: 2000,
      },
      {
        yPercent: 0,

        ease: "expo.inOut",
        delay: 1,
        scrollTrigger: {
          scrub: true,
          trigger: aboutwrapRef.current,
          end: "center center+=100",
          // start: "top center+=100",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".typewritter",
      {
        color: "#501683",
        // display: "none",
      },
      {
        color: "white",
        // display: "block",

        ease: "expo.inOut",
        delay: 1,
        scrollTrigger: {
          scrub: true,
          trigger: aboutwrapRef.current,
          end: "center top",
          // start: "top center+=100",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div
      id="about"
      className=" w-screen ABOUT h:max sm:h-screen xl:h-screen md:h-max lg:h-max  py-24 flex justify-center bg-amel items-center text-white text-3xl"
    >
      <div
        ref={aboutwrapRef}
        className="lg:w-1/2 rounded-md md:w-3/4 relative h-auto w-4/5 py-8 px-5 overflow-hidden  bg-kayan"
      >
        <span ref={emojiRef} className="text-right block ">
          🔥
        </span>
        <h1 ref={abouttitleRef}>Firstly,</h1>
        <p
          ref={aboutRef}
          className="my-5  w-auto text-justify break-all  text-[18px] md:text-2xl lg:text-3xl"
        >
          I'm very <span className="p-1 bg-ani">!handsome</span> developer, from
          Yangon and studied at University of Computer Studies Yangon. I'm the
          boy fall in love with{" "}
          <span className="bg-awar text-amel p-1">Javascript</span>. Have been
          learning programming for almost a year and still learning.🚀
        </p>
        <span className=" text-lg mt-3  flex text-kayan typewritter">
          Love To &nbsp;
          <Typical
            steps={["Design", 2500, "Code", 2500, "Animate It ☁️", 2500]}
            loop={Infinity}
          />
        </span>
      </div>
    </div>
  );
};

export default About;
