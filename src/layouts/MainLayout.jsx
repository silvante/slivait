import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Aside from "../components/Aside";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <Aside />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
