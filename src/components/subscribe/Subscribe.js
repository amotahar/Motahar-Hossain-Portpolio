import React from 'react'
import { FaEnvelope } from "react-icons/fa"

import { motion } from "framer-motion"

function Subscribe() {
    return (
        <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className='py-20   sm:py-5  border  dark:border-none  dark:bg-dark-bg-color  border-b  dark:border-none'>
            <div className='container m-auto '>
                <div className="flex items-center justify-center  flex-col lg:w-[600px] sm:w-full  sm:w-full  gap-y-4   mx-auto  py-5">
                    <div className='w-[70px]  h-[70px]   shadow-light-shadow  dark:shadow-dark-outside-shadow   rounded-full  inline-flex items-center justify-center  dark:border-white '>
                        <FaEnvelope className='dark:text-white  text-4xl' />
                    </div>
                    <h2 className='dark:text-white sm:text-2xl lg:text-4xl'>Get The latest Update by Email</h2>
                    <div


                        className='relative w-full px-3  rounded-full   mx-3  '>
                        <input className='w-full py-3  px-3   bg-light-body-color   border-2   rounded-full   focus:outline-none  font-bold shadow-inset-shadow dark:shadow-dark-shadow ' type="text" placeholder='Enter your email  here...' />
                        <motion.button className=' bg-black  font-bold px-10  rounded-full py-2 shadow-light-shadow  border   text-white  absolute right-6 top-1.5  uppercase'>subscribe</motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Subscribe