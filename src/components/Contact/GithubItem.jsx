import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function GithubItem(props) {
    const handleClick = () =>{
        window.location.href = "https://github.com/Karin1412"
    }
    return (
        <div className='flex flex-row border solid border-amber-700 cursor-pointer rounded-xl w-full text-amber-700 hover:text-white hover:bg-amber-700 px-6' onClick={handleClick}>
            <div className='flex flex-col'>
                <div className='px-8 pt-6'>
                    <p className='font-bold text-xl'>Github</p>
                </div>
                <div className='px-8 pb-6 pt-1'>
                    <p>Contact Now</p>
                </div>
            </div>
            <div className='flex items-center justify-center p-1'>
                <GitHubIcon style={{ width: '48px', height: '48px' }}></GitHubIcon>
            </div>
        </div>
    )
}
