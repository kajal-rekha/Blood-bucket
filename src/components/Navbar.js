import { Link } from "react-router-dom";
import { BsDropletFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="navbar-bg bg-gray-400 h-20 flex justify-center items-center">
      <div className="navbar container mx-auto flex items-center justify-between">
        <div className="left flex flex-row">
          <span>
            <BsDropletFill className="text-red-500" />
          </span>
          <span className="text-2xl font-semibold text-red-500 capitalize">
            blood <span className="text-gray-100">bucket</span>{" "}
          </span>
        </div>
        <div className="right flex items-center gap-5 text-gray-100 font-semibold text-xl">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>
          <Link to="/process" className="nav-link">
            Process
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
