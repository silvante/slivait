import React from "react";
import me from "../assets/mardonbek.jpg";

const Aside = () => {
  return (
    <aside className="border-white/15 border-r w-60 py-3 stiky top-[72px] flex-col justify-between h-[calc(100vh-72px)] hidden lg:flex">
      <div>
        <p className="w-full px-5 font-bold text-xl mb-3">Categories 🚀</p>
        <div>
          <p className="hover:bg-white/10 py-3 w-full px-5 transition-all">
            Front-end
          </p>
          <p className="hover:bg-white/10 py-3 w-full px-5 transition-all">
            Back-end
          </p>
          <p className="hover:bg-white/10 py-3 w-full px-5 transition-all">
            Design
          </p>
          <p className="hover:bg-white/10 py-3 w-full px-5 transition-all">
            3D redactors
          </p>
          <p className="hover:bg-white/10 py-3 w-full px-5 transition-all">
            Frameworks
          </p>
          <p className="hover:bg-white/10 py-3 w-full px-5 transition-all">
            Cloud apps
          </p>
          <p className="hover:bg-white/10 py-3 w-full px-5 transition-all">
            Android
          </p>
          <p className="hover:bg-white/10 py-3 w-full px-5 transition-all">
            IOs apps
          </p>
          <p className="hover:bg-white/10 py-3 w-full px-5 transition-all">
            Mern dev
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 px-5 py-3 border-white/15 border-t w-full bottom-0 left-0">
        <img
          src={me}
          alt="my pfp"
          width={"50px"}
          className="rounded-full border"
        />
        <p>Mr Khamidov</p>
      </div>
    </aside>
  );
};

export default Aside;
