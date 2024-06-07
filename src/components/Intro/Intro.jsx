import React from 'react'
import Ava from '../../assets/file.png'
import './Intro.css'

export default function Intro() {
  return (
    <div className='flex flex-1 flex-col lg:flex-row px-4 lg:px-56 py-10'>
        <div className='flex flex-col justify-center lg:w-1/2'>
            <div className='text-amber-700 text-3xl font-bold slide-in'>
                Hello, I'm
            </div>

            <div className='text-6xl font-bold mb-4 slide-in'>
                Karin Dev
            </div>

            <div className='text-2xl font-semibold slide-in'>
                FS Web Developer
            </div>

        </div>
        <div className='flex justify-center lg:justify-end lg:w-1/2'>
            <img src={Ava} alt="" className='w-80 h-80 lg:ml-32 lg:w-96 lg:h-96'/>
        </div>
        
    </div>
  )
}
