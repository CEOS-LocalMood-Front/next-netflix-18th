import useGetAllMovies, {
  getNowPlayingMovies,
} from "@/app/search/queries/useGetAllMovies";
import { BiPlayCircle } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroller";
import { IMovie } from "@/app/main/queries/dto/get-popular-movie";
import Link from "next/link";

export default function MovieList() {
  const { getByFarMovieData, hasNextPage, fetchNextPage } = useGetAllMovies();

  return (
    <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
      {getByFarMovieData &&
        getByFarMovieData.map((data: IMovie) => (
          <div
            key={data.id}
            className="flex bg-searchBar-main items-center mb-[0.3rem]"
          >
            <img
              alt="movieImg"
              src={
                data.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
                  : `/netflix.png`
              }
              className="w-[14.6rem] h-[7.6rem] object-cover"
            />
            <div className="flex justify-between items-center w-full px-[1.4rem]">
              <div className="text-menu-main search-movie-title">
                {data.title}
              </div>
              <Link
                href={`/detail/${data.id}`}
                className="w-[2.8rem] ml-[0.5rem] cursor-pointer"
              >
                <BiPlayCircle style={{ fontSize: "2.8rem", color: "FFFFFF" }} />
              </Link>
            </div>
          </div>
        ))}
    </InfiniteScroll>
  );
}
