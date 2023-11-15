import { axiosInstance } from "@/app/common/libs/axios";
import { IMovie } from "@/app/main/queries/dto/get-popular-movie";
import useGetAllMovies, {
  getNowPlayingMovies,
} from "@/app/search/queries/useGetAllMovies";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BiPlayCircle } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroller";

export default function MovieList() {
  const { getByFarMovieData, hasNextPage, fetchNextPage } = useGetAllMovies();
  // const getNowPlayingMovies = async ({
  //   pageParam = 1,
  // }: {
  //   pageParam: number;
  // }) => {
  //   const response = await axiosInstance.get("/now_playing", {
  //     params: { page: pageParam },
  //   });

  //   console.log(response);
  //   const fetchedMovies = response.data;
  //   console.log(fetchedMovies);
  //   return fetchedMovies;
  // };

  // const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery(
  //   ["pageParam"],
  //   ({ pageParam = 1 }) => getNowPlayingMovies({pageParam}),
  //   {
  //     getNextPageParam: (lastPage) => {
  //       const currentPage=lastPage?.[lastPage.length-1]?page||1;
  //       return currentPage+1;
  //     },
  //   }
  // );

  return (
    <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
      {getByFarMovieData &&
        getByFarMovieData.map((data: any) => (
          <div
            key={data.id}
            className="flex bg-searchBar-main items-center mb-[0.3rem]"
          >
            <img
              alt="movieImg"
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              className="w-[14.6rem] h-[7.6rem] object-cover"
            />
            <div className="flex justify-between items-center w-full px-[1.4rem]">
              <div className="text-menu-main search-movie-title">
                {data.title}
              </div>
              <BiPlayCircle style={{ fontSize: "2.8rem", color: "FFFFFF" }} />
            </div>
          </div>
        ))}
    </InfiniteScroll>
  );
}
