import { useState, useEffect } from "react";
import Head from "next/head";
import Landing from "./components/Landing";
import gsap from "gsap";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";

let tl = gsap.timeline();

const introAnimation = (completeAnimation) => {
  tl.to(".line", {
    height: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: 0.4,
    onComplete: completeAnimation,
  });
};

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  const completeAnimation = () => {
    setIntroComplete(true);
  };

  useEffect(() => {
    introAnimation(completeAnimation);
  }, []);

  return (
    <>
      <Head>
        <title>Da Gu Gu Gu</title>
        <meta name="description" content="Hello, I'm Web Developer 💻" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden bg-awar">
        {introComplete === false ? (
          <Intro />
        ) : (
          <>
            <Landing />
            <About />
            <Skills />
            <Project />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
