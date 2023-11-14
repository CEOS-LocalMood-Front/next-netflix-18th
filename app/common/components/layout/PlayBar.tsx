import { LuPlus } from "react-icons/lu";
import { ImPlay3 } from "react-icons/im";
import { FiInfo } from "react-icons/fi";
import PlayButton from "./button/PlayButton";

export const PlayBar = () => {
  return (
    <div className="searchBar-text text-menu-main flex justify-center pt-[1.3rem] pb-[4.3rem]">
      <div className="flex w-[25.9rem] h-[4.5rem] justify-between items-center">
        <div className="flex flex-col items-center cursor-pointer">
          <LuPlus style={{ fontSize: "2.4rem" }} />
          <div className="mt-px">My List</div>
        </div>
        <PlayButton className="w-[11rem] h-[4.5rem]" />
        <div className="flex flex-col items-center cursor-pointer">
          <FiInfo style={{ fontSize: "2.2rem" }} />
          <div className="mt-px">Info</div>
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
