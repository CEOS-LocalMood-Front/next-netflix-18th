import getMovies from "@/app/main/queries/getMovies";
import { getMoviePoster } from "@/app/main/utils/get-movie-poster";

export const MainImage = async ({ data }: any) => {
  return (
    <div className="z-0">
      <img
        src={getMoviePoster(data[0].poster_path)}
        alt="poster"
        className="relative w-full h-[41.5rem]"
      />
      <div className="absolute top-0 w-full h-[42rem] z-[10] bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
  );
};

export default MainImage;
