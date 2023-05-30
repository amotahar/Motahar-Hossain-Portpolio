import React from 'react'
import { FaBalanceScale } from "react-icons/fa"
function ExperienceItem({item}) {

  const {title, description,year} = item;
  return (
    <div   className='flex flex-col p-10 dark:shadow-dark-shadow shadow-light-shadow gap-y-3'>
    <h2  className='text-3xl font-bold capitalize dark:text-white'>{title}</h2>
    <ul className='flex items-center justify-start gap-x-5'>
        <li  className='text-neone-color'><FaBalanceScale /></li>
        <li  className='dark:text-white'> {year} </li>
    </ul>
    <p  className='text-lg text-silver-color'>{description}</p>
</div>
  )
}

export default ExperienceItem