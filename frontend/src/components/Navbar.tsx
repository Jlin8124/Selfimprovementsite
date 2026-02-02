"use client";

import Link from 'next/link';
import {usePathname} from "next/navigation"; // The Hook
import {useState} from "react";

type NavLink = {
    title: string;
    href: string;
}

// 1. Defined the data outside the component
const navLinks: NavLink[] = [
    {title: "Home", href: "/"},
    {title: "Projects", href: "/"},
    {title: "Work Experience", href: "/"},
    {title: "Blog", href: "/blog"},
    {title: "About me", href: "/about"},
]

/**
 * Global navigation Component.
 * * Features:
 * 1. Responsive: Collapses into a hambuger menu on mobile (<768px).
 * 2. Active State: Automatically highlights the current page using `usePathname`
 */

    export default function Navbar() {
        const pathname = usePathname();
        const [isOpen, setIsOpen] = useState(false);
        return (
        <>
            <nav className=" flex justify-between items-center p-4 bg-gray-900 text-white shadow-md"> 
                <div className="flex gap-6 max-w-7xl mx-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="hover:text-blue-400 transition-colors text-white text-s rounded-4x1"
                            >
                                {link.title}
                            </Link>
                            
                    ))}
                    <button
                            className ="md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? "Close" : "Menu"}
                                aria-label="Toggle Menu"
                            </button>
                    
                    </div>
            </nav>

        </> 
        );
    }