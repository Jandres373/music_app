import React from "react";
import content from "./content.json";
import { NavbarProps } from ".";
import { ProfileCard, SearchBar } from "./client";
import { Icons } from "./client/Icons";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav
      id="nav_container"
      className="flex justify-between items-center p-5"
    >
      <ul id="links" className="flex gap-2">
        {content.links.map((link) => (
          <li
            key={link.id}
            className="hover:underline hover:animate-pulse underline-offset-8 cursor-pointer"
          >
            {link.displayName}
          </li>
        ))}
      </ul>
      <SearchBar />
      <div id="icons_profile_container" className="flex gap-2 items-center">
        <Icons />
        <ProfileCard />
      </div>
    </nav>
  );
};

export default Navbar;
