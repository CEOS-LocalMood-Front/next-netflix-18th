import { axiosInstance } from "@/app/common/libs/axios";
import InfiniteScroll from "react-infinite-scroller";
import { IMovie } from "@/app/main/queries/dto/get-popular-movie";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import MovieList from "./MovieList";

export default function GeneralMovieList() {

    const getNowPlayingMovies = async ({
        pageParam = 1,
      }: {
        pageParam: number;
      }) => {
        const response = await axiosInstance.get("/now_playing", {
          params: { page: pageParam },
        });
    
        console.log(response);
        const fetchedMovies = response.data;
        console.log(fetchedMovies);
        return fetchedMovies;
      };
    
      const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery(
        ["pageParam"],
        ({ pageParam = 1 }) => getNowPlayingMovies({pageParam}),
        {
          getNextPageParam: (lastPage) => {
            const currentPage=lastPage?.[lastPage.length-1]?page||1;
            return currentPage+1;
          },
        }
      );
      return (
        <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
          <MovieList data={data} />
        </InfiniteScroll>
      );
    }
   