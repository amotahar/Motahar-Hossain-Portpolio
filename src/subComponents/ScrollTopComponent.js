import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import { AiOutlineToTop } from "react-icons/ai"

function ScrollTopComponent() {
  return (
    <ScrollToTop
        smooth 
        style={{background:"none"}}
        component={
          <span  className='flex items-center justify-center text-4xl  bg-light-body-color  dark:bg-dark-bg-color shadow-light-shadow  dark:shadow-dark-outside-shadow  dark:text-white '><AiOutlineToTop /></span>
        
        } 
      />
  )
}

export default ScrollTopComponent