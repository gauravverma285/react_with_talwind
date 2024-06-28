import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full pl-10 px-2 2xl:px-16'>
            <div>
            <img src="/images/test-logo.svg" 
                alt="LOGO IMAGES" 
                width='125' 
                height='50' />
                </div>
            <div>
                <ul className='hidden lg:flex md:items-center font-inria font-bold text-lg'>
                    <li className='relative group ml-10 text-sm hover:border-b'>
                    <a href="/">Startup</a>
                    {/* Dropdown Menu */}
                    <ul className="absolute left-0 top-full hidden group-hover:block bg-[#fff] shadow-lg w-52 px-4 py-2">
                        <li className='relative group  py-2 hover:bg-gray-100 rounded-md p-2 mt-2 cursor-pointer'>
                            <a className='' href="/startup-1">Startup 1</a>
                            {/* Submenu */}
                            {/* <ul className="absolute left-full top-0 mt-0 hidden group-hover:block bg-white shadow-lg">
                                <li className='px-4 py-2 hover:bg-gray-200'>
                                    <a href="/startup-1-1">Startup 1.1</a>
                                </li>
                                <li className='px-4 py-2 hover:bg-gray-200'>
                                    <a href="/startup-1-2">Startup 1.2</a>
                                </li>
                            </ul> */}
                        </li>
                        <li className='py-2 hover:bg-gray-100 rounded-md p-2 mt-2 cursor-pointer'>
                            <a href="/startup-2">Startup 2</a>
                        </li>
                        <li className='py-2 hover:bg-gray-100 rounded-md p-2 mt-2 cursor-pointer'>
                            <a href="/startup-3">Startup 3</a>
                        </li>
                    </ul>
                </li>
                    {/* <a href="/">
                        <li className='relative group ml-10 text-sm hover:border-b '>Startup
                            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
                                <a href="/startup-1">
                                    <li className='px-4 py-2 hover:bg-gray-200'>Startup 1</li>
                                </a>
                                <a href="/startup-2">
                                    <li className='px-4 py-2 hover:bg-gray-200'>Startup 2</li>
                                </a>
                                <a href="/startup-3">
                                    <li className='px-4 py-2 hover:bg-gray-200'>Startup 3</li>
                                </a>
                            </ul>
                        </li>
                    </a> */}
                    <a href="/">
                        <li className='ml-10 text-sm hover:border-b'>Policies</li>
                    </a>
                    <a href="/">
                        <li className='ml-10 text-sm hover:border-b'>Benefits/Support</li>
                    </a>
                    <a href="/">
                        <li className='ml-10 text-sm hover:border-b'>Incubation </li>
                    </a>
                    <a href="/">
                        <li className='ml-10 text-sm hover:border-b'>Partners</li>
                    </a>
                    <a href="/">
                        <li className='ml-10 text-sm hover:border-b'>Events</li>
                    </a>
                    <a href="/">
                        <li className='ml-10 text-sm hover:border-b'>Document Library</li>
                    </a>
                    <a href="/">
                        <button className='ml-10 text-sm border bg-gradient-primary h-[33px] 
                        w-[99px] rounded-[7.69px] text-white'>Sign in</button>
                    </a>
                </ul>
                <div className='flex md:items-center'>
                    <div>
                        <a href="/">
                            <button className='lg:hidden text-sm border bg-gradient-primary h-[30px] 
                            w-[99px] rounded-[7.69px] text-white mr-5'>Sign in</button>
                        </a>
                    </div>
                    <div onClick={handleNav} className='lg:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
        </div>
       <div className={nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-y-auto'
                                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 overflow-y-auto'
            }>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <img src="/images/test-logo.svg" width='87' height='35' alt="" />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's building something legendary together.</p>
                    </div>
                </div>
                <div>
                    <ul className='font-inria font-bold text-lg'>
                        <a href="/">
                            <li className='py-4 text-sm'>Startup</li>
                        </a>
                        <a href="/">
                            <li className='py-4 text-sm'>Policies</li>
                        </a>
                        <a href="/">
                            <li className='py-4 text-sm'>Benefits/Support</li>
                        </a>
                        <a href="/">
                            <li className='py-4 text-sm'>Incubation </li>
                        </a>
                        <a href="/">
                            <li className='py-4 text-sm'>Partners</li>
                        </a>
                        <a href="/">
                            <li className='py-4 text-sm'>Events</li>
                        </a>
                        <a href="/">
                            <li className='py-4 text-sm'>Document Library</li>
                        </a>
                        <a href="/">
                            <button className='text-sm border bg-gradient-primary h-[33px] 
                            w-[99px] rounded-[7.69px] text-white'>Sign in</button>
                        </a>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <BsFillPersonFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Navbar