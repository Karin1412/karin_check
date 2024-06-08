import React from 'react'

export default function ProductCard(props) {
  return (
    <div className='rounded-xl bg-slate-700 w-[700px] h-auto lg:w-[300px] lg:h-[440px] hover:scale-105 hover:rounded-xl my-2 transition-all ease-in-out'>
        <div className='overflow-hidden'>
            <img src={props.Image} alt="" className='rounded-xl lg:w-auto lg:h-[150px] hover:scale-105 transition-all ease-in-out duration-300' />
        </div>
        <div className='px-6 pt-10 pb-6 font-semibold text-white text-xl cursor-pointer hover:text-amber-700'>
            <h2 >{props.Title}</h2>
        </div>
            
        <div className='px-6 text-sm uppercase text-amber-700 font-medium'>
            <p >{props.Tech}</p>
        </div>

        <div className='px-6 py-6 text-md text-white'>
            <p>{props.Description}</p>
        </div>
        <div className='p-6'>
            <a href={props.Link}>
              <span className='inline-block p-2 border-2 border-solid border-amber-700 font-medium text-sm text-amber-700 hover:bg-amber-700 hover:text-white'>
                VIEW SOURCE
              </span>
            </a>
        </div>
    </div>
  )
}
