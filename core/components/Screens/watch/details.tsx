import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { BsClock, BsShareFill } from "react-icons/bs";
import { FaPlay, FaRegCalendarAlt } from "react-icons/fa";
import { MovieProps } from "../../movie/type";

const MovieDetails = ({ movie }: { movie: MovieProps }) => {
  console.log(movie);
  return (
    <div className="w-full xl:h-screen relative text-white">
      <Image
        src={movie?.primaryImage?.url}
        fill
        alt={movie?.primaryImage?.caption?.plainText || movie?.titleText?.text}
        className="w-full hidden xl:inline-block h-full object-cover"
      />
      <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
        <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
            <Image
              src={movie?.primaryImage?.url}
              width={movie?.primaryImage?.width}
              height={movie?.primaryImage?.height}
              alt={
                movie?.primaryImage?.caption?.plainText ||
                movie?.titleText?.text
              }
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-10">
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                {movie?.titleText?.text}
              </h1>
              <div className="flex items-center gap-4 font-medium text-dryGray">
                <div className="flex-colo bg-subMain text-xs px-2 py-1">
                  {movie?.titleType?.text}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    {movie?.genres?.genres.map((f) => f.text).toString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt className="text-subMain" />
                  <span className="text-sm font-medium">
                    {movie?.releaseYear?.year}
                  </span>
                </div>
                {movie?.runtime?.seconds && (
                  <div className="flex items-center gap-2">
                    <BsClock className="text-subMain" />
                    <span className="text-sm font-medium">
                      {movie?.runtime?.seconds
                        ? movie?.runtime?.seconds / 60 / 60
                        : 0}
                      hr
                    </span>
                  </div>
                )}
              </div>
              <p className="text-white text-sm leading-7">
                {movie?.plot?.plotText?.plainText}
              </p>
              <div className="flex items-center justify-between gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                <div className="flex-none flex flex-col border-r border-border pr-3">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white bg-opacity-20">
                    <BsShareFill />
                  </button>
                </div>
                <div className="flex-1 flex-colo font-medium text-sm">
                  <p>
                    Language :{" "}
                    <span className="ml-2 truncate">
                      {movie?.plot?.language?.id}
                    </span>
                  </p>
                </div>
                <div className="flex-1 flex justify-center items-center font-medium text-sm">
                  <a
                    className="bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full 
                    flex items-center justify-center gap-4 w-full sm:py-3"
                    href="/watch/The Conjuring">
                    <FaPlay />
                    Watch
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
              <button className="md:w-1/4 w-full relative flex items-center justify-center bg-subMain hover:bg-transparent border-2 border-subMain transitions md:h-64 h-20 rounded font-medium">
                <div className="flex items-center justify-center gap-6 text-md uppercase tracking-widest absolute md:rotate-90">
                  Download <BiDownload className="-rotate-90" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
