import { NavLink, useLocation } from "react-router-dom"
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";

const Navbar = () => {
    const location = useLocation()
    const [navbar, setNavbar] = useState(false);

    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

    const toggleTheme = () => theme === '' ? setTheme('dark') : setTheme('')

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    const [Icon, setIcon] = useState(false)

    const toggleIcon = () => {
        setIcon(!Icon)
    }

    return (
        <>
            <nav className="bg-[#121212] dark:bg-slate-100 text-white dark:text-black w-full pt-5 md:pt-12  transition-all duration-200 px-5 md:px-20">
                <div className="flex justify-between text-xl ">
                    <NavLink to="/"><div className="flex hover:text-red-500 cursor-pointer">
                        <img src="/img/me-min.jpg" alt="" className="rounded-full w-14 mr-3 h-14 object-cover scale-110" />
                        <div>
                            <h1 className="font-semibold text-1xl">Jose Díaz</h1>
                            <p className="text-sm text-gray-400">Dev</p>
                        </div>
                    </div>
                    </NavLink>
                    <div className="hidden gap-10 self-end md:flex pb-1">
                        <NavLink to="/" className={location.pathname === "/" ? "underline underline-offset-2 decoration-red-800 decoration-4 transition-colors " : "group transition-all ease-in-out"}><h1 className=" bg-left-bottom bg-gradient-to-r from-gray-600 to-red-from-gray-600 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:200%_4px] transition-all duration-300 ease-in text-lg"><span className="font-semibold font-mono">01</span> Home</h1></NavLink>

                        <NavLink to="/about" className={location.pathname === "/about" ? "underline underline-offset-2 decoration-red-800 decoration-4 transition-colors " : "group transition-all ease-in-out"}><h1 className=" bg-left-bottom bg-gradient-to-r from-gray-600 to-red-from-gray-600 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:200%_4px] transition-all duration-300 ease-in text-lg"><span className="font-bold font-mono">02</span> About</h1>
                        </NavLink>

                        {
                            Icon
                                ?
                                <span className="hidden md:block rounded-full bg-slate-700 p-2 cursor-pointer hover:bg-slate-600 w-auto h-10 dark:bg-slate-300 hover:origin-center hover:-rotate-12 transition-all duration-200 scale-125"><HiMoon size={24} onClick={function () { toggleTheme(); toggleIcon() }} /></span>
                                :
                                <span className="hidden md:block rounded-full bg-slate-700 p-2 cursor-pointer w-auto h-10 dark:bg-slate-300  hover:origin-center hover:-rotate-45 transition-all duration-200 scale-125"><HiSun size={24} onClick={function () { toggleTheme(); toggleIcon() }} /></span>
                        }

                    </div>
                    <div className="flex gap-4 justify-end md:hidden">
                        {
                            Icon
                                ?
                                <span className="block md:hidden rounded-full bg-slate-600 p-2 cursor-pointer hover:bg-slate-500 w-auto h-10 dark:bg-slate-300 hover:origin-center hover:-rotate-12 transition-all duration-200 scale-125"><HiMoon size={24} onClick={function () { toggleTheme(); toggleIcon() }} /></span>
                                :
                                <span className="block md:hidden rounded-full bg-slate-600 p-2 cursor-pointer hover:bg-slate-500 w-auto h-10 dark:bg-slate-300 hover:origin-center hover:-rotate-45 transition-all duration-200 scale-125"><HiSun size={24} onClick={function () { toggleTheme(); toggleIcon() }} /></span>
                        }
                        <MdMenu size={38} onClick={() => setNavbar(!navbar)} className="transition-all duration-500 md:hidden rounded-full bg-slate-600 p-2 cursor-pointer dark:bg-slate-300 scale-125" />
                    </div>
                    {
                        navbar
                            ?
                            <div className="h-screen w-full top-0 left-0 z-20 bg-[#121212] dark:bg-white fixed  transition-all duration-500 md:hidden" data-aos="fade-down" data-aos-duration="600">
                                <MdClose size={38} className="absolute right-0 m-4 bg-slate-600 cursor-pointer p-1 dark:bg-slate-300 rounded-full scale-125" onClick={() => setNavbar(!navbar)} />
                                <div className="pt-44 pl-20">
                                    <NavLink to="/" onClick={() => setTimeout(() => setNavbar(!navbar), 200)}><h1 className={location.pathname === "/" ? "underline underline-offset-2 decoration-red-800 decoration-8 transition-colors font-serif text-6xl  bg-none" : "group transition-all ease-in-out font-serif text-6xl"}><span className="bold font-sans text-slate-500 text-2xl">01</span> Home</h1></NavLink>

                                    <NavLink to="/about" onClick={() => setTimeout(() => setNavbar(!navbar), 200)}><h1 className={location.pathname === "/about" ? "underline underline-offset-2 decoration-red-800 decoration-8 transition-colors font-serif text-6xl mt-10" : "group transition-all ease-in-out font-serif text-6xl mt-10"}><span className="bold font-sans text-slate-500 text-2xl">02</span> About</h1></NavLink>

                                </div>
                            </div>
                            :
                            ""
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar