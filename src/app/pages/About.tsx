"use client"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">


        <div className="flex-shrink-0">
          <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            <Image
              src="/profile_pic.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>


        <div className="flex-1 space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-indigo-700/80 bg-clip-text text-transparent">
            {"Hi, I'm Mann"}
          </h1>
          <p className="text-gray-300 leading-relaxed">
            I build scalable, modern applications with a strong focus on clean architecture, delightful UX, and performance. My toolkit spans JavaScript, React,Node.js, Tailwind CSS, and RestfulAPI— bringing ideas to life from concept to production with robust APIs and smooth interfaces..
          </p>
          <p className="text-gray-300 leading-relaxed">
            I love working on projects that challenge me to learn new technologies and improve my skills. My goal is to deliver clean, maintainable, and efficient code while building engaging user experiences.
          </p>

          <div className="flex gap-4 mt-4">
            <Link href="/#contact" passHref>
              <button
                className="bg-white px-8 py-3 text-black rounded-full cursor-pointer"
              >
                Contact Me
              </button>
            </Link>


          </div>
        </div>
      </div>

    </section>
  )
}
