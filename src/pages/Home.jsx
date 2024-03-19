import React from "react";
import { slivakers } from "../../data";

const Home = () => {
  return (
    <div className="p-5 space-y-5">
      <div className="flex justify-between items-center">
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
              className="bg-white/5 rounded-md overflow-hidden border-white/15 border"
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
                <button className="w-full bg-[#2979c4] rounded py-2">
                  <i className="bx bxs-download"></i> download
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
