import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const HeroContainer = () => {
  return (
    <>

      <div className="pt-[10rem] pb-[2rem] bg-[#49BBBD] overflow-hidden w-full rounded-b-[20%] ">
        <div className="container">
          <div className="grid grid-cols-6 gap-4">
            <div className="md:col-span-3 col-span-6 mt-[0rem]">
              <div className="flex flex-col items-start justify-center">
                <p className="text-[54px] mb-5 text-white font-bold">
                  <span className="text-orange-400">Studying </span> Online is now
                  much easier
                </p>
                <p className="text-[24px] mb-5 text-white font-light">
                  TOTC is an interesting platform that will teach you in more an
                  interactive way
                </p>
              </div>

              <div className="flex items-center justify-between w-[70%]">
                <button className="bg-[#7ECBCC] font-poppins text-[24px] text-white font-bold py-2 px-5 rounded-full">
                  Join for free
                </button>

                <div className="flex justify-between items-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                    <FaPlay className="text-[#49BBBD] text-center ml-1" size={24} />
                  </div>
                  <p className="text-[#252641] text-[24px] ml-2">Watch how it works</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 col-span-6 ">
                <div className="relative -mt-[10rem] -bottom-[2rem] right-6">
                  <Image src={"/girl.png"} width={544} height={292} alt="Girl" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
