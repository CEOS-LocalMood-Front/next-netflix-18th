"use client";

import { twMerge } from "tailwind-merge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import { getMoviePoster } from "../../utils/get-movie-poster";
import { CustomSliderProps } from "../../state/slider-state";

//react-slick을 활용한 슬라이더 컴포넌트(확장성 고려한 제네릭 컴포넌트)
export default function CustomSlider<T>({
  text,
  data,
  className,
}: CustomSliderProps<T>) {
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className={twMerge("bg-background-main pl-[0.5rem]", className)}>
      <div className="font-sub text-white mb-[1.4rem] pl-[1.1rem]">{text}</div>
      <StyledSlider {...settings}>
        {data.map((movie) => (
          <img
            key={movie.id}
            className="h-[16.1rem] w-[16.1rem]"
            src={getMoviePoster(movie.poster_path)}
          />
        ))}
      </StyledSlider>
    </div>
  );
}

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding-left: 0.7rem;
  }
`;
