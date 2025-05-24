import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#050D14]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="bg-gray-200">
        <h1>this is footer</h1>
      </div>
    </div>
  );
};

export default MainLayout;
