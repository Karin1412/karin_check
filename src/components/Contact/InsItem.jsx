import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';

export default function InsItem() {
    const handleClick = () => {
        window.location.href = "https://www.instagram.com/_karin.07/"
    }
    return (
        <div className='flex flex-row border solid border-amber-700 cursor-pointer rounded-xl w-full text-amber-700 hover:text-white hover:bg-amber-700 px-6' onClick={handleClick}>
            <div className='flex flex-col'>
                <div className='px-8 pt-6'>
                    <p className='font-bold text-xl'>Instagram</p>
                </div>
                <div className='px-8 pb-6 pt-1'>
                    <p>Contact Now</p>
                </div>
            </div>
            <div className='flex items-center justify-center p-1'>
                <InstagramIcon style={{ width: '48px', height: '48px' }}></InstagramIcon>
            </div>
        </div>
    )
}
