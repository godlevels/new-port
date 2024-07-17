import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const navItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Projects",
        link: "/projects",
    },
    {
        name: "Contact",
        link: "/contact", 
    },
];
    return (
    <>
        <nav className="w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4 lg:py-4 md:py-4 sm:py-1 py-1 font-mono sticky top-0">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
            <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              {/* Logo section */}
                <Link className="text-xl font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
                <h1 className="lg:hidden md:hidden sm:block block">god</h1>
                </Link>
                <div className="md:hidden">
                <button
                    className="p-2 text-[#000b41] rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                >
                    {navbar ? (
                    <X className="cursor-pointer" size={24} />
                    ) : (
                    <Menu className="cursor-pointer" size={24} />
                    )}
                </button>
                </div>
            </div>
            </div>
          {/* NAvbar menu items section */}
            <div
            className={`flex justify-between items-center md:block ${
                navbar ? "block" : "hidden"
            }`}
            >
            <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
                {navItems.map((item, index) => (
                <li key={index}>
                    <Link
                    to={item.link}
                    className="text-[#000b41] text-lg font-medium hover:text-indigo-600 ease-out duration-700"
                    >
                    {item.name}
                    </Link>
                </li>
            ))}
            </ul>
            </div>
        </div>
        </nav>
    </>
    );
};

export default Navbar;
