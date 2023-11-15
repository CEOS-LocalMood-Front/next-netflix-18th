import { axiosInstance } from "@/app/common/libs/axios";
import { useInfiniteQuery } from "@tanstack/react-query";

export async function getNowPlayingMovies({
  pageParam,
}: {
  pageParam: number;
}) {
  const response = await axiosInstance.get<any>("/now_playing", {
    params: { page: pageParam },
  });

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

  const getByFarMovieData: any =
    data?.pages.map((page) => page.results).flat() || null;

  return {
    getByFarMovieData,
    hasNextPage,
    fetchNextPage,
  };
}
