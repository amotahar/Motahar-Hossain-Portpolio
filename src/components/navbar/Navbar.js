import React, { useEffect, useState } from 'react'
import { darkIocn, ligihtIcon } from '../../assets'
import { navlinks } from '../../data/dummy'
import { navLinkVariants } from '../../data/motionAnimation'
import { motion } from "framer-motion"
import DarkButton from './DarkButton'
import Button from '../../subComponents/Button'
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"
import { NavHashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'


function Navbar() {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false);

  const handleMenu = () => {
    setOpen(!open)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20)
    })
  }, [])

  return (
    <motion.div
      initial={{ y: -25 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}

      className={`py-3  dark:bg-dark-bg-color 
    z-50   w-full bg-light-body-color  transition duration-100   ${scroll ? "fixed shadow-light-shadow dark:shadow-dark-outside-shadow" : "relative"} `}>
      <div className="container  m-auto">
        <div className="flex  items-center justify-between">

          {/* logo Image  */}
          <div className=' w-40   h-auto  rounded-md  shadow-light-shadow  dark:shadow-dark-shadow  cursor-pointer  flex items-center justify-center'>
            <NavHashLink smooth to="/#home"> <h3 className='text-3xl   xs:text-2xl font-bold py-2 dark:text-white'>Motahar</h3></NavHashLink>

          </div>

          {/* all navlinks  */}
          <div className='flex  items-center justify-end'>
            <div className='  md:block xs:hidden'>
              <ul className='flex items-center md:flex-row lg:gap-5 md:gap-2  xs:gap-5  xs:flex-col '>
                {
                  navlinks.map((item, index) => {
                    return <motion.li className='xs:w-4/5 xs:mx-auto  md:max-w-none'  >
                      {/* <a  href={link} className='navLink '>{title} </a> */}
                      <NavHashLink 
                         smooth to={item.link}
                        
                        className={`navLink `}
                        >{item.title}</NavHashLink>

                    </motion.li>
                  })
                }
              </ul>
            </div>

            {/* hire  and dark button  */}

            <div className='mx-5  flex items-center justify-center'>
              <DarkButton />
              <button onClick={handleMenu} className='px-2 py-1  rounded-lg  text-2xl  shadow-light-shadow  ml-3  dark:shadow-dark-outside-shadow dark:text-white  md:hidden'>{open ? <AiOutlineClose /> : <RxHamburgerMenu />}  </button>
            </div>
          </div>
        </div>
        {/* static menu  list  */}

        <motion.div className='mobileMenu  md:hidden' variants={navLinkVariants}
          animate={open ? "visible" : "hidden"}>
          <ul className='flex items-center md:flex-row lg:gap-5 md:gap-2  xs:gap-5  xs:flex-col '>
            {
              navlinks.map((item, index) => {
                return <li variants={item} className='xs:w-4/5 xs:mx-auto  md:max-w-none'>
                  {/* <a  href={link} className='navLink '>{title} </a> */}
                  <NavHashLink onClick={() => setOpen(false)} className='navLink' smooth to={item.link}>{item.title}</NavHashLink>

                </li>
              })
            }
          </ul>
        </motion.div>


      </div>
    </motion.div>
  )
}

export default Navbar