import React, { useState } from "react";
import logoprocont from "../assets/procont-logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/treeview", label: "TreeView" },
    { to: "/table", label: "Table" },
    { to: "/calc", label: "Calc" },
  ];

  return (
    <>
      <nav className="bg-blue-500 py-2">
        <div className="mx-auto container flex justify-between items-center">
          <section className="section-nav-responsive flex justify-center items-center w-60 ">
            <ul className="flex flex-row gap-5 font-semibold text-white">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-blue-300 transition delay-150 duration-300 ease-in-out cursor-pointer"
                >
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="flex justify-center items-center w-40 md:w-60">
            <img className="h-10" src={logoprocont} alt="Logo Procont" />
          </section>
          <section className="section-nav-responsive flex justify-center items-center w-60">
            <button className="border-2 border-blue-100 text-white font-semibold rounded-2xl py-1 px-3 text-xs transition delay-150 duration-300 ease-in-out hover:scale-125 hover:bg-white hover:text-black">
              <Link to="/login">LOGIN</Link>
            </button>
          </section>
          <section className="lg:hidden flex justify-center items-center ">
            <button
              onClick={toggleMenu}
              className="m-2 rounded-full h-8 w-8 flex justify-center items-center transition delay-150 duration-300 ease-in-out focus:bg-white"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </section>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="menuOpenHamburger lg:hidden fixed top-0 left-0 h-screen w-9/12 bg-blue-500 z-50">
          <section className="flex flex-col p-5 gap-5 ">
            <img className="w-40" src={logoprocont} alt="Logo Procont" />

            <button className="border-2 border-blue-100 text-white font-semibold rounded-2xl py-1 px-3 text-xs transition delay-150 duration-300 ease-in-out hover:scale-125 hover:bg-white hover:text-black">
              <Link to="/login">LOGIN</Link>
            </button>

            <ul className="flex flex-col gap-5 font-semibold text-white">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-blue-300 transition delay-150 duration-300 ease-in-out cursor-pointer"
                >
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </>
  );
};

export default NavBar;
