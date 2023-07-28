import { getRandomRgbColor, rgbDataURL } from "@/core/helpers/imageBlur";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import defaultImage from "../../../public/assets/images/default.jpg";
import { MovieProps } from "./type";

type Props = {
  movie: MovieProps;
  className?: string;
};

export const Card1 = ({ movie, className }: Props) => {
  return (
    <div
      className={twMerge(
        `rounded-lg relative shadow-lg mx-3 h-full overflow-hidden border border-transparent bg-main 
    hover:shadow-2xl hover:border-red-800 group/card-hover`,
        className
      )}>
      <Link
        href={`/watch/${movie.id}`}
        scroll
        shallow
        className="relative rounded h-72 block">
        <>
          <Image
            data-cy="poster"
            src={movie?.primaryImage?.url || defaultImage}
            alt={
              movie?.primaryImage?.caption?.plainText || movie.titleText.text
            }
            placeholder="blur"
            blurDataURL={rgbDataURL(...getRandomRgbColor())}
            fill
            sizes={`(max-width: 768px) 450px, (max-width: 1200px) ${
              movie?.primaryImage?.width > 900
                ? 780
                : movie?.primaryImage?.width
            }px, ${
              movie?.primaryImage?.width > 1600
                ? 1024
                : movie?.primaryImage?.width
            }px`}
            loading="lazy"
          />
        </>
      </Link>
      <div className="p-2">
        <Link href={`/watch/${movie.id}`} scroll shallow>
          <h3
            data-cy="title"
            className="text-lg truncate text-white hover:text-rose-700">
            {movie.titleText.text}
          </h3>
        </Link>
        <div className="flex text-sm items-center justify-between text-gray-500">
          <div className="flex items-center">
            <p data-cy="year">{movie.releaseYear.year} </p>
            <RxDotFilled />
            <p data-cy="runtime">{movie?.runtime?.seconds / 60} min </p>
          </div>
          <div className="flex items-center">
            <AiFillStar />{" "}
            <p data-cy="rating">{movie?.ratingsSummary?.aggregateRating} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card2 = ({ movie }: Props) => {
  return (
    <div className="rounded-lg relative shadow-lg mx-1 group/image-card overflow-hidden">
      <div
        className="relative rounded h-72 transition flex items-center justify-center
        group-hover/image-card:after:block group-hover/image-card:after:absolute group-hover/image-card:after:w-full group-hover/image-card:after:h-full group-hover/image-card:after:bg-slate-900 group-hover/image-card:after:bg-opacity-50">
        <>
          <Image
            src={movie?.primaryImage?.url || defaultImage}
            fill
            placeholder="blur"
            sizes={`(max-width: 768px) 450px, (max-width: 1200px) ${
              movie?.primaryImage?.width > 900
                ? 780
                : movie?.primaryImage?.width
            }px, ${
              movie?.primaryImage?.width > 1600
                ? 1024
                : movie?.primaryImage?.width
            }px`}
            loading="lazy"
            blurDataURL={rgbDataURL(...getRandomRgbColor())}
            alt={
              movie?.primaryImage?.caption?.plainText || movie.titleText.text
            }
            className="transition-all ease-in-out delay-75 group-hover/image-card:scale-125"
          />
        </>
        <div className="z-10 relative transition delay-75 scale-0 group-hover/image-card:scale-100">
          <Link
            prefetch
            href={`/watch/${movie.id}`}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-red-700">
            <BsFillPlayFill className="fill-white w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};
