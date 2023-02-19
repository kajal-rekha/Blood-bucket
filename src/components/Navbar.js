import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-bg bg-gray-400 h-20 flex justify-center items-center ">
      <div className="navbar container mx-auto flex items-center justify-between ">
        <div className="left flex flex-row">
          <span className="text-2xl font-semibold text-red-500 capitalize">
            blood <span className="text-gray-100">bucket</span>{" "}
          </span>
        </div>
        <div className="right flex items-center gap-5 text-gray-100 font-medium text-lg ">
          <Link to="/" className="nav-link hover:text-red-500 duration-500">
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link hover:text-red-700 duration-300"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="nav-link hover:text-red-700 duration-300"
          >
            Gallery
          </Link>
          <Link
            to="/process"
            className="nav-link hover:text-red-700 duration-300"
          >
            Process
          </Link>
          <Link to="/blog" className="nav-link hover:text-red-700 duration-300">
            Blog
          </Link>
          <Link
            to="/contact"
            className="nav-link hover:text-red-700 duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
