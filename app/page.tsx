import Navbar from "@/components/landing/Navbar";
import HeroContainer from "@/components/landing/hero/HeroContainer";

export default function Home() {
  return (
    <>
      <div className="bg-[#49BBBD] rounded-b-full">
        <div className="container w-full pt-5">
          <Navbar />

          <HeroContainer />
        </div>
      </div>
    </>
  );
}
