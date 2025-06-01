'use client';

import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import IconButton from "../components/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export interface MenuProps {
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton
        type="tertiary"
        size="large"
        icon={<MenuIcon />}
        onClick={toggleMenu}
      />
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col bg-amber-100 border-r border-stone-900 w-full md:w-[30%] ${className}`}
        >
          <div className="flex items-start p-3 gap-2 border-b border-stone-900">
            <div className="flex flex-row gap-2 items-center justify-center">
              <IconButton
                type="tertiary"
                size="large"
                icon={<CloseIcon />}
                onClick={toggleMenu}
              />
            </div>
            <div className="text-stone-900 p-4 text-2xl items-left text-right font-sans font-medium">
              Menu
            </div>
          </div>
          <div className="flex flex-col w-full flex-1">
            <MenuItem
              to="/"
              title="Home"
              className="flex-1 w-full border-r-0 text-2xl border-stone-900"
            />
            <MenuItem
              to="/product"
              title="Products"
              className="flex-1 w-full border-r-0 text-2xl border-stone-900"
            />
            <MenuItem
              to="/case-study"
              title="Case Studies"
              className="flex-1 w-full text-2xl border-r-0"
            />
            <MenuItem
              to="/ideas"
              title="Ideas"
              className="flex-1 w-full text-2xl border-r-0"
            />
            <MenuItem
              to="/experiment"
              title="Experiments"
              className="flex-1 w-full text-2xl border-r-0"
            />
            <MenuItem
              to="/about-me"
              title="About Me"
              className="flex-1 w-full text-2xl border-r-0"
            />
            <MenuItem
              to="/docs"
              title="</docs>"
              className="flex-1 w-full text-2xl border-r-0"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
