import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex items-start flex-grow">
        <div className="sticky top-[72px]">
          <Aside />
        </div>
        <div className="flex justify-center flex-col flex-1">
          <Outlet />
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
