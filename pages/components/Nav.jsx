import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

const tl = gsap.timeline();

const open = () => {
  tl.to(".menu-wrap", {
    display: "block",
  })
    .fromTo(
      ".menu-link-wrap",
      {
        height: 0,
      },
      {
        height: "100%",
      }
    )

    .fromTo(
      ".menu-bg",
      {
        height: 0,
        display: "none",
      },
      {
        display: "block",
        height: "100%",
        ease: "expo.inOut",
        duration: 0.5,
        stagger: {
          amount: 0.2,
        },
      }
    )
    .fromTo(
      ".menu-line-vertical",
      {
        height: 0,
      },
      {
        height: "100%",
        ease: "expo.inOut",
        duration: 0.5,
        stagger: {
          amount: 0.1,
        },
      }
    )
    .fromTo(
      ".menu-line-horizontal",
      {
        width: 0,
      },
      {
        width: "100%",
        ease: "expo.inOut",
        duration: 0.5,
        stagger: {
          amount: 0.1,
        },
      }
    )
    .fromTo(
      ".menu-link",
      {
        // opacity: 0,
        xPercent: -10000,
      },
      {
        // opacity: 1,
        xPercent: 0,
        duration: 0.2,
        ease: "power3.out",
        stagger: 0.1,
      }
    )
    // .from(".menu-link", {
    //   y: 150,
    //   autoAlpha: 0,
    //   duration: 0.2,
    //   ease: "power3.out",
    //   stagger: 0.1,
    // })
    .fromTo(
      ".social",
      {
        height: 0,
      },
      {
        height: "100%",
        ease: "expo.inOut",
        duration: 0.5,
      }
    );
};

const close = () => {
  tl.fromTo(
    ".social",
    {
      height: "100%",
    },
    {
      height: 0,
      ease: "expo.inOut",
      duration: 0.3,
    }
  )
    .fromTo(
      ".menu-link",
      {
        // opacity: 1,
        xPercent: 0,
      },
      {
        // opacity: 0,
        xPercent: -10000,
        duration: 0.2,
        ease: "power3.out",
        stagger: 0.1,
      }
    )
    .fromTo(
      ".menu-link-wrap",
      {
        height: "100%",
      },
      {
        height: 0,
      }
    )

    .fromTo(
      ".menu-bg",
      {
        height: "100%",
        display: "block",
      },
      {
        height: 0,
        display: "none",
        ease: "expo.inOut",
        duration: 0.5,
        stagger: {
          amount: -0.3,
        },
      }
    )

    .to(".menu-wrap", {
      display: "none",
    });
};

