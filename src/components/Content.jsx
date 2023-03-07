import React from 'react'



const Content = () => {
  return (
    <div>
      <h2
        className='text-5xl font-semibold text-white text-center pt-24 dark:text-black'>Master 4 Base Hero Classes</h2>
      <p className='text-center pt-6 text-gray-400 text-xl dark:text-gray-700'>Start playing Legends using starter docs.It can help new <br /> players to make first steps and get base skills</p>
      <div className='images flex gap-[40px] justify-center pt-20 pb-44'>
        <img src="./assets/1376791-jinx-lol-league-of-legends-game-arcane-art-4k.jpg" alt="" className='rounded-lg w-[300px] h-[350px] hover:scale-110 duration-200' />
        <img src="./assets/1376791-jinx-lol-league-of-legends-game-arcane-art-4k.jpg" alt="" className='rounded-lg w-[300px] mt-4 h-[350px] hover:scale-110 duration-200' />
        <img src="./assets/1376791-jinx-lol-league-of-legends-game-arcane-art-4k.jpg" alt="" className='rounded-lg w-[300px] mt-8 h-[350px] hover:scale-110 duration-200' />
        <img src="./assets/1376791-jinx-lol-league-of-legends-game-arcane-art-4k.jpg" alt="" className='rounded-lg w-[300px] mt-12 h-[350px] hover:scale-110 duration-200' />
      </div>
    </div>
  )
}

export default Content