import React from "react";

const Report = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[800px] flex items-center">
        <form className="w-full space-y-5 flex flex-col items-center">
          <div className="w-[300px] text-center">
            <h2 className="text-2xl">REPORT</h2>
            <p className="text-white/50">You can send your oppinion or report me and I will read it and fix!</p>
          </div>
          <div className="w-full flex gap-5">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 flex bg-white/10 py-2 px-3 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Your email or telegram"
              className="flex-1 flex bg-white/10 py-2 px-3 rounded-md outline-none"
            />
          </div>
          <textarea
            className="w-full bg-white/10 py-2 px-3 rounded-md outline-none resize-none h-60"
            placeholder="About your report ..."
          ></textarea>
          <button className="bg-blueSans shadow-btn py-2 px-10 rounded-full mx-auto">
            Send report
          </button>
        </form>
      </div>
    </div>
  );
};

export default Report;
