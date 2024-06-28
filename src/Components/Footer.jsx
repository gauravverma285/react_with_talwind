import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <div className='px-14 bg-[#F4F9FF] pt-5'>
      <div className='mt-8 mb-8 border border-gray-200'></div>
      <div className='md:flex flex-wrap lg:flex-nowrap justify-between lg:gap-20'>
          <div className='w-full md:w-1/2  lg:w-1/3 xl:w-1/5'>
            <p className='mb-5'><span className='text-bold font-extrabold'>A+</span> Studio</p>
            <p className='w-[270px] text-xs mb-4'>Leading digital agency with solid design and development expertise. We build readymade 
              websites, mobile applications, and elaborate online business services.</p>
            <div className='flex items-center space-x-3 my-4 w-full sm:w-[80%]'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                <FaFacebookF />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                <FaTwitter />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                <FaLinkedinIn />
              </div>
            </div>
          </div>
            <div  className='w-full md:w-1/2 lg:w-1/3 xl:w-1/5 pt-4 lg:pt-0'>
              <p className='text-bold font-semibold mb-4'>What We Do</p>
              <p className=' text-xs mb-2'>App Design</p>
              <p className=' text-xs mb-2'>Social Media Manage</p>
              <p className=' text-xs mb-2'>Market Analysis Project</p>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/5 pt-4 lg:pt-0'>
              <p className='text-bold font-semibold mb-4'>Company</p>
              <p className=' text-xs mb-2'>About Us</p>
              <p className=' text-xs mb-2'>Career</p>
              <p className=' text-xs mb-2'>Become Investor</p>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/5 pt-4 lg:pt-0'>
              <p className='text-bold font-semibold mb-4'>Support</p>
              <p className=' text-xs mb-2'>FAQ</p>
              <p className=' text-xs mb-2'>Policy</p>
              <p className=' text-xs mb-2'>Business</p>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/5 pt-4 lg:pt-0'>
              <p className='text-bold font-semibold mb-4'>Contact</p>
              <p className='text-xs mb-2'>WhatsApp</p>
              <p className='text-xs mb-2'>Support 24</p>
            </div>
          </div>
      </div>
  )
}

export default Footer