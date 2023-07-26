import AdventureMovies from "@/core/components/sections/AdventureMovies";
import AnimationMovies from "@/core/components/sections/animationMovies";
import BannerSection from "@/core/components/sections/bannerSection";
import Genres from "@/core/components/sections/genres";
import { store } from "@/core/redux";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <Genres />
      <AnimationMovies />
      <AdventureMovies />
    </main>
  );
}
