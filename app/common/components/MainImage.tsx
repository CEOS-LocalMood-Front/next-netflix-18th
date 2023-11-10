"use client";

import { getMoviePoster } from "@/app/main/utils/get-movie-poster";
import { useEffect, useState } from "react";

export const MainImage = ({ data }: any) => {
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setImgIndex((prev) => prev + 1);
    }, 4500);
  }, []);
  return (
    <div className="z-0">
      <img
        src={getMoviePoster(data[imgIndex].poster_path)}
        alt="poster"
        className="relative w-full h-[41.5rem]"
      />
      <div className="absolute top-0 w-full h-[42rem] z-[10] bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
  );
};

export default MainImage;
