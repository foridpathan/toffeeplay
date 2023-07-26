import { AiFillStar } from "react-icons/ai";

const MovieReview = () => {
  return (
    <div className="my-12">
      <div className="w-full flex sm:gap-8 gap-4 items-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 16 16"
          className="sm:w-6 sm:h-6 w-4 h-4 text-subMain"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"
          />
        </svg>
        <h2 className="sm:text-xl font-bold text-lg text-white">Reviews</h2>
      </div>
      <div className=" xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
        <div className="xl:col-span-2 w-full flex flex-col gap-8">
          <h3 className="text-xl text-white font-semibold">Review The</h3>
          <p className="text-sm leading-7 font-medium text-border">
            Write a review for this movie. It will be posted on this page. lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec
          </p>
          <div className="text-sm w-full">
            <label className="text-border font-semibold">Select Rating</label>
            <select className="w-full mt-2 px-6 py-4 text-white bg-main border border-border rounded">
              <option value={0}>0 - Poor</option>
              <option value={1}>1 - Fair</option>
              <option value={2}>2 - Good</option>
              <option value={3}>3 - Very Good</option>
              <option value={4}>4 - Excellent</option>
              <option value={5}>5 - Masterpiece</option>
            </select>
          </div>
          <div className="text-sm w-full">
            <label className="text-border font-semibold">Message</label>
            <textarea
              className="w-full h-40 mt-2 p-6 bg-main border border-border rounded"
              placeholder="Make it short and sweet...."
              defaultValue={""}
            />
          </div>
          <button className="bg-subMain text-white py-3 w-full flex-colo rounded">
            Submit
          </button>
        </div>
        <div className="col-span-3 flex flex-col gap-6">
          <h3 className="text-xl text-white font-semibold">Reviews (1)</h3>
          <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
            <div className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg">
              <div className="col-span-2 bg-main hidden md:block">
                <img
                  src="/assets/images/default.jpg"
                  alt="Tom Cruise"
                  className="w-full h-24 rounded-lg object-cover"
                />
              </div>
              <div className="col-span-7 flex flex-col gap-2">
                <h2 className="text-white">Tom Cruise</h2>
                <p className="text-xs leading-6 font-medium text-white">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                  eiusmod There are many variations of passages of lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
              <div className="col-span-3 flex items-center justify-center border-l border-border text-xs gap-1 text-star">
                <AiFillStar className="text-amber-500" />
                <AiFillStar className="text-amber-500" />
                <AiFillStar className="text-amber-500" />
                <AiFillStar className="text-amber-500" />
                <AiFillStar className="text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieReview;
