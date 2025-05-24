import Navbar from "@/components/Navbar/Navbar";
import ScrollToTop from "@/hooks/ScrollToTop";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#171c35] text-white">
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
