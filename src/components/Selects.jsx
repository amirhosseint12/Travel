import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
export default function Selects() {
  return (
    <div className=" max-w-[1240px] mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
      <div className='col-span-1 relative'>
        <img src={img1} className='w-full h-full ' alt="" />
        <div className='w-full h-full absolute top-0 left-0 bg-gray-900/40 z-9'></div>
        <p className='absolute left-4 bottom-4 text-white text-xl font-bold'>Cozumel</p>
      </div>
      <div className='col-span-1 relative'>
        <img src={img2} className='w-full h-full ' alt="" />
        <div className='w-full h-full absolute top-0 left-0 bg-gray-900/40 z-9'></div>
        <p className='absolute left-4 bottom-4 text-white text-xl font-bold'>Bora Bora</p>
      </div>
      <div className='col-span-1 relative'>
        <img src={img3} className='w-full h-full ' alt="" />
        <div className='w-full h-full absolute top-0 left-0 bg-gray-900/40 z-9'></div>
        <p className='absolute left-4 bottom-4 text-white text-xl font-bold'>Maldives</p>
      </div>
      <div className='col-span-1 relative'>
        <img src={img4} className='w-full h-full ' alt="" />
        <div className='w-full h-full absolute top-0 left-0 bg-gray-900/40 z-9'></div>
        <p className='absolute left-4 bottom-4 text-white text-xl font-bold'>Jamaica</p>
      </div>
      <div className='col-span-1 relative'>
        <img src={img5} className='w-full h-full ' alt="" />
        <div className='w-full h-full absolute top-0 left-0 bg-gray-900/40 z-9'></div>
        <p className='absolute left-4 bottom-4 text-white text-xl font-bold'>Key Way</p>
      </div>
      <div className='col-span-1 relative'>
        <img src={img6} className='w-full h-full ' alt="" />
        <div className='w-full h-full absolute top-0 left-0 bg-gray-900/40 z-9'></div>
        <p className='absolute left-4 bottom-4 text-white text-xl font-bold'>Antigua</p>
      </div>
    </div>
  )
}
