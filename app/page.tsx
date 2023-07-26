import AdventureMovies from "@/core/components/Screens/home/sections/AdventureMovies";
import LatestMovies from "@/core/components/Screens/home/sections/LatestMovies";
import AnimationMovies from "@/core/components/Screens/home/sections/animationMovies";
import BannerSection from "@/core/components/Screens/home/sections/bannerSection";
import Genres from "@/core/components/Screens/home/sections/genres";
import TopSeries from "@/core/components/Screens/home/sections/topSeries";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <Genres />
      <AnimationMovies />
      <AdventureMovies />
      <LatestMovies />
      <TopSeries />
    </main>
  );
}
