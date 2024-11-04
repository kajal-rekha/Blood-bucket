import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const handleOpen = () => {
    setToggle(false);
  };

  return (
    <div>
      <div className="h-20 fixed top-0 left-0 right-0 bg-black z-[99] text-gray-400 flex items-center">

        <div className="container flex justify-between items-center mx-auto">
            <div className="left flex flex-row">
          <span className="text-2xl font-semibold text-red-500 capitalize">
            blood <span className="text-gray-100">bucket</span>{" "}
          </span>
        </div>

          <div className="hidden md:flex space-x-4 text-white/80">
            <Link to="/" className="nav-link hover:text-red-500 duration-500">
              Home
            </Link>
            <Link to="/about" className="nav-link hover:text-red-700 duration-300">
              About
            </Link>
            <Link to="/gallery" className="nav-link hover:text-red-700 duration-300">
              Gallery
            </Link>
            <Link to="/process" className="nav-link hover:text-red-700 duration-300">
              Process
            </Link>
            <Link to="/blog" className="nav-link hover:text-red-700 duration-300">
              Blog
            </Link>
            <Link to="/contact" className="nav-link hover:text-red-700 duration-300">
              Contact
            </Link>
          </div>

          {/* Toggle button for mobile view */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={handleToggle}
              className="inline-flex items-center justify-center focus:outline-none text-xl text-white z-[99]"
            >
              {toggle ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {toggle && (
        <div className="md:hidden w-screen h-screen fixed z-[1000] bg-gray-900 top-20 left-0 flex text-white justify-center items-center">
          <div onClick={handleOpen} className="space-y-6 text-center flex flex-col ">
            <Link to="/" className="nav-link hover:text-red-500 duration-500" onClick={handleOpen}>
              Home
            </Link>
            <Link to="/about" className="nav-link hover:text-red-700 duration-300" onClick={handleOpen}>
              About
            </Link>
            <Link to="/gallery" className="nav-link hover:text-red-700 duration-300" onClick={handleOpen}>
              Gallery
            </Link>
            <Link to="/process" className="nav-link hover:text-red-700 duration-300" onClick={handleOpen}>
              Process
            </Link>
            <Link to="/blog" className="nav-link hover:text-red-700 duration-300" onClick={handleOpen}>
              Blog
            </Link>
            <Link to="/contact" className="nav-link hover:text-red-700 duration-300" onClick={handleOpen}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
