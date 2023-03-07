import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Content from './components/Content'
import Content2 from './components/Content2'
import Navbar from './components/Navbar'
import { motion } from 'framer-motion'
import {CgDarkMode} from 'react-icons/cg'
import PriceCard from './components/PriceCard'
import {ImCheckboxChecked} from 'react-icons/im'
import Footer from './components/Footer'


const App = () => {
  const  [dark, setDark] = useState(false)

  useEffect(()=>{
      document.documentElement.className = dark ? 'dark' : ''
  }, [dark])

  return (
    <div className='w-full h-full bg-slate-900 dark:bg-white'>
      <Navbar />
      <button className='absolute top-[37px] left-[1450px] text-white text-3xl dark:text-black hover:scale-110 duration-200' onClick={()=>setDark(!dark)}><CgDarkMode/></button>
      <div className='container mx-auto bg-slate-900 dark:bg-white'>
        <div className='flex'>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 2, x: 0 }}
              transition={{
                duration: 1
              }}
              viewport={{ amount: 0.2 }}
              className='text-7xl font-semibold pt-44 text-white dark:text-black'>Beautiful Game, <br /> Intense Reality</motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 2, x: 0 }}
              transition={{
                duration: 1.2
              }}
              className='pt-4 text-2xl text-gray-400 dark:text-gray-700'>Welcome to Legends, the strategy card game <br />that's easy to learn but impossible to put down</motion.p>
            <div className="flex gap-4 pt-8">
              <motion.button
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 2, x: 0 }}
                transition={{
                  duration: 1.4
                }}
                className='rounded-[18px] text-white px-6 py-2 font-medium bg-indigo-600 hover:bg-indigo-500'>PLAY FREE</motion.button>
              <motion.button
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 2, x: 0 }}
                transition={{
                  duration: 1.4
                }}
                className='rounded-[18px] border border-indigo-600 text-indigo-600 px-6 py-2 font-medium bg-white hover:bg-indigo-600 hover:text-white'>LEARN MORE</motion.button>
            </div>
          </div>
          <div className='flex gap-4 pl-12'>
            <motion.img
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{
                duration: 1.4
              }}
              src="public/assets/xayah_4k_hd_league_of_legends-3840x2160.jpg" className='md:w-[150px] md:h-[200px] xl:w-[300px] xl:h-[400px] mt-40 rounded-md' alt="" />
            <motion.img
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{
                duration: 1
              }}
              src="public/assets/xayah_4k_hd_league_of_legends-3840x2160.jpg" className='md:w-[150px] md:h-[200px] xl:w-[300px] xl:h-[400px] mt-20 rounded-md' alt="" />
            <motion.img
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{
                duration: 2
              }}
              src="public/assets/xayah_4k_hd_league_of_legends-3840x2160.jpg" className='md:w-[150px] md:h-[200px] xl:w-[300px] xl:h-[400px] mt-40 rounded-md' alt="" />
          </div>
        </div>
        <hr className='border border-gray-400 w-[1440] mt-72' />
      </div>
      <Card />
      <Content />
      <Content2 />
      <div className="">
        <h2 className='text-5xl font-semibold text-white text-center pt-24 dark:text-black'>Discover a world of incredible <br /> gaming experiences now</h2>
        <p className='text-center pt-6 text-gray-400 text-xl dark:text-gray-700'>Choose from three subscription plan options to get monthly <br />benefits and decks, that suit your gaming style</p>
      </div>
      <div className="pricecards flex justify-center gap-16 mt-24">
      <PriceCard/>
      <div className='w-[320px] border-2 rounded-2xl p-2 border-gray-400 bg-indigo-700'>
        <div className='cardheader bg-white rounded-xl pl-[22px] pr-[14px] pt-6'>
            <h4 className='text-2xl text-amber-500 font-semibold pl-[15px] pr-[5px]'>Extra</h4>
            <p className='text-black font-semibold pl-[15px] pr-[5px]'>1 Month - $19.99 / month</p>
            <p className='text-gray-400 font-semibold pl-[15px] pr-[5px] pb-4'>Billed every 1 month. Cancel any time</p>
        </div>
        <p className='text-white  text-lg flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-white  text-lg flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-white  text-lg flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-white  text-lg flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-white  text-lg flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-white  text-lg flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-white  text-lg flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-white  text-lg flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-white  text-lg flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
    </div>
      <PriceCard/>
      </div>
      <div className="mt-24">
        <h2 className='text-7xl font-semibold text-white text-center pt-24 dark:text-black'>New epic backgrounds</h2>
        <p className='text-center pt-6 text-gray-400 text-2xl dark:text-gray-700'>Get a unique background to make your profile look legendary</p>
        <div className="flex gap-6 justify-center mt-16">
          <img src="./assets/b1.jpeg" className='rounded-xl hover:scale-110 duration-200' alt="" />
          <img src="public/assets/b2.jpeg" className='rounded-xl hover:scale-110 duration-200' alt="" />
          <img src="public/assets/b3.jpeg" className='rounded-xl hover:scale-110 duration-200' alt="" />
          <img src="public/assets/b4.jpeg" className='rounded-xl hover:scale-110 duration-200' alt="" />
          <img src="public/assets/b5.jpeg" className='rounded-xl hover:scale-110 duration-200' alt="" />
        </div>
        <button className='text-white bg-indigo-700 rounded-lg px-6 py-4 ml-[850px] mt-12 text-xl font-semibold hover:scale-110 duration-200 active:scale-95'>GO TO MARKETPLACE</button>
      </div>
      <Footer/>
    </div>
  )
}

export default App