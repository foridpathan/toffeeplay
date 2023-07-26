import { store } from "@/core/redux";
import { genreApi } from "@/core/redux/api/genres";
import IconCard from "../../../movie/iconCard";

export default async function Genres() {
  await store.dispatch(genreApi.endpoints.getGenres.initiate(undefined));
  const resData: any = store.getState().api.queries["getGenres(undefined)"];
  return (
    <div>
      <div className="z-10 relative pb-6">
        <h1 className="text-3xl dark:text-gray-500 text-gray-800 mb-5 px-6 pt-8">
          Genres
        </h1>
        <IconCard data={(resData?.data && resData?.data?.results) || []} />
      </div>
    </div>
  );
}
