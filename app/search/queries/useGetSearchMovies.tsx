import { searchAxiosInstance } from "@/app/common/libs/axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IMovie } from "@/app/main/queries/dto/get-popular-movie";

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

export async function getSearchMovies({
  searchText,
  api,
  pageParam,
}: {
  searchText?: string;
  api: string;
  pageParam: number;
}): Promise<SearchMovieResponse> {
  const response = await searchAxiosInstance.get<SearchMovieResponse>(api, {
    params: {
      query: searchText,
      page: pageParam,
    },
  });
  const searchFetchedMovies = response.data;
  return searchFetchedMovies;
}

export default function useGetSearchMovies({
  searchText,
  api,
}: {
  searchText?: string;
  api: string;
}) {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["getSearchMovie", api, searchText],
    queryFn: ({ pageParam = 1 }) =>
      getSearchMovies({
        searchText,
        api,
        pageParam,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.page !== lastPage.total_pages ? lastPage.page + 1 : undefined,
    suspense: true,
  });

  const rawMovieData = data?.pages.map((page) => page.results).flat() || [];
  const getByFarMovieData: IMovie[] = rawMovieData;

  return {
    getByFarMovieData,
    hasNextPage,
    fetchNextPage,
  };
}
