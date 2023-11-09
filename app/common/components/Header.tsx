"use client";
import Image from "next/image";
import netflixlogo from "/public/netflix_logo.svg";

export const Header = () => {
  return (
    <div className="flex z-100 items-center justify-center justify-around mt-6 h-8rem w-37.5rem pr-6 header-text text-menu-main bg-background-main">
      <Image src={netflixlogo} width="57" height="57" alt="logo" />
      <a className="hover:text-button-main cursor-pointer transition duration-300 ease-in-out">
        TV Shows
      </a>
      <a className="hover:text-button-main cursor-pointer transition duration-300 ease-in-out">
        Movies
      </a>
      <a className="hover:text-button-main cursor-pointer transition duration-300 ease-in-out">
        My List
      </a>
    </div>
  );
};

export default Header;
