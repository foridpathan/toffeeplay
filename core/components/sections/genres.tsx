import { store } from "@/core/redux";
import { genreApi } from "@/core/redux/api/genres";
import IconCard from "../movie/iconCard";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/titles/utils/genres`,
    {
      headers: { "X-RapidAPI-Key": process.env.NEXT_PUBLIC_ACCESS_TOKEN || "" },
    }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log("Failed to fetch data");
  }

  return res.json();
}

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
