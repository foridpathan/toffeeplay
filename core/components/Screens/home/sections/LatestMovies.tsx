import Loading from "@/app/loading";
import { store } from "@/core/redux";
import { movieApi } from "@/core/redux/api/movies";
import { Suspense } from "react";
import { Card1 } from "../../../movie/cards";
import { MovieProps } from "../../../movie/type";

export default async function LatestMovies() {
  const param = "?limit=24&list=most_pop_movies&info=base_info";
  await store.dispatch(movieApi.endpoints.getMovies.initiate(param));
  const resData: any = store.getState().api.queries[`getMovies("${param}")`];

  return (
    <div className="my-8 container mx-auto">
      <h1 className="text-3xl dark:text-gray-500 text-gray-800 mb-5 mx-4">
        Most Top Movies
      </h1>

      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-4">
          {resData?.data &&
            resData?.data?.results?.length > 0 &&
            resData?.data?.results?.map((movie: MovieProps, i: number) => (
              <div key={i} className="">
                <Card1 movie={movie} className="m-0" />
              </div>
            ))}
        </div>
      </Suspense>
    </div>
  );
}
