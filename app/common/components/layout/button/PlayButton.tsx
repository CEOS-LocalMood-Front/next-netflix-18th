import { ReactNode } from "react";
import { ImPlay3 } from "react-icons/im";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  className?: string;
}

export default function PlayButton({ className }: ButtonProps) {
  return (
    <div
      className={twMerge(
        "flex items-center text-center justify-center gap-x-4 bg-button-main rounded-[0.56rem] text-background-main hover:bg-hoverColor-main transition duration-100 ease-in-out cursor-pointer",
        className
      )}
    >
      <ImPlay3 style={{ fontSize: "2.4rem" }} />
      <div className="playButton-text">Play</div>
    </div>
  );
}
