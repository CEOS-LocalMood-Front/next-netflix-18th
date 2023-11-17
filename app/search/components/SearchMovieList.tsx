import { BiPlayCircle } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroller";
import { IMovie } from "@/app/main/queries/dto/get-popular-movie";
import { getSearchMovies } from "../queries/useGetSearchMovies";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";

type SearchMovieListProps = {
  searchText: string;
};

interface DateRange {
  maximum: string;
  minimum: string;
}
interface SearchMovieResponse {
  dates: DateRange;
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export default function SearchMovieList({ searchText }: SearchMovieListProps) {
  const { data, hasNextPage, fetchNextPage } =
    useInfiniteQuery<SearchMovieResponse>(
      ["getSearchMovie", searchText],
      ({ pageParam = 1 }) => getSearchMovies({ searchText, pageParam }),
      {
        getNextPageParam: (lastPage) =>
          lastPage.page !== lastPage.total_pages
            ? lastPage.page + 1
            : undefined,
      }
    );

  const [searchData, setSearchData] = useState<{
    getByFarMovieData: IMovie[];
    hasNextPage: boolean | undefined;
    fetchNextPage: () => void;
  }>({
    getByFarMovieData: [],
    hasNextPage: false,
    fetchNextPage: () => {},
  });

  useEffect(() => {
    if (data) {
      const rawMovieData = data?.pages.map((page) => page.results).flat() || [];
      setSearchData({
        getByFarMovieData: rawMovieData,
        hasNextPage: hasNextPage,
        fetchNextPage: fetchNextPage,
      });
    }
  }, [data, hasNextPage, fetchNextPage]);

  return (
    <InfiniteScroll
      hasMore={searchData.hasNextPage}
      loadMore={searchData.fetchNextPage}
    >
      {searchData.getByFarMovieData &&
        searchData.getByFarMovieData.map((data: IMovie) => (
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
