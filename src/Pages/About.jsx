const About = () => {
  return (
    <div className="px-1 bg-[#121212] transition-all duration-200 dark:bg-slate-200 min-h-screen">
      <div className="pt-6 px-4 md:pt-20 md:px-16">
        <h1 className="text-white dark:text-black text-7xl text-center font-serif" data-aos="zoom-in" data-aos-duration="800" data-aos-once="true">Who am I?</h1>
        <div className="flex justify-center gap-5 mt-5" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
          <p className="text-[#e3e3e3] pl-2 dark:text-black text-xl w-96 text-right" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eligendi iste alias vitae dicta, reiciendis omnis tempore sapiente autem sint blanditiis nostrum, voluptas, est enim laudantium nulla pariatur! Placeat, cumque. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis illum exercitationem id optio hic delectus tempora, quibusdam magni, nihil facere fugiat ut error rerum voluptatem voluptate sint dolorum voluptatum.</p>
          <img src="/img/me.jpg" alt="" className="w-96 rounded-xl object-cover" />
        </div>
      </div>
    </div>
  )
}

export default About