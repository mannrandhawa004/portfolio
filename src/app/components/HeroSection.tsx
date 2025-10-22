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
                    <span className='text-zinc-200 text-3xl tracking-tighter line-clamp-1' >
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
                        <a href="/resume.pdf" download="Manpreet_Singh_Resume.pdf">
                            My Resume
                        </a>
                    </button>
                </div>
                {/* links */}
                <div className="flex items-center gap-4 mt-6">

                    <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-6 h-6 text-white hover:text-gray-400  transition" />
                    </Link>


                    <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6 text-white hover:text-blue-500 transition" />
                    </Link>
                    <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-6 h-6 text-white hover:text-pink-500 transition" />
                    </Link>
                </div>

            </div>
        </>
    )
}

export default HeroSection