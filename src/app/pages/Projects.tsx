"use client";
import type { JSX } from "react";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiPostgresql,
  SiExpress,
  SiStripe,
  SiGooglecloud,
  SiMongodb
} from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
  "Next.js": <SiNextdotjs size={20} />,
  Tailwind: <SiTailwindcss size={20} />,
  React: <SiReact size={20} />,
  "Node.js": <SiNodedotjs size={20} />,
  Redux: <SiRedux size={20} />,
  PostgreSQL: <SiPostgresql size={20} />,
  Stripe: <SiStripe size={20} />,
  "Google Auth": <SiGooglecloud size={20} />,
  "Express.js": <SiExpress />,
  "MongoDB": <SiMongodb />
};

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);



  const projects = [
    {
      id: 1,
      title: "Scatch",
      description: "A comprehensive full-stack e-commerce platform designed for seamless shopping experiences. Features robust JWT & Google OAuth authentication, secure Stripe payment integration, and real-time inventory synchronization. Includes advanced role-based access control, allowing admins to efficiently manage products, orders, and user carts while providing customers with instant email notifications and a beautifully responsive UI.",
      image: "/Scatch.png",
      video: "",
      tech: ["React", "Node.js", "Express.js", "Tailwind", "Stripe", "Google Auth", "MongoDB"],
      liveUrl: "https://scatch-bice.vercel.app/",
      githubUrl: "https://github.com/mannrandhawa004/scatch"
    },
    {
      id: 2,
      title: "ochi.design",
      description: "An interactive, visually striking front-end application focused on modern web design principles. Built primarily with React and deeply integrated with GSAP to deliver complex, high-performance scroll-based animations. The project demonstrates advanced DOM manipulation, custom cursor interactions, and fluid page transitions, creating an engaging and highly polished user experience from start to finish.",
      image: "/ochi.png",
      video: "",
      tech: ["React", "Tailwind", "GSAP", "Locomotive"],
      liveUrl: "https://designochi.vercel.app/",
      githubUrl: "https://github.com/yourusername`/crypto-dashboard"
    },
    {
      id: 3,
      title: "AI Resume Builder",
      description: "A powerful, dynamic resume creation tool engineered to help users build professional CVs effortlessly. Features a highly interactive real-time preview interface and instant client-side PDF generation without server-side rendering delays. Integrated with ImageKit for optimized, lightning-fast cloud storage of user assets, all wrapped in a sleek, responsive design powered by Tailwind CSS.",
      image: "/ai_resume.png",
      video: "",
      tech: ["React", "Tailwind", "GSAP", "Redux", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://ai-resume-builder-beta-pink.vercel.app/",
      githubUrl: "https://github.com/mannrandhawa004/ai-resume-builder"
    },
    {
      id: 4,
      title: "StarSync",
      description: "A feature-rich MERN-stack SaaS platform tailored for astrology consultations and services. Seamlessly integrates LiveKit to provide high-quality, real-time video streaming for one-on-one astrological readings. Features a secure, Stripe-powered digital wallet system for managing user balances and transactions, complete with an intuitive dashboard for both astrologers and clients to track appointments and history.",
      image: "/astro.png",
      video: "",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "LiveKit", "Stripe", "Tailwind"],
      liveUrl: "https://astro-lilac-chi.vercel.app/",
      githubUrl: "https://github.com/mannrandhawa004/astro"
    }
  ];


  useEffect(() => {
    projectRefs.current.forEach((project, i) => {
      if (project) {
        project.style.opacity = i === 0 ? "1" : "0";
        project.style.transform = i === 0 ? "scale(1)" : "scale(0.9) translateY(100px)";
        project.style.zIndex = i === 0 ? "2" : "1";
      }
    });
  }, []);

  const animateToProject = useCallback(
    (newIndex: number, direction: "up" | "down" = "down") => {
      if (newIndex < 0 || newIndex >= projects.length) return;

      setIsAnimating(true);
      const currentEl = projectRefs.current[currentProject];
      const nextEl = projectRefs.current[newIndex];
      if (!currentEl || !nextEl) return;

      const isDown = direction === "down";

      currentEl.style.transition = "all 0.8s cubic-bezier(0.65, 0, 0.35, 1)";
      currentEl.style.opacity = "0";
      currentEl.style.transform = `scale(0.9) translateY(${isDown ? "-120px" : "120px"}) rotateX(${isDown ? "20deg" : "-20deg"
        })`;
      currentEl.style.zIndex = "1";

      nextEl.style.transition = "none";
      nextEl.style.opacity = "0";
      nextEl.style.transform = `scale(0.9) translateY(${isDown ? "120px" : "-120px"}) rotateX(${isDown ? "-20deg" : "20deg"
        })`;
      nextEl.style.zIndex = "2";

      setTimeout(() => {
        nextEl.style.transition = "all 1s cubic-bezier(0.34, 1.56, 0.64, 1)";
        nextEl.style.opacity = "1";
        nextEl.style.transform = "scale(1) translateY(0) rotateX(0deg)";
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }, 80);

      setCurrentProject(newIndex);
    },
    [currentProject, projects.length]
  );



  const handlePagination = useCallback(
    (type: "next" | "prev") => {
      if (isAnimating) return;
      if (type === "next" && currentProject < projects.length - 1) {
        animateToProject(currentProject + 1, "down");
      } else if (type === "prev" && currentProject > 0) {
        animateToProject(currentProject - 1, "up");
      }
    },
    [isAnimating, currentProject, projects.length, animateToProject]
  );

  // ✅ Properly typed keyboard event
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isAnimating) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (currentProject < projects.length - 1) {
          e.preventDefault();
          handlePagination("next");
        }
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (currentProject > 0) {
          e.preventDefault();
          handlePagination("prev");
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isAnimating, currentProject, projects.length, handlePagination]);



  const progress = ((currentProject + 1) / projects.length) * 100;

  return (
    <div
      id="work"
      ref={containerRef}
      className="min-h-screen bg-black text-gray-100 overflow-hidden relative select-none"
    >
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="text-center pt-24 pb-12 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-indigo-700/80 bg-clip-text text-transparent">
            My Works
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 italic font-light">
            Explore my curated collection of projects
          </p>

        </div>

        {/* Projects */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12 relative cursor-pointer">
          <div className="max-w-7xl w-[90vw] h-[550px] relative" style={{ perspective: "1400px" }}>
            {projects.map((p, i) => (
              <div
                key={p.id}
                ref={(el) => {
                  if (el) projectRefs.current[i] = el;
                }}
                className="absolute inset-0 will-change-transform"
                style={{
                  pointerEvents: currentProject === i ? "auto" : "none"
                }}
              >
                <div className="group bg-black backdrop-blur-3xl rounded-xl overflow-hidden h-full w-full shadow-xl flex flex-col items-center justify-center p-8 md:p-10 transition-all">
                  <div className="absolute z-10 mt-6 left-4 bottom-3">
                    <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-2">
                      {p.title}
                    </h2>
                    <p className="text-white text-sm md:text-xl mb-4 w-3/4 tracking-tighter leading-none">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8 cursor-pointer">
                      {p.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 bg-zinc-900/70 text-white rounded-full text-sm font-medium flex items-center gap-2"
                        >
                          {techIcons[t]} {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-white text-black font-semibold py-3 px-8 rounded-full transition-all hover:scale-105"
                    >
                      View Project
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-2 transition-transform duration-300 ease-out"
                      />
                    </a>
                  </div>
                  <div className="absolute inset-0 z-0">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-fit opacity-50"
                    />

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-6 pb-16 relative">
          <button
            onClick={() => handlePagination("prev")}
            disabled={currentProject === 0}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold border border-gray-600 transition-all hover:bg-white hover:text-black ${currentProject === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
          >
            <ChevronLeft size={18} /> Prev
          </button>
          <button
            onClick={() => handlePagination("next")}
            disabled={currentProject === projects.length - 1}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold border border-gray-600 transition-all hover:bg-white hover:text-black ${currentProject === projects.length - 1 ? "opacity-40 cursor-not-allowed" : ""
              }`}
          >
            Next <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-0 right-6 md:left-8 text-gray-300 font-mono text-base">
            <span className="text-indigo-400 text-2xl font-bold">
              {String(currentProject + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 text-gray-400">/</span>
            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>
        </div>



        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800/60 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-400 to-white transition-all duration-700 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Projects;
