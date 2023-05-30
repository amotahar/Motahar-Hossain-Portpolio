import React from 'react'
import {motion }  from "framer-motion"

function Button({title, type}) {
  return (
    <div>
        <motion.button  
        initial={{
          scale:0.5
        }}
        whileInView={{
          scale:1
        }}
        transition={{
          delay:1
        }}
        className='button '  type={type}>{title}</motion.button>
    </div>
  )
}

export default Button