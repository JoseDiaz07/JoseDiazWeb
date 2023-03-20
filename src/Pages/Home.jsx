import { Link } from "react-router-dom"
import Tooltip from "../Components/Tooltip";
import PortfolioCard from "../Components/PortfolioCard";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const Home = () => {
    return (
        <div className="px-1 bg-[#121212] transition-all duration-500 dark:bg-slate-100 min-h-screen">
            <div className="pt-12 px-4 md:pt-28 md:px-16 transition-all duration-500">
                <Link to="/about"><h3 className="text-red-500 font-semibold font-sans text-lg md:text-2xl hover:text-red-700 transition-all duration-300 md:w-96" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">HELLO WORLD, I AM JOSE DIAZ</h3></Link>
                <h1 className="text-4xl md:text-8xl text-white dark:text-black font-serif pt-2 pb-6 " data-aos="fade-right" data-aos-duration="800" data-aos-once="true">Code and websites.</h1>
                <h5 className="text-2xl  md:text-3xl  text-white dark:text-black font-sans font-light" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">A front-end developer and creator of <a href="http://knowtyone.netlify.app/" className="underline underline-offset-8     decoration-red-400  decoration-solid transition-all duration-200 hover:bg-red-400 hover:text-white tracking-tight" target="_blank" rel="noreferrer">Knowty</a>, an educational page for tenth grade students. <br className="hidden md:block" /> I also like to help people and contribute to humanity.</h5>
            </div>

            <div className="pt-20 pb-10 md:pt-56 md:pb-20">
                <div className="mx-4 py-43 p-3 md:mx-auto  rounded-lg md:px-16 md:py-14  md:max-w-4xl bg-[#28292a] dark:bg-white dark:text-black dark:shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <h1 className="text-4xl md:text-6xl text-white dark:text-black text-center font-medium font-serif tracking-wider">Skills</h1>
                    <p className="text-lg md:text-xl text-white dark:text-black text-center font-light mt-2 w-full md:w-[24em] mx-auto">I am currently proficient in these technologies. To add that I am learning React and  Tailwind CSS</p>

                    <div className="flex gap-3 md:gap-20 justify-center mt-6 md:mt-4">
                        <Tooltip icon={<AiFillHtml5 size={38} className="text-white dark:text-[#495057] hover:text-gray-400 dark:hover:text-gray-500 transition-all duration-200" />} text="HTML" />
                        <Tooltip icon={<DiCss3 size={38} className="text-white dark:text-[#495057] hover:text-gray-400 dark:hover:text-gray-500 transition-all duration-200" />} text="CSS" />
                        <Tooltip icon={<IoLogoJavascript size={38} className="text-white dark:text-[#495057] hover:text-gray-400 dark:hover:text-gray-500 transition-all duration-200" />} text="Javascript" />
                        <Tooltip icon={<IoLogoNodejs size={38} className="text-white dark:text-[#495057] hover:text-gray-400 dark:hover:text-gray-500 transition-all duration-200" />} text="Node" />
                        <Tooltip icon={<IoLogoReact size={38} className="text-white dark:text-[#495057] hover:text-gray-400 dark:hover:text-gray-500 transition-all duration-200" />} text="React" />
                        <Tooltip icon={<FaBootstrap size={38} className="text-white dark:text-[#495057] hover:text-gray-400 dark:hover:text-gray-500 transition-all duration-200" />} text="Bootstrap" />
                        <Tooltip icon={<SiTailwindcss size={38} className="text-white dark:text-[#495057] hover:text-gray-400 dark:hover:text-gray-500 transition-all duration-200" />} text="Tailwind" />
                    </div>
                </div>
            </div>

            <div className="pb-20 pt-12 px-4 md:pt-24 md:px-16">
                <h1 className="text-5xl text-white dark:text-black font-serif pt-2 tracking-wide">Portfolio</h1>
                <div className="flex flex-wrap justify-start mt-10 md:gap-x-5 gap-y-10">
                    <PortfolioCard title="Knowty" img="knowty.png" description="An educational page for tenth grade students.  Created with the purpose of help students in their academic process." link="https://knowty.colegiometropolitanodesoledad2000.edu.co/" technologies={
                        <>
                            <AiFillHtml5 size={20} className="text-white dark:text-[#495057]" />
                            <DiCss3 size={20} className="text-white dark:text-[#495057]" />
                            <IoLogoJavascript size={20} className="text-white dark:text-[#495057]" />
                            <IoLogoReact size={20} className="text-white dark:text-[#495057]" />
                            <FaBootstrap size={20} className="text-white dark:text-[#495057]" />
                        </>}
                    />

                    <PortfolioCard title="Happy space" img="happySpace.png" description="A page to relax and have fun looking at pictures and gifs of cats and dogs." link="https://happyspace.netlify.app/" customclass="mt-7" technologies={
                        <>
                            <AiFillHtml5 size={20} className="text-white dark:text-[#495057]" />
                            <DiCss3 size={20} className="text-white dark:text-[#495057]" />
                            <IoLogoJavascript size={20} className="text-white dark:text-[#495057]" />
                            <IoLogoReact size={20} className="text-white dark:text-[#495057]" />
                            <SiTailwindcss size={20} className="text-white dark:text-[#495057]" />
                        </>}
                    />

                </div>
            </div>
        </div>
    )
}
