import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { MdMenu, MdClose } from 'react-icons/md'
import { useToggleTheme } from '../hooks/useToggleTheme'

export const Navbar = () => {
	const location = useLocation()
	const [navbar, setNavbar] = useState(false)
	const { theme, toggleTheme } = useToggleTheme()

	const [Icon, setIcon] = useState(false)

	const toggleIcon = () => (theme === 'dark' ? setIcon(false) : setIcon(true))

	const navigate = useNavigate()
	const transitionPage = (ev, url) => {
		ev.preventDefault()
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				navigate(url)
			})
		} else {
			navigate(url)
		}
	}

	return (
		<>
			<nav className='bg-zinc-900 dark:bg-slate-100 text-white dark:text-black w-full pt-5 md:pt-12  transition-all duration-500 px-5 md:px-20'>
				<div className='flex justify-between text-xl '>
					<NavLink to='/'>
						<div className='flex hover:text-red-500 cursor-pointer transition-colors '>
							<img
								src='/img/me-min.jpg'
								alt=''
								className='rounded-full w-14 mr-3 h-14 object-cover scale-110'
							/>
							<div>
								<h1 className='font-semibold text-1xl duration-100'>
									José Díaz
								</h1>
								<p className='text-sm text-gray-400'>Dev</p>
							</div>
						</div>
					</NavLink>
					<div className='hidden gap-x-10 self-end md:flex pb-1'>
						<NavLink
							to='/'
							className={
								location.pathname === '/' ? 'h-8 nav' : 'text-gray-500 nav'
							}
						>
							<h1
								className='mt-0.5 duration-200'
								onClick={(e) => transitionPage(e, '/')}
							>
								<span className='font-semibold font-mono'>01</span> Home
							</h1>
							{location.pathname === '/' && (
								<div className=' bg-red-800 h-[3px] w-[100%] left-0 -bottom-[5px] rounded-lg  relative'></div>
							)}
						</NavLink>

						<NavLink
							to='/about'
							className={
								location.pathname === '/about' ? ' h-8' : 'text-gray-500 nav'
							}
						>
							<h1
								className='mt-0.5 duration-200'
								onClick={(e) => transitionPage(e, '/about')}
							>
								<span className='font-semibold font-mono'>02</span> About
							</h1>
							{location.pathname === '/about' && (
								<div className='bg-red-800 h-[3px] w-[100%] left-0 -bottom-[5px] rounded-lg  relative'></div>
							)}
						</NavLink>

						{Icon ? (
							<span
								className='hidden md:block rounded-full bg-slate-700 p-2 cursor-pointer hover:bg-slate-600 w-auto h-10 dark:bg-slate-300 hover:origin-center hover:-rotate-12 transition-all duration-200 scale-125'
								onClick={function () {
									toggleTheme()
									toggleIcon()
								}}
							>
								<HiMoon size={24} />
							</span>
						) : (
							<span
								className='hidden md:block rounded-full bg-slate-700 p-2 cursor-pointer w-auto h-10 dark:bg-slate-300  hover:origin-center hover:-rotate-45 transition-all duration-200 scale-125'
								onClick={function () {
									toggleTheme()
									toggleIcon()
								}}
							>
								<HiSun size={24} />
							</span>
						)}
					</div>
					<div className='flex gap-4 justify-end md:hidden'>
						{Icon ? (
							<span
								className='block md:hidden rounded-full bg-slate-600 p-2 cursor-pointer hover:bg-slate-500 w-auto h-10 dark:bg-slate-300 hover:origin-center hover:-rotate-12 transition-all duration-200 scale-125'
								onClick={function () {
									toggleTheme()
									toggleIcon()
								}}
							>
								<HiMoon size={24} />
							</span>
						) : (
							<span
								className='block md:hidden rounded-full bg-slate-600 p-2 cursor-pointer hover:bg-slate-500 w-auto h-10 dark:bg-slate-300 hover:origin-center hover:-rotate-45 transition-all duration-200 scale-125'
								onClick={function () {
									toggleTheme()
									toggleIcon()
								}}
							>
								<HiSun size={24} />
							</span>
						)}
						<MdMenu
							size={38}
							onClick={() => setNavbar(!navbar)}
							className='transition-all duration-500 md:hidden rounded-full bg-slate-600 p-2 cursor-pointer dark:bg-slate-300 scale-125'
						/>
					</div>
					{navbar ? (
						<div
							className='h-screen w-full top-0 left-0 z-20 bg-[#121212] dark:bg-white fixed  transition-all duration-500 md:hidden'
							transition-style='in:circle:top-right'
						>
							<MdClose
								size={38}
								className='absolute right-0 m-4 bg-slate-600 cursor-pointer p-1 dark:bg-slate-300 rounded-full scale-125'
								onClick={() => setNavbar(!navbar)}
							/>
							<div className='pt-44 pl-20 gap-y-10 flex flex-col'>
								<NavLink
									to='/'
									onClick={() => setTimeout(() => setNavbar(!navbar), 200)}
								>
									<h1
										className={
											location.pathname === '/'
												? 'h-16 text-6xl font-serif'
												: 'text-gray-500 nav text-6xl font-serif'
										}
									>
										<span className='bold font-mono text-slate-500 text-2xl'>
											01
										</span>{' '}
										Home
									</h1>
									{location.pathname === '/' && (
										<div className='bg-red-800 h-[3px] w-[75%] left-0 -bottom-[5px] rounded-lg  relative'></div>
									)}
								</NavLink>

								<NavLink
									to='/about'
									onClick={() => setTimeout(() => setNavbar(!navbar), 200)}
								>
									<h1
										className={
											location.pathname === '/about'
												? 'h-16 text-6xl font-serif '
												: 'text-gray-500 nav text-6xl font-serif '
										}
									>
										<span className='bold font-mono text-slate-500 text-2xl'>
											02
										</span>{' '}
										About
									</h1>
									{location.pathname === '/about' && (
										<div className=' bg-red-800 h-[3px] w-[75%] left-0 -bottom-[5px] rounded-lg  relative'></div>
									)}
								</NavLink>
							</div>
						</div>
					) : (
						''
					)}
				</div>
			</nav>
		</>
	)
}
