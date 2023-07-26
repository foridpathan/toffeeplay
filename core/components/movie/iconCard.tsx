"use client";
import Link from "next/link";
import { RiMovie2Line } from "react-icons/ri";
import Slider from "react-slick";

const IconCard = ({ data }: { data: [string] }) => {
  var settings = {
    dots: false,
    infinite: false,
    pauseOnHover: false,
    autoplay: true,
    speed: 600,
    slidesToShow: 8,
    slidesToScroll: 8,
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
    <Slider {...settings}>
      {data?.length > 0 &&
        data.map(
          (title: string, i: number) =>
            title !== null && (
              <div key={i}>
                <Link
                  href="/"
                  className="rounded-full p-4 min-h-20 flex items-center justify-center flex-col gap-2 mx-4 bg-gray-800 text-white">
                  <RiMovie2Line className="text-4xl" />
                  {title}
                </Link>
              </div>
            )
        )}
    </Slider>
  );
};

export default IconCard;
