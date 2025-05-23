import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div>
        <h1 className="text-black underline bg-gray-200">hello world</h1>
      </div>
      <Outlet></Outlet>
      <div className="bg-gray-200">
        <h1>this is footer</h1>
      </div>
    </div>
  );
};

export default MainLayout;
