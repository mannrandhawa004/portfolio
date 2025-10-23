"use client"
import React, { useEffect, useState } from "react"
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null)
    const [time, setTime] = useState<string>("")

    // ⏰ Update time every second
    useEffect(() => {
        const update = () => {
            const now = new Date()
            const formatted = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
            setTime(formatted)
        }
        update()
        const interval = setInterval(update, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="fixed top-5 inset-x-0 max-full mx-auto z-50">
            <div className="max-w-6xl mx-auto flex items-center  px-6 py-4">

                <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-white">
                        {"Mann"}
                    </span>
                </div>

                <div className={cn("max-w-4xl mx-auto relative z-50", className)}>
                    <Menu setActive={setActive}>
                        <Link href="/#about" passHref>
                            <MenuItem setActive={setActive} active={active} item="About" />
                        </Link>
                        <Link href="/#skills" passHref>
                            <MenuItem setActive={setActive} active={active} item="Skills" />
                        </Link>
                        <Link href="/#work" passHref>
                            <MenuItem setActive={setActive} active={active} item="Work" />
                        </Link>
                        <Link href="/#contact" passHref>
                            <MenuItem setActive={setActive} active={active} item="Contact" />
                        </Link>
                      
                    </Menu>
                </div>


                <div className="font-mono text-sm opacity-90 ">{time}</div>
            </div>
        </div>
    )
}

export default Navbar
