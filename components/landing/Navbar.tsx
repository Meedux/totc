import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <nav className="bg-transparent flex items-center justify-between">
            <div className="flex items-center w-[40%]">
                TOTC LOGO PLACEHOLDER
            </div>

            <div className="flex items-center justify-between w-[50%]">
                <Link href="#" className="text-white">Home</Link>
                <Link href="#" className="text-white">Courses</Link>
                <Link href="#" className="text-white">Careers</Link>
                <Link href="#" className="text-white">Blog</Link>
                <Link href="#" className="text-white">About Us</Link>
                
                <div className="w-[25%] flex items-center justify-between">
                    <button className="bg-white text-black font-bold py-2 px-5 rounded-full">
                        Login
                    </button>
                    <button className="bg-[#7ECBCC] text-white font-bold py-2 px-5 rounded-full">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar