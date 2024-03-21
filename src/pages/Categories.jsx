import React from "react";
import { Link, useParams } from "react-router-dom";
import { slivakers } from "../../data";

const Categories = () => {
  const { c } = useParams();
  const arr = slivakers.filter((e) => e.type === c);
  return (
    <div className="p-5 space-y-5 flex flex-col items-center w-full">
      <div className="flex justify-between w-full">
        <h3 className="text-xl font-bold">{c} lessons</h3>
        <h3 className="text-xl font-bold">{arr.length} - lessons</h3>
      </div>
      <div className="w-full gap-5 resGit">
        {arr.map((e) => {
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
                <Link
                  to={`/${e.name}`}
                  className="w-full bg-blueSans rounded py-2 shadow-btn inline-block text-center"
                >
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

export default Categories;
