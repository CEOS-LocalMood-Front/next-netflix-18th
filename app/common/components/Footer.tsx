"use client";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export const Footer = () => {
  const FooterState = [
    {
      id: 0,
      text: "Home",
      icon: BiHomeAlt2,
      link: "/main",
    },
    {
      id: 1,
      text: "Search",
      icon: LuSearch,
      link: "/search",
    },
    {
      id: 2,
      text: "Coming Soon",
      icon: MdOutlineVideoLibrary,
    },
    {
      id: 3,
      text: "Downloads",
      icon: HiDownload,
    },
    {
      id: 4,
      text: "More",
      icon: GiHamburgerMenu,
      link: "/main",
    },
  ];
  return (
    <div className="fixed inset-x-0 bottom-0 flex footer-text items-center justify-center pt-2 pb-2 bg-footerBackground-main text-footerIcon-main bg-background-main">
      {FooterState.map((state) => (
        <Link
          href={state.link || "/"}
          key={state.id}
          className="w-1/5 flex flex-col text-center cursor-pointer items-center h-full"
        >
          <state.icon style={{ fontSize: "2.4rem" }} />
          <div className="mt-px">{state.text}</div>
        </Link>
      ))}
    </div>
  );
};
export default Footer;
