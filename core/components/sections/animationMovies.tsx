import { store } from "@/core/redux";
import { movieApi } from "@/core/redux/api/movies";
import MovieSection from "../movie";

export default async function AnimationMovies() {
  const param = "?limit=20&genre=Animation";
  await store.dispatch(movieApi.endpoints.getMovies.initiate(param));
  const resData: any = store.getState().api.queries[`getMovies("${param}")`];

  return (
    <div className="my-8">
      <MovieSection
        title="Animation Movies"
        data={resData?.data?.results}
        style="one"
      />
    </div>
  );
}
