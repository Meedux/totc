import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdAnalytics, MdMail } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";


const HeroContainer = () => {
  return (
    <>
      <div className="pt-[10rem] pb-[2rem] bg-[#49BBBD] overflow-hidden w-full rounded-b-[20%] ">
        <div className="container">
          <div className="grid grid-cols-6 gap-4">
            <div className="md:col-span-3 col-span-6 mt-[0rem]">
              <div className="flex flex-col items-start justify-center">
                <p className="text-[54px] mb-5 text-white font-bold">
                  <span className="text-orange-400">Studying </span> Online is
                  now much easier
                </p>
                <p className="text-[24px] mb-5 text-white font-light">
                  TOTC is an interesting platform that will teach <br></br> you in more an
                  interactive way
                </p>
              </div>

              <div className="flex items-center justify-between w-[70%]">
                <button className="bg-[#7ECBCC] font-poppins text-[24px] text-white font-bold py-2 px-5 rounded-full">
                  Join for free
                </button>

                <div className="flex justify-between items-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                    <FaPlay
                      className="text-[#49BBBD] text-center ml-1"
                      size={24}
                    />
                  </div>
                  <p className="text-[#252641] text-[24px] ml-2">
                    Watch how it works
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 col-span-6 relative">
              <div className="relative -mt-[10rem] -bottom-[2rem] right-6">
                <Image src={"/girl.png"} width={544} height={292} alt="Girl" />
              </div>
              <div className="absolute top-0 right-[10rem]">
                <div className="bg-[#F3627C] shadow-md rounded-lg p-1">
                  <MdAnalytics className="text-white" size={47} />
                </div>
              </div>
              <div className="absolute top-[3.5rem] -left-[4rem]">
                <div className="bg-white/80 shadow-md rounded-xl px-4 py-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-[#23BDEE] rounded-lg mr-4">
                      <FaRegCalendarDays className="text-white" size={24} />
                    </div>

                    <div className="flex flex-col">
                      <p className="text-[1.2rem] font-nunito font-bold tracking-wide text-[#545567]">250k</p>
                      <p className="text-[1rem] font-nunito font-extralight tracking-wide text-[#545567]">Assisted Students</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[15rem] right-[8rem]">
                <div className="bg-white/90 shadow-md rounded-xl px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-[#F88C3D] rounded-lg mr-4">
                      <MdMail className="text-white" size={24} />
                    </div>

                    <div className="flex flex-col">
                      <p className="text-[1.2rem] font-nunito font-bold text-[#545567]">Congratulations</p>
                      <p className="text-[1rem] font-nunito font-light text-[#545567] tracking-wide">Your admission completed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[7rem] -left-[6rem]">
                <div className="bg-white/90 shadow-md rounded-xl px-4 py-3">
                  <div className="flex items-start justify-between">
                    <div className="relative p-2 bg-[url('/person.png')] bg-cover w-14 h-14 rounded-full mr-4">
                        <span className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full"></span>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-[1.2rem] font-nunito font-bold text-[#545567]">User Experience Class</p>
                      <p className="text-[1rem] font-nunito font-light text-[#545567] tracking-wide mb-2">Today at 12.00 PM</p>
                      <div className="flex items-center justify-start">
                        {/* A button */}
                        <button className="bg-[#D8587E] font-poppins w-[9rem] text-[16px] text-white font-bold py-2 px-5 rounded-full">
                          Join Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
