import { searchAxiosInstance } from "@/app/common/libs/axios";
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
  pageParam,
}: {
  searchText: string;
  pageParam: number;
}): Promise<SearchMovieResponse> {
  const response = await searchAxiosInstance.get<SearchMovieResponse>(
    "/search/movie",
    {
      params: {
        query: searchText,
        page: pageParam,
      },
    }
  );
  const searchFetchedMovies = response.data;
  return searchFetchedMovies;
}

export default getSearchMovies;
