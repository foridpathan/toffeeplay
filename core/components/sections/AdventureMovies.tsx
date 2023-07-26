import Loading from "@/app/loading";
import { store } from "@/core/redux";
import { movieApi } from "@/core/redux/api/movies";
import { Suspense } from "react";
import MovieSection from "../movie";

export default async function AdventureMovies() {
  const param = "?limit=20&genre=Adventure";
  await store.dispatch(movieApi.endpoints.getMovies.initiate(param));
  const resData: any = store.getState().api.queries[`getMovies("${param}")`];

  return (
    <div className="my-8">
      <Suspense fallback={<Loading />}>
        <MovieSection
          title="Adventure Movies"
          data={resData?.data?.results}
          style="two"
        />
      </Suspense>
    </div>
  );
}
