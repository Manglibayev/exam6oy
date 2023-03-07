import React from 'react'
import {ImCheckboxChecked} from 'react-icons/im'


const PriceCard = () => {
  return (
    <div className='w-[320px] border-2 rounded-2xl p-2 border-gray-400 mt-11'>
        <div className='cardheader bg-indigo-700 rounded-xl pl-[15px] pr-[5px] pt-4'>
            <h4 className='text-lg text-amber-500 font-semibold pl-[15px] pr-[5px]'>Essential</h4>
            <p className='text-white font-semibold pl-[15px] pr-[5px]'>1 Month - $14.99 / month</p>
            <p className='text-gray-400 font-semibold pl-[15px] pr-[5px] pb-4'>Billed every 1 month. Cancel any time</p>
        </div>
        <p className='text-gray-400 flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-gray-400 flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-gray-400 flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-gray-400 flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-gray-400 flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-gray-400 flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-gray-400 flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-gray-400 flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
        <p className='text-gray-400 flex gap-2 pt-6 border-b-2 pb-4 border-gray-400 items-center pl-[12px] pr-[5px]'><ImCheckboxChecked/>Rating Matchmaking</p>
    </div>
  )
}

export default PriceCard