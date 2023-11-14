// 메인 페이지 슬라이더 데이터 상태
export interface getMainSliderMovieResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovie {
  poster_path: string | null;
  title: string;
  backdrop_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
