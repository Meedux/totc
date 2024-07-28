import React from "react";

const SecondAboutContainer = () => {
  return (
    <>
      <div className="container mt-[10rem]">
        <div className="grid grid-cols-6 gap-[2rem] h-[32rem]">
          <div className="col-span-6 md:col-span-3 flex justify-center items-center">
            <div className="flex justify-start items-center flex-col mb-[4rem]">
              <p className="text-start text-[2.3rem] text-[#2F327D] font-bold mb-5">
                Everything you can do in a physical classroom,
                <span className="text-[#00CBB8]"> you can do with TOTC</span>
              </p>
              <p className="text-24 text-[#696984] font-light text-start">
                TOTC’s school management software helps traditional and online
                schools manage scheduling, attendance, payments and virtual
                classrooms all in one secure cloud-based system.
              </p>
            </div>
          </div>

          <div className="relative col-span-6 md:col-span-3 h-[29.5rem] rounded-3xl z-50">
            <img
              src="/fake-video.svg"
              alt="Card Image"
              className="absolute inset-0 h-full w-full object-cover rounded-3xl z-10"
            />
            <div className="absolute inset-0 h-[138px] w-[138px] bg-[#23BDEE] rounded-3xl z-0 transform -translate-x-6 -translate-y-7"></div>
            <div className="absolute bottom-0 right-0 h-[231px] w-[231px] bg-[#33EFA0] rounded-3xl z-0 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondAboutContainer;
