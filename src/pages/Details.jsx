import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { slivakers } from "../../data";

const Details = () => {
  const { name } = useParams();
  const slivait = slivakers.find((e) => e.name === name);

  const data = slivakers.filter((e) => e.type === slivait.type);
  return (
    <div className="p-5 space-y-5 flex flex-col items-center w-full">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-xl font-bold">{slivait.name} - slivait</h3>
        <h3 className="text-xl font-bold">free lesson</h3>
      </div>
      <div className="flex w-full justify-between gap-5">
        <div className="w-[40%] border-2 border-white/15 rounded-lg overflow-hidden">
          <img src={slivait.img} alt={slivait} className="w-full" />
        </div>
        <div className="flex-1 space-y-3 flex flex-col justify-center">
          <h2 className="text-3xl"># {slivait.name}</h2>
          <div className="bg-white/5 border-white/15 border rounded-xl p-5">
            <p className="text-white/45">{slivait.desc}</p>
          </div>
          <div>
            <p className="text-white/55">
              type of the Lesson:{" "}
              <span className="text-white">{slivait.type}</span>
            </p>
            <p className="text-white/55">
              The price of the lesson:{" "}
              <span className="text-white">{slivait.cost} rub</span>
            </p>
            <p className="text-white/55">
              Storage of lesson:{" "}
              <span className="text-white">{slivait.size} GB</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between gap-3">
        {slivait.file.map((e) => {
          return (
            <a
              href={e.link}
              key={e.id}
              className=" bg-blueSans flex-1 text-center rounded text-lg py-2 shadow-btn"
            >
              <i className="bx bxs-download"></i> Download {e.size} GB
            </a>
          );
        })}
      </div>
      <div className="w-full flex justify-between items-center">
        <h3 className="text-xl font-bold">
          Related {data.length === 1 ? "slivait" : "slivaits"}
        </h3>
        <h3 className="text-xl font-bold">
          {data.length} - {data.length === 1 ? "slivait" : "slivaits"}
        </h3>
      </div>
      <div className="w-full gap-5 resGit">
        {data.map((e) => {
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

export default Details;
