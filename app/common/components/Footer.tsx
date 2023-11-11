"use client";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

export const Footer = () => {
  const FooterState = [
    {
      text: "Home",
      icon: BiHomeAlt2,
    },
    {
      text: "Search",
      icon: LuSearch,
    },
    {
      text: "Coming Soon",
      icon: MdOutlineVideoLibrary,
    },
    {
      text: "Downloads",
      icon: HiDownload,
    },
    {
      text: "More",
      icon: GiHamburgerMenu,
    },
  ];
  return (
    <div className="fixed inset-x-0 bottom-0 flex footer-text items-center justify-center pt-2 pb-2 bg-footerBackground-main text-footerIcon-main bg-background-main">
      {FooterState.map((state) => (
        <div className="w-1/5 flex flex-col text-center cursor-pointer items-center h-full">
          <state.icon style={{ fontSize: "2.4rem" }} />
          <div className="mt-px">{state.text}</div>
        </div>
      ))}
    </div>
  );
};
export default Footer;
