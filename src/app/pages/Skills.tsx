import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiJavascript, SiTypescript, SiTailwindcss, SiMysql, SiRedux, SiMui ,SiRender,SiNetlify} from 'react-icons/si'
import { IoLogoVercel} from "react-icons/io5";
import { SparklesCore } from "../../components/ui/sparkles";
const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-sky-500" /> },
  { name: 'React Redux', icon: <SiRedux className="text-purple-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
  { name: 'MySql', icon: <SiMysql className="text-blue-500" /> },
  { name: 'MUI', icon: <SiMui className="text-blue-500" /> },
  { name: 'Vercel', icon: <IoLogoVercel className="text-black" /> },
  { name: 'Render', icon: <SiRender className="text-white" /> },
  { name: 'Netlify', icon: <SiNetlify className="text-cyan-400" /> }
]

const Skills: React.FC = () => {
  return (
    <div
      id='skills'
      className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md p-10">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className='py-4'>

        <h1 className='text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-indigo-700/80 bg-clip-text text-transparent mb-4'>My Skills</h1>
      </div>

      <span className='text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 italic font-light'>Modern Applications | Modern Technologies</span>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-4 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-2xl shadow-md hover:scale-105 hover:bg-gray-700 transition-transform duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

    </div>


  )
}

export default Skills
