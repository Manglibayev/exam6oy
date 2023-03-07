import React from 'react'

const Content2 = () => {
    return (
        <div className='flex justify-center'>
            <div className='gradient rounded-2xl bg-no-repeat drop-shadow-lg flex gap-24'>
                <div className="text">
                    <h2 className='text-4xl text-white font-semibold mt-24 pl-8'>Explore New Worlds <br />With Your Custom Deck</h2>
                    <div className="btns pt-12">
                        <button className='text-white bg-indigo-700 rounded-lg px-4 py-2 text-md font-semibold ml-8'>SEE ALL CARDS</button>
                        <button className='text-gray-300 border-2 border-gray-400 rounded-lg px-4 py-2 text-md font-semibold ml-2'>SEE DECK BUILDER</button>
                    </div>
                </div>
                <div className="images">
                    <img src="./assets/character.png" alt="" className='w-[640px] h-[400px] object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Content2