import Image from "next/image";
import defaultImage from "../../../public/assets/images/default.jpg";
import { MovieProps } from "./type";

type Props = {
  movie: MovieProps;
  className?: string;
  position?: number;
};

export const Card1 = ({ movie, position }: Props) => {
  return (
    <div className="rounded-lg relative shadow-lg mx-3">
      <Image
        src={movie?.primaryImage?.url || defaultImage}
        width={movie?.primaryImage?.width}
        height={movie?.primaryImage?.height}
        alt={movie?.titleText?.text}
        className="rounded"
      />
      <div className="absolute left-0 bottom-0 text-9xl font-bold text-stroke text-gray-500 opacity-90 leading-10 mb-8 -ml-8">
        {position}
      </div>
    </div>
  );
};

export const Card2 = ({ movie }: Props) => {
  return (
    <div className="rounded-lg relative shadow-lg mx-1 group/image-card overflow-hidden">
      <Image
        src={movie?.primaryImage?.url || defaultImage}
        width={movie?.primaryImage?.width}
        height={movie?.primaryImage?.height}
        alt={movie?.titleText?.text}
        className="transition-all ease-in-out delay-75 group-hover/image-card:scale-125 group-hover/image-card:relative group-hover/image-card:z-10"
      />
    </div>
  );
};

export const Card3 = ({ movie }: Props) => {
  return (
    <div className=" relative mx-1 group/image-card">
      <Image
        src={movie?.primaryImage?.url || defaultImage}
        width={movie?.primaryImage?.width}
        height={movie?.primaryImage?.height}
        alt={movie?.titleText?.text}
        className="transition-all shadow-lg ease-in-out delay-75 group-hover/image-card:scale-105 group-hover/image-card:relative 
          group-hover/image-card:z-10 group-hover/image-card:border group-hover/image-card:border-white rounded-full"
      />
    </div>
  );
};
export const Card4 = ({ movie, className = "" }: Props) => {
  return (
    <div className={`rounded-lg relative shadow-lg mx-3 ${className}`}>
      <Image
        src={movie?.primaryImage?.url || defaultImage}
        width={movie?.primaryImage?.width}
        height={movie?.primaryImage?.height}
        alt={movie?.titleText?.text}
      />
    </div>
  );
};
