import React from "react";

const AboutContainer = () => {
  return (
    <>
      <div className="container mt-[10rem]">
        <div className="flex justify-center items-center flex-col mb-[4rem]">
          <p className="text-center text-[2.3rem] text-[#2F327D] font-bold mb-5">
            What is <span className="text-[#00CBB8]">TOTC?</span>
          </p>
          <p className="text-24 text-[#696984] lg:w-[60rem] font-light text-center">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>


        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 md:col-span-3 bg-[url('/about-1.png')] rounded-3xl bg-cover h-[25rem]">
            <div className="bg-[#171B41]/50 p-5 rounded-3xl h-full flex flex-col justify-center items-center">
              <h1 className="text-[7px] sm:text-[12px] md:text-[20px] lg:text-[32px] text-white font-semibold font-poppins">For Instructors</h1>
              <button className="py-3 px-7 text-white rounded-3xl border-white border">Start a class today</button>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 bg-[url('/about-2.png')] rounded-3xl bg-cover h-[25rem]">
            <div className="bg-[#171B41]/50 p-5 rounded-3xl h-full flex flex-col justify-center items-center">
              <h1 className="text-[7px] sm:text-[12px] md:text-[20px] lg:text-[32px] text-white font-semibold font-poppins">For Instructors</h1>
              <button className="py-3 px-7 text-white rounded-3xl bg-[#23BDEE]">Start a class today</button>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContainer;
