import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import { FaCommentAlt } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-7 py-4 shadow-lg">
      <h2 className="logo text-3xl tracking-widest flex items-center gap-1">Hamza<span className="text-purple-700 text-4xl">.</span></h2>
      <div className="links__wrapper flex items-center w-full">
        <div className="ml-4 flex gap-6 font-normal justify-center flex-grow">
          <Link
            to="home"
            className="hover:font-medium cursor-pointer hover:text-purple-600"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            to="about"
            className="hover:font-medium cursor-pointer hover:text-purple-600"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            to="services"
            className="hover:font-medium cursor-pointer hover:text-purple-600"
            smooth={true}
            duration={500}
          >
            Services
          </Link>
          <Link
            to="portfolio"
            className="hover:font-medium cursor-pointer hover:text-purple-600"
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </div>
        <Link
          to="contact"
          className="contact rounded-full font-medium cursor-pointer text-white px-6 py-2 shadow-lg hover:shadow-xl tracking-widest flex justify-center items-center gap-2"
          style={{ backgroundColor: "#663390" }}
          smooth={true}
          duration={500}
        >
          <FaCommentAlt />
          Contact
        </Link>
      </div>
      {/* <div className="mobile__menu flex flex-col items-center justify-center gap-2 w-full">
        <div className="ml-4 flex flex-col gap-6 font-normal justify-center flex-grow">
          <Link
            to="/#hero"
            className="hover:font-medium cursor-pointer hover:text-purple-600"
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="hover:font-medium cursor-pointer hover:text-purple-600"
          >
            About
          </Link>
          <Link
            to="/#services"
            className="hover:font-medium cursor-pointer hover:text-purple-600"
          >
            Services
          </Link>
          <Link
            to="/#portfolio"
            className="hover:font-medium cursor-pointer hover:text-purple-600"
          >
            Portfolio
          </Link>
        </div>
        <Link
          to="/#contact"
          className="contact rounded-full font-medium cursor-pointer text-white px-6 py-2 shadow-lg hover:shadow-xl tracking-widest flex justify-center items-center gap-2"
          style={{ backgroundColor: "#663390" }}
        >
          <FaCommentAlt/>Contact
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
