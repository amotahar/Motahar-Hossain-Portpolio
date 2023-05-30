import React from 'react'
import { FaMobile } from "react-icons/fa"
import {motion}  from "framer-motion"
import { BoxItem } from '../../data/motionAnimation'
function ContactInfoItem({ title, icon, subTitle }) {
    return (
        <div   className='flex flex-col items-center gap-3 py-10 text-center shadow-light-shadow dark:shadow-dark-shadow'>
            <div>

                <span className='inline-block text-4xl dark:text-white'>
                    {icon}
                </span>
            </div>
            <h4 className='text-2xl font-bold capitalize dark:text-white'>{title} </h4>
            <p className='text-2xl text-silver-color '>{subTitle} </p>
        </div>
    )
}

export default ContactInfoItem