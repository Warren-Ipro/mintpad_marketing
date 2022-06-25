import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';

import { MenuAlt4Icon, XIcon } from '@heroicons/react/solid'

function Navbar() {
  const [ menuToggle, setMenuToggle ] = useState(false)

  const toggleMenu = () => {
    setMenuToggle(!menuToggle)
  }

  return (
    <nav className='sticky top-0 z-50'>
      <div className="bg-white flex flex-col items-center justify-center ">
        <div className="w-full flex flex-col items-center justify-center border-b border-b-gray-100 h-20">
          <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex justify-between items-center">
            <a href="/home">
              <Image src="/mp-logo-primary.svg" alt="Mintpad Logo" width={154.73} height={32} />
            </a>
            <div className='lg:hidden'>
              {
                menuToggle === false ?
                <button className='p-4' onClick={(() => toggleMenu())}>
                  <MenuAlt4Icon className='h-5 w-5'/>
                </button>
                :
                <button className='p-4' onClick={(() => toggleMenu())}>
                  <XIcon className='h-5 w-5'/>
                </button>
              }
            </div>
            <div className="text-gray-600 gap-x-2 font-medium hidden lg:flex">
              <a className='px-4 py-2 hover:bg-gray-50 rounded' href="#problem">The Problem</a>
              <a className='px-4 py-2 hover:bg-gray-50 rounded' href="#solution">The Solution</a>
              <a className='px-4 py-2 hover:bg-gray-50 rounded' href="#how">How It Works</a>
              <a className='px-4 py-2 hover:bg-gray-50 rounded' href="#why">Why Mintpad</a>
              <a className='px-4 py-2 hover:bg-gray-50 rounded' href="#contact">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
      {
        menuToggle !== false ?
        <div className="h-screen w-screen bg-slate-500/20 backdrop-blur-sm fixed top-0 z-50 mt-20 p-4 touch-none">
          <div className="rounded-[24px] bg-gradient-to-br from-teal-400 via-sky-500/5 to-blue-500 p-[2px] shadow-2xl">
            <div className="text-gray-600 gap-x-4 font-medium text-lg md:text-sm flex flex-col md:flex-row lg:hidden py-6 bg-white rounded-[22px]">
              <a onClick={(() => toggleMenu())} className='px-8 py-4 md:px-4 md:py-2 hover:bg-gray-50 rounded block' href="#problem">The Problem</a>
              <a onClick={(() => toggleMenu())} className='px-8 py-4 md:px-4 md:py-2 hover:bg-gray-50 rounded block' href="#solution">The Solution</a>
              <a onClick={(() => toggleMenu())} className='px-8 py-4 md:px-4 md:py-2 hover:bg-gray-50 rounded block' href="#how">How It Works</a>
              <a onClick={(() => toggleMenu())} className='px-8 py-4 md:px-4 md:py-2 hover:bg-gray-50 rounded block' href="#why">Why Mintpad</a>
              <a onClick={(() => toggleMenu())} className='px-8 py-4 md:px-4 md:py-2 hover:bg-gray-50 rounded block' href="#contact">Get In Touch</a>
            </div>
          </div>
        </div>
        :
        null
      }
    </nav>
  )
}

export default Navbar
