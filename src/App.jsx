import React from 'react'
import Card from './components/Card'
import Content from './components/Content'
import Content2 from './components/Content2'
import Navbar from './components/Navbar'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div className='w-full h-full bg-slate-900'>
      <Navbar />
      <div className='container mx-auto bg-slate-900'>
        <div className='flex'>
          <div>
            <motion.h1
             initial={{ opacity:0, x:-200}}
             animate={{opacity: 2, x:0}}
             transition={{
              duration: 1
            }}
             className='text-7xl font-semibold pt-44 text-white'>Beautiful Game, <br /> Intense Reality</motion.h1>
            <motion.p
             initial={{ opacity:0, x:-200}}
             animate={{opacity: 2, x:0}}
             transition={{
              duration: 1
            }} 
            className='pt-4 text-2xl text-gray-400'>Welcome to Legends, the strategy card game <br />that's easy to learn but impossible to put down</motion.p>
            <div className="flex gap-4 pt-8">
              <button className='rounded-[18px] text-white px-6 py-2 font-medium bg-indigo-600 hover:bg-indigo-500'>PLAY FREE</button>
              <button className='rounded-[18px] border border-indigo-600 text-indigo-600 px-6 py-2 font-medium bg-white hover:bg-indigo-600 hover:text-white'>LEARN MORE</button>
            </div>
          </div>
          <div className='flex gap-4 pl-12'>
            <motion.img
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{
                duration: 1
              }}
              src="src/assets/xayah_4k_hd_league_of_legends-3840x2160.jpg" className='w-[300px] h-[400px] mt-40 rounded-md' alt="" />
            <motion.img
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{
                duration: 1
              }}
              src="src/assets/xayah_4k_hd_league_of_legends-3840x2160.jpg" className='w-[300px] h-[400px] mt-20 rounded-md' alt="" />
            <motion.img
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{
                duration: 1
              }}
              src="src/assets/xayah_4k_hd_league_of_legends-3840x2160.jpg" className='w-[300px] h-[400px] mt-40 rounded-md' alt="" />
          </div>
        </div>
        <hr className='border border-gray-400 w-[1440] mt-72' />
      </div>
      <Card />
      <Content />
      <Content2 />
    </div>
  )
}

export default App