const Nav = () => {
  const [start, setStart] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen === true && start === false) {
      open();
    }
    if (menuOpen === false && start === false) {
      close();
    }
    setStart(false);
  }, [menuOpen]);

  return (
    <div className=" fixed top-0  left-0 z-10 flex bg-transparent flex-col">
      <div className="line-horizontal w-0 h-0.5 bg-black "></div>

      <div className=" w-screen h-[50px] nav  bg-awar  flex  item-center justify-center">
        <div className="lg:w-1/2 md:w-3/4 w-screen   flex items-center  ">
          <div className="w-0.5  line-vertical bg-black"></div>
          <div className="logo font-bold   inline-block h-[50px] leading-[50px] px-5 ">
            D
          </div>
          <div className="w-0.5  line-vertical bg-black"></div>
          <div className="logo font-bold grow text-center   inline-block h-[50px] leading-[50px] px-5 ">
            Welcome
          </div>
          <div className="w-0.5  line-vertical bg-black"></div>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="logo font-bold  text-center cursor-pointer   h-[50px] flex flex-col items-center justify-center px-5 "
          >
            <div className="line1 w-6 h-[3px] mb-1 bg-black"></div>
            <div className="line1 w-6 h-[3px] mb-1 bg-black"></div>
            <div className="line1 w-6 h-[3px] bg-black"></div>
          </div>
          <div className="w-0.5 line-vertical bg-black"></div>
        </div>
      </div>

      <div className="line-horizontal w-0 h-0.5 bg-black "></div>

      <div className="menu-wrap h-screen hidden  relative">
        <div className="bg-amel menu-bg z-20 absolute w-screen hidden"></div>
        <div className="bg-kayan menu-bg z-20 absolute w-screen hidden"></div>
        <div className="bg-ani menu-bg z-30 absolute w-screen hidden ">
          <div className="lg:w-1/2 md:w-3/4 menu-link-close  h-full m-auto  flex   ">
            <div className=" w-0.5  menu-line-vertical bg-black"></div>
            <div className="h-full menu-link-wrap grow bg-kayan text-white">
              <div className="h-1/5 flex flex-col">
                <div className="h-full flex ">
                  <div className="pl-[25px] pr-[26px] overflow-hidden relative font-bold h-full  align-middle">
                    <span className=" absolute  menu-link top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      1.
                    </span>
                  </div>
                  <div className="w-0.5 h-0 menu-line-vertical  bg-black relative"></div>
                  <div className="grow relative">
                    <p className="text-3xl menu-link font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      HOME
                    </p>
                  </div>
                  <div className="w-0.5 h-0 menu-line-vertical  bg-black relative"></div>
                  <div className="pl-[32px] pr-[32px] relative font-bold h-full  align-middle">
                    <span className="menu-link absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <MdArrowForwardIos />
                    </span>
                  </div>
                </div>
                <div className="h-0.5 menu-line-horizontal bg-black"></div>
              </div>

              <div className="h-1/5 flex flex-col">
                <div className="h-full flex ">
                  <div className="pl-[25px] pr-[26px] relative font-bold h-full  align-middle">
                    <span className=" absolute  menu-link top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      2.
                    </span>
                  </div>
                  <div className="w-0.5 h-0 menu-line-vertical  bg-black relative"></div>
                  <div className="grow relative">
                    <p className="text-3xl menu-link font-bold tracking-widest  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      ABOUT
                    </p>
                  </div>
                  <div className="w-0.5 h-0 menu-line-vertical  bg-black relative"></div>
                  <div className="pl-[32px] pr-[32px] relative font-bold h-full  align-middle">
                    <span className="menu-link absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <MdArrowForwardIos />
                    </span>
                  </div>
                </div>
                <div className="h-0.5 menu-line-horizontal bg-black"></div>
              </div>

              <div className="h-1/5 flex flex-col">
                <div className="h-full flex ">
                  <div className="pl-[25px] pr-[26px] relative font-bold h-full  align-middle">
                    <span className=" absolute menu-link top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      3.
                    </span>
                  </div>
                  <div className="w-0.5 h-0 menu-line-vertical  bg-black relative"></div>
                  <div className="grow relative">
                    <p className="text-3xl menu-link font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      SKILL
                    </p>
                  </div>
                  <div className="w-0.5 h-0 menu-line-vertical  bg-black relative"></div>
                  <div className="pl-[32px] pr-[32px] relative font-bold h-full  align-middle">
                    <span className=" absolute menu-link top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <MdArrowForwardIos />
                    </span>
                  </div>
                </div>
                <div className="h-0.5 menu-line-horizontal bg-black"></div>
              </div>

              <div className="h-1/5 flex flex-col">
                <div className="h-full flex ">
                  <div className="pl-[25px] pr-[26px] relative font-bold h-full  align-middle">
                    <span className=" absolute menu-link top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      4.
                    </span>
                  </div>
                  <div className="w-0.5 h-0 menu-line-vertical  bg-black relative"></div>
                  <div className="grow relative">
                    <p className="text-3xl menu-link font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      PROJECTS
                    </p>
                  </div>
                  <div className="w-0.5 h-0 menu-line-vertical  bg-black relative"></div>
                  <div className="pl-[32px] pr-[32px] relative font-bold h-full  align-middle">
                    <span className=" absolute menu-link top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <MdArrowForwardIos />
                    </span>
                  </div>
                </div>
                <div className="h-0.5 menu-line-horizontal bg-black"></div>
              </div>

              <div className="h-1/5 bg-white text-kayan social ">
                <div className="mx-auto w-4/5  py-3 menu-link flex justify-around">
                  <BsLinkedin className="align-text-center text-[40px]" />
                  <BsGithub className="align-text-center text-[40px]" />
                  <HiOutlineMail className="align-text-center text-[43px]" />
                </div>
              </div>
            </div>
            <div className=" w-0.5 menu-line-vertical bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
