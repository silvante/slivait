import React from "react";
import { slivakers } from "../../data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-5 space-y-5 flex flex-col items-center w-full">
      <div className=" w-full flex justify-between items-center">
        <h3 className="text-xl font-bold">
          there is {slivakers.length} - slivait
        </h3>
        <h3 className="text-xl font-bold">All is for free</h3>
      </div>
      <div className="w-full gap-5 resGit">
        {slivakers.map((e) => {
          return (
            <div
              key={e.id}
              className="bg-white/5 rounded-md overflow-hidden border-white/15 border transition-all"
            >
              <div className="h-[223px] w-full flex">
                <img src={e.img} alt={e.name} className="h-full w-full" />
              </div>
              <div className="p-3 space-y-3">
                <div>
                  <p className="text-[18px]">neme: {e.name}</p>
                  <p>size: {e.size} GB</p>
                  <p>cost: {e.cost} rub</p>
                </div>
                <Link to={`/${e.name}`} className="w-full bg-blueSans rounded py-2 shadow-btn inline-block text-center">
                  <i className="bx bxs-download"></i> download
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
