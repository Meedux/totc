import Navbar from "@/components/landing/Navbar";
import AboutContainer from "@/components/landing/about/AboutContainer";
import SecondAboutContainer from "@/components/landing/about/SecondAboutContainer";
import AchievementContainer from "@/components/landing/achievements/AchievementContainer";
import FeaturesContainer from "@/components/landing/features/FeaturesContainer";
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
        <SecondAboutContainer />
        <FeaturesContainer />
      </div>
    </div>
    </>
  );
}
