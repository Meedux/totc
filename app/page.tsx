import Navbar from "@/components/landing/Navbar";
import HeroContainer from "@/components/landing/hero/HeroContainer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
      <div className="w-full">
        <Navbar />
        <HeroContainer />
      </div>
    </div>
    </>
  );
}
