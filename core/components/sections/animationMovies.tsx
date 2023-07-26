import MovieSection from "../movie";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/titles/?limit=20&genre=Animation`,
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

export default async function AnimationMovies() {
  const data = await getData();
  return (
    <div className="my-8">
      <MovieSection title="Animation Movies" data={data?.results} style="one" />
    </div>
  );
}
