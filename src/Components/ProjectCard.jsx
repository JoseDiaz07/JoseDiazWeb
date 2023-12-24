import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'

export const ProjectCard = ({
	technologies,
	description,
	img,
	link,
	title,
}) => {
	const [imgZoom, setImgZoom] = useState('')
	const handleImgZoomIn = () => {
		setImgZoom('scale-125 overflow-hidden')
	}

	const handleImgZoonOut = () => {
		setImgZoom('scale-100 overflow-hidden')
	}
	const renderTechnologies = technologies.map((element) => {
		return (
			<div
				className='bg-slate-700 text-white text-semibold rounded-full py-1 px-2 w-fit text-sm md:text-base'
				key={element}
			>
				<span>{element}</span>
			</div>
		)
	})

	return (
		<div
			className='group w-fit'
			onMouseEnter={handleImgZoomIn}
			onMouseLeave={handleImgZoonOut}
			data-aos='fade-up'
			data-aos-duration='600'
			data-aos-once='true'
		>
			<div className='relative overflow-hidden rounded-lg w-80 md:w-[30rem] h-80 md:h-96'>
				<img
					src={`/img/${img}`}
					alt='project img'
					className={`object-cover w-80 md:w-[30rem] h-80 md:h-96 rounded-md transition-all duration-500 mx-auto ${imgZoom}`}
				/>
				<div className='absolute h-full w-full flex items-center justify-center -bottom-60 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-b from-transparent to-zinc-900'>
					<div className='pt-5 gap-x-2'>
						<a href={link} target='_blank' rel='noreferrer'>
							<div className='gap-x-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-500 dark:hover:bg-gray-600 transition-all duration-200 rounded-full py-1 md:py-2 px-2 md:px-4 text-white w-fit absolute top-0 right-0 m-5'>
								<div className='flex gap-3'>
									<span>More details</span>
									<FiExternalLink size={20} className='mt-0.5' />
								</div>
							</div>
						</a>
						<div className='absolute bottom-0 left-0 p-5'>
							<h2 className='text-3xl md:text-4xl font-serif font-bold text-white'>
								{title}
							</h2>
							<p className='text-base md:text-lg text-slate-400'>
								{description}
							</p>

							<div className='flex gap-2 mt-4 flex-wrap'>
								{renderTechnologies}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
