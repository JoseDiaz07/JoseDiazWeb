const PortfolioCard = ({technologies, description, img, link, title}) => {
    return (
        <>
            <div className="bg-[#28292a] w-80 mx-auto md:mx-0 md:w-72 h-auto p-6 rounded-2xl dark:bg-white dark:text-black dark:shadow-lg" data-aos="fade-down" data-aos-duration="600" data-aos-once="true">
                <img src={`/img/${img}`} alt="project img" className="object-contain w-64 rounded-md hover:scale-105 transition-all duration-200 mx-auto" />
                <h3 className="text-lg md:text-xl text-white dark:text-black font-semibold mt-4">{title}</h3>
                <p className="text-base md:text-base text-white dark:text-black pt-1 pb-3">{description}</p>
                <h4 className="text-lg md:text-lg text-white dark:text-black font-medium mt-1">Technologies</h4>
                <div className="flex gap-5 md:gap-2 mt-1">
                    {technologies}
                </div>
                <button className="outline outline-1  font-medium  hover:bg-white text-white hover:text-black outline-white dark:outline-black dark:text-black dark:hover:bg-black dark:hover:text-white px-10 py-1 rounded-lg mt-5 transition-colors duration-200 "><a href={link}>Visit</a> </button>
            </div>
        </>
    )
}

export default PortfolioCard