import Navbar from "@/components/landing/Navbar";
import AboutContainer from "@/components/landing/about/AboutContainer";
import AchievementContainer from "@/components/landing/achievements/AchievementContainer";
import HeroContainer from "@/components/landing/hero/HeroContainer";
import OverviewContainer from "@/components/landing/overview/OverviewContainer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
      <div className="w-full">
        <Navbar />
        <HeroContainer />
        <AchievementContainer />
        <OverviewContainer />
        <AboutContainer />
      </div>
    </div>
    </>
  );
}
