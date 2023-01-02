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
        <div className="px-1 bg-[#121212] transition-all duration-200 dark:bg-slate-200 min-h-screen">
            <div className=" pt-12 px-4 md:pt-28 md:px-16">
                <Link to="/about"><h3 className="text-red-500 font-semibold font-sans text-lg md:text-2xl hover:text-red-600 ">HELLO WORLD, I AM JOSE DIAZ</h3></Link>
                <h1 className="text-4xl md:text-8xl text-white dark:text-black font-serif pt-2 pb-6">Code and websites</h1>
                <h5 className="text-2xl  md:text-3xl  text-white dark:text-black font-sans font-light">A front-end developer and creator of <a href="http://knowtydark.netlify.app/" className="underline decoration-red-400 decoration-dashed hover:decoration-solid transition-all duration-200 hover:text-red-400" target="_blank" rel="noreferrer">Knowty</a>, an educational page for tenth grade students. <br className="hidden md:block" /> I also like to delve into the psychology of people.   </h5>
            </div>

            <div className=" pt-20 pb-10 mb:pt-56 md:pb-20">
                <div className="px-4 py-4 max-w-sm  mx-auto rounded-lg md:px-16 md:py-16  md:max-w-6xl bg-[#28292a]  animate-in zoom-in duration-300">
                    <h1 className="text-4xl md:text-6xl text-white dark:text-black text-center font-medium font-serif">Skills</h1>
                    <p className="text-lg md:text-xl text-white dark:text-black text-center font-light mt-2">I am currently proficient in these technologies. To add that I am learning react and  Tailwind CSS</p>

                    <div className="flex gap-5 md:gap-20 justify-center mt-3">
                        <AiFillHtml5 size={38} color="white" />
                        <DiCss3 size={38} color="white" />
                        <IoLogoJavascript size={38} color="white" />
                        <IoLogoNodejs size={38} color="white" />
                        <IoLogoReact size={38} color="white" />
                        <FaBootstrap size={38} color="white" />
                        <SiTailwindcss size={38} color="white" />
                    </div>
                </div>
            </div>

            <div className="pb-20 pt-12 px-4 md:pt-24 md:px-16">
                <div >
                    <h1 className="text-2xl md:text-6xl text-white dark:text-black font-serif pt-2">Portfolio</h1>
                    <div className="flex justify-start mt-10">
                        <div className="bg-[#28292a] w-60 h-auto p-6 rounded-2xl">
                            <img src="/img/knowty.png" alt="" className="object-contain w-48 rounded-md hover:scale-105 transition-all duration-200" />
                            <h3 className="text-lg md:text-xl text-white dark:text-black font-semibold">Knowty</h3>
                            <p className="text-base md:text-base text-white dark:text-black pt-1 pb-3">An educational page an educational page for tenth grade students.  Created with the purpose of help students in their academic process</p>
                            <h4 className="text-lg md:text-lg text-white dark:text-black font-semibold">Technologies</h4>
                            <div className="flex gap-5 md:gap-2 mt-1 ">
                                <AiFillHtml5 size={18} color="white" />
                                <DiCss3 size={18} color="white" />
                                <IoLogoJavascript size={18} color="white" />
                                <IoLogoReact size={18} color="white" />
                                <FaBootstrap size={18} color="white" />
                            </div>
                            <button className="bg-black text-white px-10 py-1 rounded-lg mt-2">Visit</button>
                        </div>
                        <div className="bg-[#28292a] w-60 h-auto p-6 rounded-2xl ml-10">
                            <img src="/img/knowty.png" alt="" className="object-contain w-48 rounded-md hover:scale-105 transition-all duration-200" />
                            <h3 className="text-lg md:text-xl text-white dark:text-black font-semibold">Knowty</h3>
                            <p className="text-base md:text-base text-white dark:text-black pt-1 pb-3">An educational page an educational page for tenth grade students.  Created with the purpose of help students in their academic process</p>
                            <h4 className="text-lg md:text-lg text-white dark:text-black font-semibold">Technologies</h4>
                            <div className="flex gap-5 md:gap-2 mt-1 ">
                                <AiFillHtml5 size={18} color="white" />
                                <DiCss3 size={18} color="white" />
                                <IoLogoJavascript size={18} color="white" />
                                <IoLogoReact size={18} color="white" />
                                <FaBootstrap size={18} color="white" />
                            </div>
                            <button className="bg-black text-white px-10 py-1 rounded-lg mt-2">Visit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home