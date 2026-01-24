import Link from 'next/link';

type NavLink = {
    title: string;
    href: string;
}

const navLinks: NavLink[] = [
    {title: "Home", href: "/"},
    {title: "Projects", href: "/"},
    {title: "Work Experience", href: "/"},
    {title: "Blog", href: "/blog"},
    {title: "About me", href: "/about"},
]
    export default function Navbar() {
        return (
            <nav className=" flex justify-between items-center p-4 bg-gray-900 text-white shadow-md"> 
                <div className="flex gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="hover:text-blue-400 bg-white transition-colors text-black text-s rounded-4x1"
                            >
                                {link.title}
                            </Link>
                    ))}
                    </div>
            </nav>

            
        );
    }