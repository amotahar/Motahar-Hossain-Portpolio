import React from 'react'
import {motion}  from "framer-motion"
import { footerText, socialLinks } from '../../data/dummy'
import { topToBottomAnimation } from '../../data/motionAnimation'
function Footer() {


  return (
    
    <motion.div 
    variants={topToBottomAnimation} whileInView="animate"
    initial="initial"
    
    
    className='dark:bg-dark-bg-color  py-10  text-center  '>
      <ul className='flex  items-ce
      nter justify-center  gap-5 mb-3'>
        {socialLinks.map((item, index) => {
          return <motion.li    whileHover="hover"><a  className='dark:text-black   shadow-light-shadow  dark:shadow-dark-shadow  dark:bg-white socialIcon   ' href={item.link}>{item.icon}</a></motion.li>
        })}

      </ul>
      {footerText.map((item, index) => {
        return (
          <p key={index}><a  className='dark:text-white text-xl  mt-2' href={item.link}>{item.text} </a> </p>
        )
      })}

    </motion.div>
  )
}

export default Footer