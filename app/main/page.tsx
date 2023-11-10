import CustomSlider from "./components/Slider/CustomSlider";
import getMovies from "./queries/getMovies";
import { getPopularMovieResponse } from "./queries/dto/get-popular-movie";
import MainImage from "../common/components/MainImage";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import PlayBar from "../common/components/PlayBar";

export default async function Main() {
  const sliderInfo = [
    {
      text: "Popular on Netflix",
      url: "https://api.themoviedb.org/3/movie/popular",
    },
    {
      text: "Now Playing",
      url: "https://api.themoviedb.org/3/movie/now_playing",
    },
    {
      text: "Top Rated",
      url: "https://api.themoviedb.org/3/movie/top_rated",
    },
    {
      text: "Upcoming Contents",
      url: "https://api.themoviedb.org/3/movie/upcoming",
    },
  ];
  return (
    <div className="bg-background-main">
      <Header />
      <MainImage data={await getMovies(sliderInfo[1].url)} />
      <PlayBar />
      {sliderInfo.map(async (slider) => (
        <CustomSlider
          text={slider.text}
          data={await getMovies(slider.url)}
          className="mt-[2.2rem]"
        />
      ))}
      <Footer />
    </div>
  );
}
