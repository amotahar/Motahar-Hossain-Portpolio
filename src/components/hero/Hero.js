import React from 'react'
import Button from '../../subComponents/Button'
import Navbar from '../navbar/Navbar'
import { NavHashLink } from 'react-router-hash-link'

import { motion } from "framer-motion"
import { boxMotionItemVariant, boxMotionVariant, iconsAnimationVariant } from '../../data/motionAnimation'
// import { heroImg } from '../../assets'
import { heroData } from '../../data/dummy'


function Hero() {

  const { title, subTitle, description, resumeLink, heroImg, heroIcons } = heroData;

  const moveVariants = {
    animation: {
      y: [0, 15],
      scale: 0.5,
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }

  return (
    <div
      

      className='py-10 dark:bg-dark-bg-color' id="home">
      <div className="container mx-auto">
        <div className="grid flex-wrap items-center justify-between gap-5 lg:grid-cols-2 sm:grid-cols-1">
          <div className='flex flex-col gap-5'>
            <h2 variants={boxMotionItemVariant} className='font-bold md:text-5xl dark:text-white xs:text-4xl '>  <span className='inline-block mb-5 dark:text-yellow-color md:text-5xl xs:text-3xl '>Hello,</span><br />
              {title}</h2>
            <h3 variants={boxMotionItemVariant} className='font-bold text-green-color md:text-3xl xs:text-xl'>{subTitle}</h3>
            <p variants={boxMotionItemVariant} className='text-lg text-gray-color'>{description}</p>
            <div>
            <NavHashLink smooth to="/#about"   className='inline-block button'>About  </NavHashLink>
           
            </div>
          </div>
          <div className='relative'>
            <div
              initial={{ y: -15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={
                {
                  duration: 2,
                  delay: 0.5
                }
              } className='flex items-center justify-center w-full text-center'>
              <img className='aspect-square w-[70%] rounded-full  shadow-light-shadow  dark:shadow-dark-shadow' src={heroImg} />
            </div>
            <div className='absolute top-0 right-0 w-full h-full'>
              <div className='relative w-full h-full '>
                <ul >
                  {heroIcons.map(item => (
                    <motion.li variants={iconsAnimationVariant}
                      animate="animationHover" initial="initial" className={`heroStaticIcon ${item.position}`}>{item.icon}</motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero