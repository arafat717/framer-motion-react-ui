import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 justify-between h-24 items-center">
      <div>
        <h1 className="font-bold text-4xl">
          Event <span className="text-[#00FEE3]">360</span>
        </h1>
      </div>
      <div>
        <ul className="flex justify-end space-x-6 text-[16px]">
          <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
