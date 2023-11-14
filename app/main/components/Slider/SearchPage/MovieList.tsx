import { axiosInstance } from "@/app/common/libs/axios";
import { IMovie } from "@/app/main/queries/dto/get-popular-movie";
import { useEffect, useState } from "react";
import { BiPlayCircle } from "react-icons/bi";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  const getNowPlayingMovies = async () => {
    try {
      const response = await axiosInstance.get("/now_playing");
      const fetchedMovies = response.data.results;
      setMovies(fetchedMovies);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <ul>
      {movies.map((movie: IMovie) => (
        <div
          key={movie.id}
          className="flex bg-searchBar-main items-center mb-[0.3rem]"
        >
          <img
            alt="movieImg"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            className="w-[14.6rem] h-[7.6rem] object-cover"
          />
          <div className="flex justify-between items-center w-full px-[1.4rem]">
            <div className="text-menu-main search-movie-title">
              {movie.title}
            </div>
            <BiPlayCircle style={{ fontSize: "2.8rem", color: "FFFFFF" }} />
          </div>
        </div>
      ))}
    </ul>
  );
}
