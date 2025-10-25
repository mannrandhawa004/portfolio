"use client"
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
const HeroSection = () => {
    return (
        <>
            <div className="home w-full h-screen flex justify-center items-center flex-col ">
                <div>
                    <h1 className='text-[8vw] tracking-tighter font-bold bg-gradient-to-r from-white to-indigo-800 bg-clip-text text-transparent '>Manpreet Singh</h1>

                </div>
                {/* heading */}
                <div>
                    <span className='text-zinc-200 text-4xl tracking-tighter line-clamp-1 font-semibold' >
                        {"MERN Stack Developer"}
                    </span>
                </div>
                {/* buttons */}
                <div className="flex items-center gap-4 mt-6 font-semibold ">
                    <Link href="/#contact" passHref>
                        <button
                            className="bg-white px-8 py-3 text-black rounded-full cursor-pointer"
                        >
                            Contact Me
                        </button>
                    </Link>

                    <button className="bg-transparent px-8 py-3 text-white border rounded-full cursor-pointer">
                        <a href="/mann_resume.pdf" download="Manpreet_Singh_Resume.pdf">
                            My Resume
                        </a>
                    </button>
                </div>
                {/* links */}
                <div className="flex items-center gap-4 mt-10">

                    <Link href="https://github.com/mannrandhawa004" target="_blank" rel="noopener noreferrer">
                        <FaGithub className=" text-white hover:text-gray-400  transition"  size={36}/>
                    </Link>


                    <Link href="https://www.linkedin.com/in/manpreet-singh004" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className=" text-white hover:text-blue-500 transition" size={36}/>
                    </Link>
                    <Link href="https://instagram.com/mann._04" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className=" text-white hover:text-pink-500 transition" size={36}/>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default HeroSection