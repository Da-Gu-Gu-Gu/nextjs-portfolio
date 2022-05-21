import React from "react";

const Project = () => {
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
          <div className="bg-awar p-2">
            <p className="font-bold text-amel">Just try a taste of Three.js</p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <p className="bg-kayan font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer">
              DEMO
            </p>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="h-[200px] bg-ani"></div>
          <div className="bg-awar p-2">
            <p className="font-bold text-amel">
              Crush finder using facebook friend
            </p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <p className="bg-kayan font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer">
              DEMO
            </p>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="h-[200px] bg-ani"></div>
          <div className="bg-awar p-2">
            <p className="font-bold text-amel">Smart Attendance with Php</p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <p className="bg-kayan font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer">
              DEMO
            </p>
          </div>
        </div>
        <div className="border-2 border-black">
          <div className="h-[200px] bg-ani"></div>
          <div className="bg-awar p-2">
            <p className="font-bold text-amel">Chat App</p>
          </div>
          <div className="project-link p-2 bg-awar border-2 border-amel border-x-0 border-b-0">
            <p className="bg-kayan font-bold text-center text-white block p-[5px] rounded-sm cursor-pointer">
              DEMO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
