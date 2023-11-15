import { axiosInstance } from "@/app/common/libs/axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IMovie } from "@/app/main/queries/dto/get-popular-movie";

interface DateRange {
  maximum: string;
  minimum: string;
}

interface NowPlayingMoviesResponse {
  dates: DateRange;
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export async function getNowPlayingMovies({
  pageParam,
}: {
  pageParam: number;
}): Promise<NowPlayingMoviesResponse> {
  const response = await axiosInstance.get<NowPlayingMoviesResponse>(
    "/now_playing",
    {
      params: { page: pageParam },
    }
  );
  const fetchedMovies = response.data;
  return fetchedMovies;
}

export default function useGetAllMovies() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["getAllMovie"],
    queryFn: ({ pageParam = 1 }) =>
      getNowPlayingMovies({
        pageParam,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.page !== lastPage.total_pages ? lastPage.page + 1 : undefined,
  });

  const rawMovieData = data?.pages.map((page) => page.results).flat() || [];
  const getByFarMovieData: IMovie[] = rawMovieData;

  return {
    getByFarMovieData,
    hasNextPage,
    fetchNextPage,
  };
}
