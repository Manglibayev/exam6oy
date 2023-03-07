import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import FAQ from '../pages/FAQ'
import Features from '../pages/Features'
import Media from '../pages/Media'
import Overview from '../pages/Overview'
import Start from '../pages/Start'

const Navbar = () => {

    return (
        <div className='container mx-auto pt-8'>
            <nav className='flex justify-center items-center gap-[418px]'>
                <a href="/" className='font-semibold text-2xl text-gray-400 dark:text-gray-700'>Legends</a>
                <ul className='flex gap-8 text-lg'>
                    <li className='hover:scale-125 duration-200'>
                        <Link className='text-gray-400 dark:text-gray-700 hover:text-amber-500' to='/overview'>Overview</Link>
                    </li>
                    <li  className='hover:scale-125 duration-200'>
                        <Link className='text-gray-400 dark:text-gray-700 hover:text-amber-500' to='/features'>Features</Link>
                    </li>
                    <li  className='hover:scale-125 duration-200'>
                        <Link className='text-gray-400 dark:text-gray-700 hover:text-amber-500' to='/start'>Start</Link>
                    </li>
                    <li  className='hover:scale-125 duration-200'>
                        <Link className='text-gray-400 dark:text-gray-700 hover:text-amber-500' to='/media'>Media</Link>
                    </li>
                    <li  className='hover:scale-125 duration-200'>
                        <Link className='text-gray-400 dark:text-gray-700 hover:text-amber-500' to='/faq'>FAQ</Link>
                    </li>
                </ul>
                <div className="flex gap-2">
                    <button className='border rounded-[18px] border-gray-400 text-gray-700 px-3 py-2 font-medium bg-white hover:bg-amber-500 hover:scale-110 duration-200 active:scale-95'>ACCOUNT</button>
                    <button className='bg-amber-500 rounded-[18px] px-3 py-2 font-medium hover:bg-amber-400 hover:scale-110 duration-200 active:scale-95'>SUBSCRIBE</button>
                </div>
            </nav>
            <Routes>
                <Route path='/overview' element={<Overview/>}/>
                <Route path='/features' element={<Features/>}/>
                <Route path='/start' element={<Start/>}/>
                <Route path='/media' element={<Media/>}/>
                <Route path='/faq' element={<FAQ/>}/>
            </Routes>
        </div>
    )
}

export default Navbar