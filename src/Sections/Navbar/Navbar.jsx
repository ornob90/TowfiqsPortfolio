import React, { useState } from "react";
import Container from "../../components/shared/Container";
import DropDown from "./DropDown";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

  const [activeLink, setActiveLink] = useState("ABOUT");
  const [menu, setMenu] = useState(false);

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="sticky top-0 left-0 bg-nav z-10">
      <Container className="flex justify-between items-center text-[14px] font-generalBold  ">
        <img
          src="/assets/logo.png"
          alt=""
          className="w-[33%] sm:w-[25%] md:w-[18%] lg:w-[13%] lg:py-0 py-3"
        />
        <ul className="flex w-[60%] justify-end items-center text-white ">
          {navLinks.map((link) => (
            <Link
              key={link}
              spy={true}
              smooth={true}
              offset={link === "SKILLS" ? -70 : -100}
              duration={500}
              onClick={() => handleActiveLink(link)}
              to={link.toLowerCase()}
              className={`${
                activeLink === link ? "bg-secondary text-white" : ""
              } py-6 px-6 cursor-pointer hidden lg:block`}
            >
              {link}
            </Link>
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

        <DropDown navLinks={navLinks} menu={menu} setMenu={setMenu} />
      </Container>
    </nav>
  );
};

export default Navbar;
