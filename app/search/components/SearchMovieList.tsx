import { BiPlayCircle } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroller";
import { IMovie } from "@/app/main/queries/dto/get-popular-movie";
import useGetSearchMovies from "../queries/useGetSearchMovies";

type SearchMovieListProps = {
  searchText: string;
};

export default function SearchMovieList({ searchText }: SearchMovieListProps) {
  const { getByFarMovieData, hasNextPage, fetchNextPage } = useGetSearchMovies({
    searchText,
  });

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
              <div className="w-[2.8rem] ml-[0.5rem]">
                <BiPlayCircle style={{ fontSize: "2.8rem", color: "FFFFFF" }} />
              </div>
            </div>
          </div>
        ))}
    </InfiniteScroll>
  );
}
