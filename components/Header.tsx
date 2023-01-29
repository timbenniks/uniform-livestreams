import React, { useState, FunctionComponent } from "react";

type Nodes = {
  name: string;
  path: string;
};

type Props = {
  nodes: Nodes[];
};

const Header: FunctionComponent<Props> = ({ nodes }) => {
  const navItems = nodes.filter((node) => node.path !== "/");
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0">
      <div className="flex justify-between items-center px-8 xl:px-0 max-w-7xl m-auto h-20">
        <a href="/">
          <img
            src="./logo.png"
            alt="Uniform"
            width="130"
            height="34"
            className="block"
          />
        </a>

        <button
          className="w-12 h-12 relative bg-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block absolute h-0.5 w-6 bg-black transform transition duration-500 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-black transform transition duration-500 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-black transform transition duration-500 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>

        <ul
          className={`lg:flex space-x-6 text-sm underline items-center  ${
            open
              ? "absolute w-full top-20 left-0 flex flex-col bg-black p-4 overflow-auto"
              : "hidden"
          }`}
        >
          {navItems &&
            navItems.map((node) => {
              return (
                <li
                  key={node.name}
                  className={open ? "py-4 text-xl" : "p-auto text-sm"}
                >
                  <a
                    title={node.name}
                    href={node.path}
                    className={node.path === "/become-a-guest" ? "cta" : ""}
                  >
                    {node.name}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
