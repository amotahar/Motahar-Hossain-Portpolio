import React from 'react'

function LinkPortfolio({title, link, icon }) {
  return (
    <a   className='flex items-center justify-center gap-1 px-2 py-1 font-bold text-blue-900 uppercase border border-blue-900 rounded shadow-light-shadow dark:shadow-dark-outside-shadow' href={link}> <span  className="text:black dark:text-white"> {icon}</span>   {title}  </a>
  )
}

export default LinkPortfolio