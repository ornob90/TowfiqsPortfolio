import React, { useState } from "react";
import Container from "../../components/shared/Container";

const Navbar = () => {
  const navLinks = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

  const [activeLink, setActiveLink] = useState("ABOUT");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="sticky top-0 left-0 bg-nav">
      <Container className="flex justify-between items-center text-[17px] font-bold   ">
        <img
          src="/assets/logo.png"
          alt=""
          className="w-[33%] sm:w-[25%] md:w-[18%] lg:w-[13%]"
        />
        <ul className="flex w-[60%] justify-end items-center text-white">
          {navLinks.map((link) => (
            <li
              key={link}
              onClick={() => handleActiveLink(link)}
              className={`${
                activeLink === link ? "bg-secondary text-white" : ""
              } py-6 px-6 cursor-pointer`}
            >
              {link}
            </li>
          ))}
          <li className="px-6">
            <input type="checkbox" className="toggle " checked />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
