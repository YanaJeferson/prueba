import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="mx-auto container m-7 grid grid-cols-6  gap-4">
        <div className="col-span-6 h-52 w-auto bg-emerald-300 m-2 md:m-0 rounded-xl flex justify-center items-center">
          <span className="flex text-3xl font-bold">1</span>
        </div>
        <div className="col-span-6  w-auto h-52 md:col-span-3 m-2 md:m-0 bg-indigo-300 rounded-xl flex justify-center items-center">
          <span className="flex text-3xl font-bold">2</span>
        </div>
        <div className="col-span-6  w-auto h-52 md:col-span-3 m-2 md:m-0  bg-indigo-300 rounded-xl flex justify-center items-center">
          <span className="flex text-3xl font-bold">3</span>
        </div>
        <div className="col-span-6 md:col-span-2 h-52 w-auto m-2 md:m-0  bg-violet-300 rounded-xl flex justify-center items-center">
          <span className="flex text-3xl font-bold">4</span>
        </div>
        <div className="col-span-6  md:col-span-2 h-52 w-auto m-2 md:m-0 bg-violet-300 rounded-xl flex justify-center items-center">
          <span className="flex text-3xl font-bold">5</span>
        </div>
        <div className="col-span-6  md:col-span-2 h-52 w-auto m-2 md:m-0 bg-violet-300 rounded-xl flex justify-center items-center">
          <span className="flex text-3xl font-bold">6</span>
        </div>
      </div>

      {/* */}
    </>
  );
};

export default Home;
