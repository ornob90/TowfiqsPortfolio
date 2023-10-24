import React, { useState } from "react";
import Container from "../../components/shared/Container";
import DropDown from "./DropDown";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const navLinks = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

  const [activeLink, setActiveLink] = useState("ABOUT");
  const [menu, setMenu] = useState(false);

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="sticky top-0 left-0 bg-nav">
      <Container className="flex justify-between items-center text-[14px] font-bold   ">
        <img
          src="/assets/logo.png"
          alt=""
          className="w-[33%] sm:w-[25%] md:w-[18%] lg:w-[13%] lg:py-0 py-3"
        />
        <ul className="flex w-[60%] justify-end items-center text-white ">
          {navLinks.map((link) => (
            <li
              key={link}
              onClick={() => handleActiveLink(link)}
              className={`${
                activeLink === link ? "bg-secondary text-white" : ""
              } py-6 px-6 cursor-pointer hidden lg:block`}
            >
              {link}
            </li>
          ))}
          <li className="px-6 hidden lg:block">
            <input type="checkbox" className="toggle " checked />
          </li>
          <li className="lg:hidden w-max" onClick={() => setMenu(!menu)}>
            {menu ? (
              <MdOutlineClose className="text-xl text-white" />
            ) : (
              <CiMenuFries className="text-xl text-white" />
            )}
          </li>
        </ul>

        <DropDown navLinks={navLinks} menu={menu} />
      </Container>
    </nav>
  );
};

export default Navbar;
