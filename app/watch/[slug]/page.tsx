import MovieDetails from "@/core/components/Screens/watch/details";
import MovieReview from "@/core/components/Screens/watch/review";
import { store } from "@/core/redux";
import { movieApi } from "@/core/redux/api/movies";

export default async function MovieDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const param = `${params.slug}/?info=base_info`;
  await store.dispatch(movieApi.endpoints.getMovie.initiate(param));
  const resData: any = store.getState().api.queries[`getMovie("${param}")`];

  return (
    <>
      <MovieDetails movie={resData?.data?.results} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieReview />
      </div>
    </>
  );
}
