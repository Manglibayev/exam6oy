import React from 'react'

const Card = () => {
  return (
    <div className='rounded-3xl bg-[url(src/assets/background.jpg)] w-[1300px] h-[400px] mx-auto flex mt-36'>
      <div>
        <h2 className='text-4xl pt-28 pl-12 pb-6 text-white font-bold'>Synergy of the Light <br /> update is now live</h2>
        <div className="flex pl-12 gap-4">
          <button className='text-white bg-indigo-600 rounded-lg px-4 py-2 text-lg font-semibold'>BUY NOW</button>
          <button className='text-gray-300 border-2 border-gray-400 rounded-lg px-4 py-2 text-lg font-semibold'>LEARN MORE</button>
        </div>
      </div>
      <div className='icons flex gap-12 pt-16 pl-20'>
        <img src="./assets/King_of_the_Sea_profileicon.webp" className='w-[130px] rounded-3xl h-[130px] mt-20' alt="" />
        <img src="./assets/King_of_the_Sea_profileicon.webp" className='w-[130px] rounded-3xl h-[130px]' alt="" />
        <img src="./assets/King_of_the_Sea_profileicon.webp" className='w-[130px] rounded-3xl h-[130px] mt-20' alt="" />
        <img src="./assets/King_of_the_Sea_profileicon.webp" className='w-[130px] rounded-3xl h-[130px]' alt="" />
      </div>
    </div>
  )
}

export default Card