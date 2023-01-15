import { RiInstagramFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

const Footer = () => {

  return (
    <footer class="text-center md:text-left border-t-2 border-gray-600 dark:border-gray-300">
      <div class="text-white  dark:text-black text-center p-4 bg-[#121212] dark:bg-slate-100  pt-16 ">
        <h1 className="text-2xl md:text-5xl font-serif font-semibold md:font-normal">Contact me</h1>

        <div className="w-[20rem] mx-auto mt-3 rounded-lg border-2 border-gray-600 justify-between p-2">
          <h3 className="text-xl md:text-2xl text-center tracking-wide">joseliasdiazm@gmail.com</h3>
        </div>

        <div className="w-72 mx-auto flex rounded-l mt-3 justify-center gap-3">
          <a href="https://github.com/JoseDiaz07" target="_blank" rel="noreferrer"><BsGithub size={35} className="hover:text-slate-500 hover:text-slate-400 dark:hover:text-slate-600 hover:scale-110" /></a>
          <a href="https://www.instagram.com/josediaz078/" target="_blank" rel="noreferrer"><RiInstagramFill size={35} className="hover:text-slate-500 hover:text-slate-400 dark:hover:text-slate-600 hover:scale-110" /></a>
          <a href="https://dev.to/josediaz07" target="_blank" rel="noreferrer"><FaDev size={35} className="hover:text-slate-500 hover:text-slate-400 dark:hover:text-slate-600 hover:scale-110" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer