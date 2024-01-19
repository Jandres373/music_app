import React from "react";
import { NavbarProps } from ".";

import content from "./content.json";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav id="nav_container" className="flex justify-between p-5 border border-red-500 border-dashed">
      <ul id="links" className="flex gap-2">
        <li className="hover:underline hover:animate-pulse underline-offset-8 cursor-pointer">MUSIC</li>
        <li className="hover:underline hover:animate-pulse underline-offset-8 cursor-pointer">LIVE</li>
        <li className="hover:underline hover:animate-pulse underline-offset-8 cursor-pointer">PODCAST</li>
      </ul>
      <div id="search_bar">search bar</div>
      <div id="icons_profile_container" className="flex gap-2">
        <div id="icons">icons</div>
        <div id="profile_card">profile card</div>
      </div>
    </nav>
  );
};

export default Navbar;
