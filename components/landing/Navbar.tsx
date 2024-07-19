import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#49BBBD] pt-3">
        <div className="container flex items-center justify-between">
          <div className="flex items-center w-[40%]">TOTC LOGO PLACEHOLDER</div>

          <div className="flex items-center justify-between w-[70%]">
            <Link href="#" className="text-white font-poppins font-extralight tracking-wider leading-8 text-[22px]">
              Home
            </Link>
            <Link href="#" className="text-white font-poppins font-extralight tracking-wider leading-8 text-[22px]">
              Courses
            </Link>
            <Link href="#" className="text-white font-poppins font-extralight tracking-wider leading-8 text-[22px]">
              Careers
            </Link>
            <Link href="#" className="text-white font-poppins font-extralight tracking-wider leading-8 text-[22px]">
              Blog
            </Link>
            <Link href="#" className="text-white font-poppins font-extralight tracking-wider leading-8 text-[22px]">
              About Us
            </Link>

            <div className="w-[25%] flex items-center justify-between">
              <button className="bg-white text-black font-bold py-2 px-5 rounded-full font-poppins text-[22px]">
                Login
              </button>
              <button className="bg-[#7ECBCC] text-white font-bold py-2 px-5 rounded-full font-poppins text-[22px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
