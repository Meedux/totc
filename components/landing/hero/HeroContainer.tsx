import React from "react";

const HeroContainer = () => {
  return (
    <>
      <div className="mt-[7rem] pb-[8rem]">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-3">
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

            <div className="flex items-center justify-between w-[60%]">
              <button className="bg-[#7ECBCC] text-[24px] text-white font-bold py-2 px-5 rounded-full">
                Join for free
              </button>

              <div className="flex justify-between items-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#7ECBCC]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
                <p className="text-white ml-2">Watch how it works</p>
              </div>
            </div>
          </div>

          <div className="col-span-3">asd</div>
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
