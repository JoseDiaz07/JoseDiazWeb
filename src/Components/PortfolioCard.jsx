import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const PortfolioCard = ({ technologies, description, img, link, title, customclass }) => {

    const [imgZoom, setImgZoom] = useState('')
    const handleImgZoomIn = () => {
        setImgZoom('scale-125 overflow-hidden')
    }

    const handleImgZoonOut = () => {
        setImgZoom('scale-100 overflow-hidden')
    }

    return (
        <>
            <div className="bg-[#28292a] w-80 mx-auto md:mx-0 md:w-72 h-auto p-6 rounded-2xl dark:bg-white dark:text-black dark:shadow-lg" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">

                <div class="group" onMouseEnter={handleImgZoomIn} onMouseLeave={handleImgZoonOut}>
                    <div class="relative overflow-hidden rounded-lg">
                        <img src={`/img/${img}`} alt="project img" className={`object-cover w-72 md:w-60 h-36 rounded-md transition-all duration-500 mx-auto ${imgZoom}`} />
                        <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-60 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="pt-5 gap-x-2">
                                <a href={link} target="_blank" rel="noreferrer">
                                    <div className="gap-x-2 bg-gray-700 hover:bg-gray-800 dark:bg-gray-500 dark:hover:bg-gray-600 transition-all duration-500 rounded-lg py-2 px-5 text-white">
                                        <FiExternalLink size={20} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-lg md:text-xl text-white dark:text-black font-semibold mt-4">{title}</h3>
                <p className="text-base md:text-base text-white dark:text-black pt-1 pb-3">{description}</p>
                <div className={customclass}>
                    <h4 className="text-lg md:text-lg text-white dark:text-black font-medium mt-1">Technologies</h4>
                    <div className="flex gap-5 md:gap-2 mt-1">
                        {technologies}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioCard