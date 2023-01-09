import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="bg-[#121212] dark:bg-slate-100">
            <div className="text-center h-screen text-white dark:text-black pt-28" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                <h1 className="text-7xl font-serif pb-3">Not possible.</h1>
                <h3 className="text-2xl mb-6 font-light">Sorry, that's a 404</h3>
                <Link to="/" className="outline outline-1  font-medium  hover:bg-white text-white hover:text-black outline-white dark:outline-black dark:text-black dark:hover:bg-black dark:hover:text-white px-10 py-1 rounded-lg transition-colors duration-200 ">Back home</Link>
            </div>
        </div>
    )
}

export default NotFound