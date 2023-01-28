import React, { FunctionComponent } from "react";

type Nodes = {
  name: string;
  path: string;
};

type Props = {
  nodes: Nodes[];
};

const Header: FunctionComponent<Props> = ({ nodes }) => {
  const navItems = nodes.filter((node) => node.path !== "/");

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

        <ul className="flex space-x-6 text-sm underline items-center">
          {navItems &&
            navItems.map((node) => {
              return (
                <li>
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
