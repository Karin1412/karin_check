import React from 'react'
import ProductCard from './ProductCard'
import './Project.css'
import Cake from '../../assets/Cake.png'
import HR from '../../assets/home.webp'
import Pet from '../../assets/petapp.png'
import CFUI from '../../assets/UiCoffeeShop.png'
import Next from '../../assets/next.jpg'
import FadeIn from '../FadeIn/FadeIn'

export default function Project() {
  return (
    <div className='flex flex-col w-full px-8 mb-20'>
        <div className='text-amber-700 font-semibold mb-4'>MY PROJECTS</div>
          <FadeIn direction="down">
            <div className='flex overflow-x-auto'>
              <div className='flex flex-col lg:flex-row hide-scrollbar gap-3'> 
                <ProductCard Image = {Cake} Title = "Cake Management Website" Tech = "MERN stack" Description = "Manage a website selling cake" Link = "https://github.com/Karin1412/SE347_cake_management"></ProductCard>
                <ProductCard Image = {HR} Title = "Interval Management Website" Tech = "NextJS Java MySQL" Description = "Manage employee by website" Link = "https://github.com/Karin1412"></ProductCard>
                <ProductCard Image = {Pet} Title = "Pet Social Network Website" Tech = "mern stack" Description = "Sharing your pet" Link = "https://github.com/Karin1412/pet_app"></ProductCard>
                <ProductCard Image = {CFUI} Title = "UI Coffee Management Website" Tech = "CSS" Description = "Make your healing" Link = "https://github.com/Karin1412/coffee_ui"></ProductCard>
                <ProductCard Image = {Next} Title = "Fullstack Nextflix Web Clone" Tech = "mern" Description = "Clone Nextflix" Link = "https://github.com/Karin1412"></ProductCard>
              </div>
            </div>
          </FadeIn>     
    </div>
  )
}