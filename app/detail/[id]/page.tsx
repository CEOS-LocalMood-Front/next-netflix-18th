import getMovieDetail from "./queries/getMovieDetail";
import { getMoviePoster } from "@/app/main/utils/get-movie-poster";
import PlayButton from "@/app/common/components/layout/button/PlayButton";

export default async function DetailMovie(props: any) {
  const movieId = props.params.id;
  const movieInfo = await getMovieDetail(`
  https://api.themoviedb.org/3/movie/${movieId}`);
  console.log(movieInfo);
  return (
    <div className="bg-background-main min-h-screen">
      <img
        className="w-full h-[41.5rem] "
        alt="영화 이미지"
        src={getMoviePoster(movieInfo.poster_path)}
      />
      <div className="absolute top-0 w-full h-[42rem] bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="px-[3.6rem] flex justify-center mt-[1.3rem]">
        <PlayButton className="w-[30.3rem] h-[4.5rem] " />
      </div>
      <div className="px-[3.2rem] mt-[3.2rem]">
        <div className="font-main text-white mb-[2.4rem]">Previews</div>
        <p className="text-white movie-detail-sub">{movieInfo.overview}</p>
      </div>
    </div>
  );
}
