"use client"
import React, { useEffect, useState } from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {



  return (
    <footer className="relative w-full py-20 mt-24 flex flex-col items-center justify-center bg-gradient-to-t from-indigo-900 to-black text-white overflow-hidden">      

      {/* Glassmorphic Container */}
      <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/15 shadow-2xl rounded-3xl px-12 py-16 w-full max-w-5xl flex flex-col items-center justify-center text-center">
        {/* Name */}
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8 drop-shadow-xl">
          Manpreet Singh
        </h2>
        <span className="italic mb-3">{'\"Success is when preparation meets opportunity\"'}.</span>

        {/* Social Media Icons */}
        <div className="flex items-center gap-10 text-gray-200 mb-6">
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"

          >
            <FaGithub size={36} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={36} />
          </motion.a>

          <motion.a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={36} />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-gray-300 text-base font-medium tracking-wide">
          © {new Date().getFullYear()} Manpreet Singh. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer