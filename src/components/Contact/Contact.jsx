import React from 'react'
import GithubItem from './GithubItem'
import FacebookItem from './FacebookItem'
import InsItem from './InsItem'
import LinkedInItem from './LinkedInItem'
import GmailItem from './GmailItem'
import FadeIn from '../FadeIn/FadeIn'

export default function Contact() {
  return (
    <div>
       <div className='flex flex-col w-full py-8'>
            <div className='px-1 py-4'>
                <p className='text-amber-700 uppercase font-semibold'>
                    contact me
                </p>
            </div>
            <div className='px-1 mb-10'>
                <h1 className='text-white text-3xl font-bold'>
                    Let's Be Friends!!!
                </h1>
                
            </div>
            <FadeIn direction="down">
                <div className='flex flex-col lg:flex-row px-1 gap-8'>
                    <GithubItem></GithubItem>
                    <FacebookItem></FacebookItem>
                    <InsItem></InsItem>
                    <LinkedInItem></LinkedInItem>
                    <GmailItem></GmailItem>
                </div>
            </FadeIn>
            
        </div>
    </div>
  )
}
