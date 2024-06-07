import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className='p-6 mx-auto'>
        <nav className='flex flex-row justify-between items-center'>
            <div className='basis-2/6 text-center font-bold text-2xl cursor-pointer'>
                Karin.
            </div>

            <ul className='basis-3/6 flex justify-end items-center gap-8 font-medium text-sm uppercase'>
                <li className='header-li'>home</li>
                <li className='header-li'>skill</li>
                <li className='header-li'>project</li>
            </ul>

            <button className='basis-1/6 ml-10 p-2 flex justify-center items-center'>
              <span className='inline-block p-2 border-2 border-solid border-amber-700 font-semibold text-amber-700 hover:bg-amber-700 hover:text-black'>
                CONTACT ME
              </span>
            </button>
            
        </nav>
    </header>
  )
}
