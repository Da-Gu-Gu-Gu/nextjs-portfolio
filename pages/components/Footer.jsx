import React from "react";

const Footer = () => {
  return (
    <div className=" flex bg-transparent flex-col">
      <div className=" w-0 h-0.5 bg-black "></div>

      <div className=" w-screen h-[50px] nav  bg-awar  flex  item-center justify-center">
        <div className="lg:w-1/2 md:w-3/4 w-screen   flex items-center  ">
          <div className="w-0.5  bg-black"></div>
          <div className=" font-bold   inline-block h-[50px] leading-[50px] px-5 ">
            🤍
          </div>
          <div className="w-0.5  bg-black"></div>
          <div className=" font-bold grow text-center   inline-block h-[50px] leading-[50px] px-5 ">
            &copy; {new Date().getFullYear()} Da Gu Gu Gu
          </div>
          <div className="w-0.5  bg-black"></div>
          <div className=" font-bold  text-center cursor-pointer   h-[50px] flex flex-col items-center justify-center px-5 ">
            🤍
          </div>
          <div className="w-0.5 bg-black"></div>
        </div>
      </div>

      <div className=" w-0 h-0.5 bg-black "></div>
    </div>
  );
};

export default Footer;
