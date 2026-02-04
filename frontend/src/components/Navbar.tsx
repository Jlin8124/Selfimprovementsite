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
        {/* The key was to add relative and z-50 */}
            <nav className="items-center bg-gray-900 text-white shadow-mdw relative z-50 w-full"> 
                <div className="max-w-7xl px-4 h-16 mx-auto flex items-center justify-between">
                
                    {/* --- LEFT SIDE: LOGO --- */}
                {/* REQUIRED: Even if you want it empty, you need this div to push the button to the right! */}
                <div className="text-xl font-bold">
                SelfOS
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className={`${ pathname === link.href ? "text-blue-400": "text-gray-300"} 
                                hover:text-white transition-colors`}
                                >
                                    {link.title}
                                </Link>        
                        ))}
                    </div>
                    {/* MOBILE HAMBURGER: Flex on Mobile, Hidden on Desktop */}
                <button
                        className = " md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none text-white border border-gray-500"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                        >{/* Simple SVG Icons for Open/Close state */}
                           {isOpen ? (
                               <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                               </svg>
                           ) : (
                               <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                               </svg>
                           )}
                </button>
            </div>
        </div>
                    

                    {/* MOBILE MENU DROPDOWN */}
                    {/* LOGIC: Only renders if isOpen is true. Hidden on desktop to prevent glitches. */}
                    {isOpen && (
                        <div className="md:hidden bg-gray-800 border-t border-gray-700">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)} // UX: Close menu after clicking a link
                                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                                            pathname === link.href
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                        }`}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            
                            </div>
                            </div>
                    )}
                    
                    
                
                    
                    
            </nav>
        
        </> 
        );
    }