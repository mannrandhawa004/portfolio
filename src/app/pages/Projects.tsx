"use client"
import React, { useEffect, useRef, useState, useCallback } from "react"
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import {
    SiNextdotjs,
    SiTailwindcss,
    SiReact,
    SiNodedotjs,
    SiRedux,
    SiPostgresql,
    SiExpress,
    SiStripe,
    SiGooglecloud 
} from "react-icons/si"

const techIcons = {
    "Next.js": <SiNextdotjs size={20} />,
    Tailwind: <SiTailwindcss size={20} />,
    React: <SiReact size={20} />,
    "Node.js": <SiNodedotjs size={20} />,
    Redux: <SiRedux size={20} />,
    PostgreSQL: <SiPostgresql size={20} />,
    Stripe: <SiStripe size={20} />,
    "Google Auth": <SiGooglecloud size={20} />,
    "Express.js": <SiExpress />,
}

const Projects = () => {
    const [currentProject, setCurrentProject] = useState(0)
    const containerRef = useRef(null)
    const projectRefs = useRef([])
    const [isAnimating, setIsAnimating] = useState(false)
    
    // Optimized scroll tracking
    const scrollAccumulator = useRef(0)
    const lastScrollTime = useRef(Date.now())
    const scrollTimeoutRef = useRef(null)
    const allowPageScroll = useRef(false)
    
    const projects = [
        {
            id: 1,
            title: "Url Shortner",
            description:
                "Built a full-stack URL shortener with JWT auth, RESTful APIs, click analytics, and responsive UI using React, Node.js, Express, MongoDB, Tailwind, and Redux Toolkit.",
            image: "/url1.png",
            tech: ["React", "Node.js", "Express.js", "Tailwind"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/yourusername/crypto-dashboard"
        },
        {
            id: 2,
            title: "Scatch",
            description:
                "Built a full-stack e-commerce platform with JWT & Google OAuth authentication, Stripe payments, role-based access, and live inventory sync. Implemented cart, product, and order management with email alerts and a responsive React + Tailwind UI",
            image: "/Scatch.png",
            tech: ["React", "Node.js", "Express.js", "Tailwind","Stripe","Google Auth"],
            liveUrl: "https://scatch-bice.vercel.app/",
            githubUrl: "https://github.com/yourusername/crypto-dashboard"
        },
        {
            id: 3,
            title: "ochi.design",
            description:
                "Interactive animated application using GSAP and React for scroll-based transitions.",
            image: "/ochi.png",
            tech: ["React", "Tailwind" ,"GSAP","Locomotive"],
            liveUrl: "https://designochi.vercel.app/",
            githubUrl: "https://github.com/yourusername/crypto-dashboard"
        }
    ]

    useEffect(() => {
        projectRefs.current.forEach((project, i) => {
            if (project) {
                project.style.opacity = i === 0 ? "1" : "0"
                project.style.transform = i === 0 ? "scale(1)" : "scale(0.9) translateY(100px)"
                project.style.zIndex = i === 0 ? "2" : "1"
            }
        })
    }, [])

    const animateToProject = useCallback((newIndex, direction = "down") => {
        if (newIndex < 0 || newIndex >= projects.length) return
        
        setIsAnimating(true)
        allowPageScroll.current = false
        const currentEl = projectRefs.current[currentProject]
        const nextEl = projectRefs.current[newIndex]
        if (!currentEl || !nextEl) return

        const isDown = direction === "down"

        currentEl.style.transition = "all 0.8s cubic-bezier(0.65, 0, 0.35, 1)"
        currentEl.style.opacity = "0"
        currentEl.style.transform = `scale(0.9) translateY(${isDown ? "-120px" : "120px"}) rotateX(${isDown ? "20deg" : "-20deg"})`
        currentEl.style.zIndex = "1"

        nextEl.style.transition = "none"
        nextEl.style.opacity = "0"
        nextEl.style.transform = `scale(0.9) translateY(${isDown ? "120px" : "-120px"}) rotateX(${isDown ? "-20deg" : "20deg"})`
        nextEl.style.zIndex = "2"

        setTimeout(() => {
            nextEl.style.transition = "all 1s cubic-bezier(0.34, 1.56, 0.64, 1)"
            nextEl.style.opacity = "1"
            nextEl.style.transform = "scale(1) translateY(0) rotateX(0deg)"
            setTimeout(() => {
                setIsAnimating(false)
                // If we're on the last slide, allow page scroll
                if (newIndex === projects.length - 1) {
                    allowPageScroll.current = true
                }
            }, 1000)
        }, 80)

        setCurrentProject(newIndex)
    }, [currentProject, projects.length])

    // Optimized wheel handler with page scroll support
    const handleWheel = useCallback((e) => {
        // If on last slide and scrolling down, allow natural page scroll
        if (currentProject === projects.length - 1 && e.deltaY > 0 && allowPageScroll.current) {
            return // Don't prevent default, allow page to scroll naturally
        }

        // If on first slide and scrolling up, allow natural page scroll
        if (currentProject === 0 && e.deltaY < 0) {
            return // Don't prevent default, allow page to scroll naturally
        }

        if (isAnimating) {
            e.preventDefault()
            return
        }

        // Prevent default for internal navigation
        e.preventDefault()

        const now = Date.now()
        const timeDelta = now - lastScrollTime.current
        lastScrollTime.current = now

        // Normalize scroll delta for different devices
        const normalizedDelta = e.deltaY
        
        // Apply velocity dampening for smoother control
        const velocityFactor = Math.min(timeDelta / 16, 1)
        scrollAccumulator.current += normalizedDelta * velocityFactor

        // Clear existing timeout
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current)
        }

        // Dynamic threshold based on scroll speed
        const baseThreshold = 100
        const speedMultiplier = timeDelta < 50 ? 1.5 : 1
        const threshold = baseThreshold * speedMultiplier

        // Check if we've exceeded threshold
        if (Math.abs(scrollAccumulator.current) >= threshold) {
            const direction = scrollAccumulator.current > 0 ? "down" : "up"
            const newIndex = direction === "down" ? currentProject + 1 : currentProject - 1

            if (newIndex >= 0 && newIndex < projects.length) {
                animateToProject(newIndex, direction)
                scrollAccumulator.current = 0
            } else {
                // Reset if we're at bounds
                scrollAccumulator.current = 0
            }
        } else {
            // Reset accumulator after brief pause
            scrollTimeoutRef.current = setTimeout(() => {
                scrollAccumulator.current = 0
            }, 200)
        }
    }, [isAnimating, currentProject, projects.length, animateToProject])

    const handlePagination = useCallback((type) => {
        if (isAnimating) return
        if (type === "next" && currentProject < projects.length - 1) {
            animateToProject(currentProject + 1, "down")
        } else if (type === "prev" && currentProject > 0) {
            animateToProject(currentProject - 1, "up")
        }
    }, [isAnimating, currentProject, projects.length, animateToProject])

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (isAnimating) return
            
            // Allow natural page scroll on last/first slides
            if (e.key === "ArrowDown" || e.key === "PageDown") {
                if (currentProject < projects.length - 1) {
                    e.preventDefault()
                    handlePagination("next")
                }
            }
            if (e.key === "ArrowUp" || e.key === "PageUp") {
                if (currentProject > 0) {
                    e.preventDefault()
                    handlePagination("prev")
                }
            }
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [isAnimating, currentProject, projects.length, handlePagination])

    // Touch support for mobile
    const touchStartY = useRef(0)
    const handleTouchStart = useCallback((e) => {
        touchStartY.current = e.touches[0].clientY
    }, [])

    const handleTouchEnd = useCallback((e) => {
        if (isAnimating) return
        const touchEndY = e.changedTouches[0].clientY
        const diff = touchStartY.current - touchEndY

        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentProject < projects.length - 1) {
                handlePagination("next")
            } else if (diff < 0 && currentProject > 0) {
                handlePagination("prev")
            }
        }
    }, [isAnimating, currentProject, projects.length, handlePagination])

    // Reset allowPageScroll when navigating away from last slide
    useEffect(() => {
        if (currentProject !== projects.length - 1) {
            allowPageScroll.current = false
        }
    }, [currentProject, projects.length])

    const progress = ((currentProject + 1) / projects.length) * 100

    return (
        <div
            id="work"
            ref={containerRef}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
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
                    {currentProject === 0 && (
                        <div className="mt-8 flex flex-col items-center animate-pulse">
                            <ChevronDown className="text-indigo-400" size={32} />
                            <span className="text-sm text-gray-400 mt-2">Scroll to discover</span>
                        </div>
                    )}
                </div>

                {/* Projects */}
                <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12 relative">
                    <div className="max-w-7xl w-[85vw] h-[500px] relative" style={{ perspective: "1400px" }}>
                        {projects.map((p, i) => (
                            <div
                                key={p.id}
                                ref={(el) => (projectRefs.current[i] = el)}
                                className="absolute inset-0 will-change-transform"
                                style={{
                                    pointerEvents: currentProject === i ? "auto" : "none"
                                }}
                            >
                                <div className="bg-black backdrop-blur-3xl border rounded-3xl overflow-hidden h-full w-full shadow-xl flex flex-col items-center justify-center p-8 md:p-10 transition-all">
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
                                            className="w-full h-full object-cover opacity-50 transition-opacity"
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
                        className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold border border-gray-600 transition-all hover:bg-white hover:text-black ${
                            currentProject === 0 ? "opacity-40 cursor-not-allowed" : ""
                        }`}
                    >
                        <ChevronLeft size={18} /> Prev
                    </button>
                    <button
                        onClick={() => handlePagination("next")}
                        disabled={currentProject === projects.length - 1}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold border border-gray-600 transition-all hover:bg-white hover:text-black ${
                            currentProject === projects.length - 1 ? "opacity-40 cursor-not-allowed" : ""
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

                {/* Continue indicator on last slide */}
                {currentProject === projects.length - 1 && (
                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                        <span className="text-sm text-gray-400 mb-2">Continue scrolling</span>
                        <ChevronDown className="text-indigo-400" size={28} />
                    </div>
                )}

                {/* Progress Bar */}
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
    )
}

export default Projects