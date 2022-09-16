import React from 'react'
import  video  from '../assets/video.mp4'
import {BiSearchAlt2} from 'react-icons/bi'
export default function Hero() {
  return (
    <div className='w-full h-screen relative '>
        <video className='h-full w-full object-cover' src={video} autoPlay loop muted></video>
        <div className="w-full h-full top-0 left-0 absolute bg-gray-500/20 flex justify-center items-center flex-col gap-7" >
            <div className='flex flex-col text-center text-white gap-3'>
                <h1>first class travel</h1>
                <h2>top 1% loction worldwide</h2>
            </div>
            <form className='flex items-center bg-white/50 p-2 rounded-md'>
                <input type="text" className='bg-transparent h-full border-none outline-none text-lg  sm:text-xl placeholder:text-black/40' placeholder='Search Destination'/>
                <button> <BiSearchAlt2 size={25}/></button>
            </form>
        </div>
    </div>
  )
}
