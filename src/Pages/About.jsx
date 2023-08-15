// import { RiInstagramFill } from "react-icons/ri";
// import { BsGithub } from "react-icons/bs";

export const About = () => {
  return (
    <div className="px-1 bg-zinc-900 transition-all duration-500 dark:bg-slate-100 min-h-screen">
      <div className="pt-6 px-4 md:pt-20 md:px-16">
        <h1 className="text-white dark:text-black text-5xl my-10 md:text-7xl text-center font-serif" data-aos="zoom-in" data-aos-duration="800" data-aos-once="true">Who am I?</h1>
        <div className="flex-wrap md:flex md:flex-nowrap justify-evenly gap-5 mt-5 transition-all duration-500" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
          <img src="/img/me-min.jpg" alt="" className="w-96 md:w-96 mx-auto md:mx-0 rounded-lg object-cover" />
          <p className="mt-5 md:mt-0 text-[#e3e3e3] dark:text-black text-2xl font-light md:w-[50%]" >
            I am a front-end developer who develops projects in react, using Bootstrap or Tailwind. <br /> <br />

            Also, I like to analyze the design of structures and products on a daily basis; so in my projects I carefully study the interfaces that people will use. <br /> <br />

            In my free time I like to learn new things, even if sometimes they are not related to technology.</p>
        </div>
        {/* <div className=" mt-16 md:mt-28 pb-6 w-[60%] md:mx-auto">
          <h1 className="text-white dark:text-black text-3xl my-6 md:text-5xl text-left font-serif">Social</h1>
          <div className="space-y-4">
            <div className="flex gap-2 md:gap-5">
              <RiInstagramFill size={30} className="text-white dark:text-[#495057]" />
              <a href="https://www.instagram.com/jeliasdiazm/" className="text-red-400 hover:text-white underline decoration-red-400 underline-offset-8 hover:bg-red-400 text-xl transition-all duration-300" target="_blank" rel="noreferrer">Instagram</a>
            </div>
            <div className="flex gap-2 md:gap-5 mt- ">
              <BsGithub size={30} className="text-white dark:text-[#495057]" />
              <a href="https://github.com/jeliasdiaz" className="text-red-400 hover:text-white underline decoration-red-400 underline-offset-8 hover:bg-red-400 text-xl transition-all duration-300" target="_blank" rel="noreferrer">Github</a>
            </div>
          </div>
        </div> */}
        
      </div>
    </div >
  )
}
