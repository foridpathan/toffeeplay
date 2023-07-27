"use client";
import { FC } from "react";
import Slider from "react-slick";
import { Card1, Card2, Card3, Card4 } from "./cards";
import { MovieProps } from "./type";

type Props = {
  data: MovieProps[];
  title: string;
  style: "one" | "two" | "three" | "four";
};

const MovieSection: FC<Props> = ({ title, style = "one", data }) => {
  var settings = {
    dots: false,
    infinite: true,
    // pauseOnHover: false,
    // autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="z-10 relative">
      <h1 className="text-3xl dark:text-gray-500 text-gray-800 mb-5 mx-4">
        {title}
      </h1>
      <Slider {...settings}>
        {data?.length > 0 &&
          data.map((movie, i) => (
            <div key={i}>
              {style === "one" && <Card1 movie={movie} />}
              {style === "two" && <Card2 movie={movie} />}
              {style === "three" && <Card3 movie={movie} />}
              {style === "three" && <Card4 movie={movie} />}
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MovieSection;
