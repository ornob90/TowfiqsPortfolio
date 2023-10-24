import React from "react";
import { CiMenuFries } from "react-icons/ci";
import Container from "../../components/shared/Container";

const DropDown = ({ navLinks, menu }) => {
  return (
    <div
      className={`lg:hidden absolute  w-[100vw] min-h-[200px] bg-white ${
        menu ? "top-12 left-0" : "top-12 -left-[100%] "
      } duration-300 `}
    >
      <Container className="pb-3">
        <p className="flex justify-between py-4">
          <input type="checkbox" className="toggle " checked />
          <CiMenuFries className="text-xl text-white" />
        </p>

        <ul>
          {navLinks.map((link) => (
            <li key={link} className="pb-4 pt-2 border-b  border-b-black">
              {link}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default DropDown;
