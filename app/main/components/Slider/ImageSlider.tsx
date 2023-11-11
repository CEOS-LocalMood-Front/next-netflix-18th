"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getMoviePoster } from "../../utils/get-movie-poster";
import { CustomSliderProps } from "../../state/slider-state";

export default function ImageSlider<T>({
  data,
}: Omit<CustomSliderProps<T>, "text" | "className">) {
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="z-0 p">
      <Slider {...settings}>
        {data.map((movie) => (
          <>
            <img
              key={movie.id}
              alt="poster"
              className="relative w-full h-[41.5rem]"
              src={getMoviePoster(movie.poster_path)}
            />
            <div className="absolute top-0 w-full h-[60rem] z-[10] bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </>
        ))}
      </Slider>
    </div>
  );
}
