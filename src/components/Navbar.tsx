import { FaGlobe, FaUserCircle, FaBars } from "react-icons/fa";
import { MainLogo } from "../assets/Airbnb.tsx";




const Navbar = () => {
  return (
    <nav className="relative flex flex-col items-center px-4 py-4 border-b shadow-sm">
      {/* Top Section: Logo & Nav Items */}
      <div className="w-full flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <div className="h-7 w-7">
            <MainLogo />
          </div>
          <span className="text-red-500 font-bold text-xl">airbnb</span>
        </div>

        {/* Middle: Links */}
        <div className="  pl-28  flex  justify-center">
          <p className="font-cereal font-semibold cursor-pointer px-4 py-2 rounded-full hover:bg-gray-100">
            Stays
          </p>
          <p className="cursor-pointer px-4 py-2 rounded-full hover:bg-gray-100 font-cereal font-semibold">
            Experiences
          </p>
        </div>

        {/* Right: Icons & User Menu */}
        <div className="flex gap-5 items-center">
          <span className="font-cereal text-sm cursor-pointer px-4 py-2 rounded-full hover:bg-gray-100">
            Airbnb your Home
          </span>

          <FaGlobe className="text-4xl hover:bg-gray-100 px-1 py-2 rounded-full" />
          <div className="flex gap-2 items-center border p-2 rounded-full">
            <FaBars className="text-2xl" />
            <FaUserCircle className="text-lg" />
          </div>
        </div>
      </div>

      {/* Search Bar: Placed Below, But Above the Border
      <div className="mt-4 w-full flex justify-center">
        <SearchBar />
      </div> */}
    </nav>
  );
};

export default Navbar;
