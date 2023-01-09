import { Link } from "react-router-dom"
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Home = () => {
    return (
        <div className="px-1 bg-[#121212] transition-all duration-500 dark:bg-slate-100 min-h-screen">
            <div className="pt-12 px-4 md:pt-28 md:px-16 transition-all duration-500" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                <Link to="/about"><h3 className="text-red-500 font-semibold font-sans text-lg md:text-2xl hover:text-red-700 transition-colors duration-300">HELLO WORLD, I AM JOSE DIAZ</h3></Link>
                <h1 className="text-4xl md:text-8xl text-white dark:text-black font-serif pt-2 pb-6 ">Code and websites.</h1>
                <h5 className="text-2xl  md:text-3xl  text-white dark:text-black font-sans font-light">A front-end developer and creator of <a href="http://knowtyone.netlify.app/" className="underline underline-offset-8     decoration-red-400  decoration-solid transition-all duration-200 hover:bg-red-400 hover:text-white tracking-tight" target="_blank" rel="noreferrer">Knowty</a>, an educational page for tenth grade students. <br className="hidden md:block" /> I also like to delve into the psychology of people.   </h5>
            </div>

            <div className="pt-20 pb-10 md:pt-56 md:pb-20">
                <div className="mx-4 py-43 p-3 md:mx-auto  rounded-lg md:px-16 md:py-14  md:max-w-4xl bg-[#28292a] dark:bg-white dark:text-black dark:shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <h1 className="text-4xl md:text-6xl text-white dark:text-black text-center font-medium font-serif tracking-wider">Skills</h1>
                    <p className="text-lg md:text-xl text-white dark:text-black text-center font-light mt-2 w-full md:w-[24em] mx-auto">I am currently proficient in these technologies. To add that I am learning React and  Tailwind CSS</p>

                    <div className="flex gap-3 md:gap-20 justify-center mt-6 md:mt-4">
                        <AiFillHtml5 size={38} className="text-white dark:text-[#495057]" />
                        <DiCss3 size={38} className="text-white dark:text-[#495057]" />
                        <IoLogoJavascript size={38} className="text-white dark:text-[#495057]" />
                        <IoLogoNodejs size={38} className="text-white dark:text-[#495057]" />
                        <IoLogoReact size={38} className="text-white dark:text-[#495057]" />
                        <FaBootstrap size={38} className="text-white dark:text-[#495057]" />
                        <SiTailwindcss size={38} className="text-white dark:text-[#495057]" />
                    </div>
                </div>
            </div>

            <div className="pb-20 pt-12 px-4 md:pt-24 md:px-16">
                <div>
                    <h1 className="text-2xl md:text-5xl text-white dark:text-black font-serif pt-2 tracking-wide">Portfolio</h1>
                    <div className="flex justify-start mt-10">
                        <div className="bg-[#28292a] w-72 h-auto p-6 rounded-2xl dark:bg-white dark:text-black dark:shadow-lg"data-aos="fade-down" data-aos-duration="600" data-aos-once="true">
                            <img src="/img/knowty.png" alt="" className="object-contain w-64 rounded-md hover:scale-105 transition-all duration-200 mx-auto" />
                            <h3 className="text-lg md:text-xl text-white dark:text-black font-semibold mt-4">Knowty</h3>
                            <p className="text-base md:text-base text-white dark:text-black pt-1 pb-3">An educational page for tenth grade students.  Created with the purpose of help students in their academic process.</p>
                            <h4 className="text-lg md:text-lg text-white dark:text-black font-semibold mt-1">Technologies</h4>
                            <div className="flex gap-5 md:gap-2 mt-1">
                                <AiFillHtml5 size={20} className="text-white dark:text-[#495057]" />
                                <DiCss3 size={20} className="text-white dark:text-[#495057]" />
                                <IoLogoJavascript size={20} className="text-white dark:text-[#495057]" />
                                <IoLogoReact size={20} className="text-white dark:text-[#495057]" />
                                <FaBootstrap size={20} className="text-white dark:text-[#495057]" />
                            </div>
                            <button className="outline outline-1  font-medium  hover:bg-white text-white hover:text-black outline-white dark:outline-black dark:text-black dark:hover:bg-black dark:hover:text-white px-10 py-1 rounded-lg mt-5 transition-colors duration-200 "><a href="http://knowtydark.netlify.app/">Visit</a> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home