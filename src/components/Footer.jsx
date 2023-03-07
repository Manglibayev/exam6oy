import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 mt-48 flex justify-between items-center'>
        <div className='flex flex-col gap-6'>
            <p className='pl-12 pt-36 text-gray-400 text-xl dark:text-white'>All trademarks referenced here in are the <br /> properties of their respective owners</p>
            <p className='pl-12 pt-6 text-gray-400 text-xl pb-12 dark:text-white'>©2022 Legends.All rights reserved</p>
        </div>
        <div className="flex gap-16">
            <div className="flex flex-col gap-4">
                <p className='text-gray-400 dark:text-white hover:text-amber-500'>Overview</p>
                <p className='text-gray-400 dark:text-white hover:text-amber-500'>Features</p>
                <p className='text-gray-400 dark:text-white hover:text-amber-500'>Getting started</p>
                <p className='text-gray-400 dark:text-white hover:text-amber-500'>Media</p>
                <p className='text-gray-400 dark:text-white hover:text-amber-500'>FAQ</p>
            </div>
            <div className="flex flex-col gap-4 pr-16">
                <p className='text-gray-400 dark:text-white hover:text-amber-500'>Terms</p>
                <p className='text-gray-400 dark:text-white hover:text-amber-500'>Privacy Policy</p>
                <p className='text-gray-400 dark:text-white hover:text-amber-500'>Support</p>
                <p className='text-gray-400 dark:text-white hover:text-amber-500'>Contact us</p>
                <p className='text-gray-400 dark:text-white hover:text-amber-500'>About</p>                        
            </div>
        </div>
    </div>
  )
}

export default Footer