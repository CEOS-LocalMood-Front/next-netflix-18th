"use client";

import { twMerge } from "tailwind-merge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getMoviePoster } from "../../utils/get-movie-poster";
import { CustomSliderProps } from "../../state/slider-state";
import { useRouter } from "next/navigation";
import Image from "next/image";

//react-slick을 활용한 슬라이더 컴포넌트(확장성 고려한 제네릭 컴포넌트)
export default function CustomSlider<T>({
  type,
  text,
  data,
  className,
}: CustomSliderProps<T>) {
  const router = useRouter();
  const settings =
    type === "small"
      ? {
          arrows: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          swipeToSlide: true,
          responsive: [
            {
              breakpoint: 3000,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              },
            },
          ],
        }
      : {
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
    <div className={twMerge("bg-background-main", className)}>
      {text && (
        <div className="font-sub text-white mb-[1.4rem] pl-[1.1rem]">
          {text}
        </div>
      )}
      <Slider {...settings}>
        {data.map((movie) => (
          <div
            key={movie.id}
            onClick={() => router.push(`/detail/${movie.id}`)}
          >
            <div
              className={`${
                type === "small" ? "h-[16.1rem]" : " w-full h-[41.5rem]"
              } relative ${type === "small" ? "ml-[0.7rem]" : null}`}
            >
              <Image
                alt="포스터 사진"
                src={getMoviePoster(movie.poster_path)}
                sizes="(max-width:768px) 33vw (max-width:1024px) 25vw, 20vw "
                fill={true}
                priority
              />
            </div>

            {type === "big" && (
              <div className="absolute top-0 w-full h-[68rem] z-[10] bg-gradient-to-t from-black via-transparent to-transparent"></div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
