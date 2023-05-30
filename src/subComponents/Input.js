import React from 'react'
import {motion}  from "framer-motion"
import { topToBottomAnimation } from '../data/motionAnimation'
function Input({placeholder, type}) {
  return (
    <>
    {type === "text" ?  (
       <motion.div
       variants={topToBottomAnimation} whileInView="animate"
       initial="initial"
       className='w-full'>
       <input  className='inputBox dark:shadow-dark-shadow bg-light-body-color  shadow-light-shadow   border-2 dark:border-none dark:bg-dark-bg-color  dark:text-white ease-in duration-300  shadow-inset-shadow dark:shadow-inset-dark-shadow ' type={type} placeholder={placeholder} />
   </motion.div>
    ) :(
      <motion.div 
      variants={topToBottomAnimation} whileInView="animate"
      initial="initial"
      className='w-full'
      >
      <textarea name="" placeholder={placeholder} rows="4"  className='inputBox   border-2 dark:border-none dark:shadow-dark-shadow resize-none bg-light-body-color dark:text-white ease-in duration-300  shadow-inset-shadow dark:bg-dark-bg-color dark:shadow-inset-dark-shadow  '></textarea>
      </motion.div>
    )}
   
    </>
    
  )
}

export default Input