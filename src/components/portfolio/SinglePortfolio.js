import React from 'react'
import { BoxItem } from '../../data/motionAnimation'
import {MdLiveTv}  from "react-icons/md"
import {BsFileEarmarkCodeFill}  from "react-icons/bs"

function SinglePortfolio({item}) {
    const {projectName, tags, code, demo, image} = item; 
    console.log(item)


    return (
        <div className='p-4 rounded-lg shadow-light-shadow dark:shadow-dark-outside-shadow'>
            <div className="flex items-center justify-center">
                <img className='w-full rounded-lg aspect-video' src={image} alt="Image not found " />
            </div>
            <div className='flex flex-col mt-2'>
                <h2 className='text-2xl font-bold dark:text-white'>{projectName} </h2>
                <span className='block my-1 text-lg font-bold dark:text-white'>Technology : </span>
                <ul className='flex flex-wrap items-center justify-start gap-x-2 gap-y-1 dark:text-white'>
                    {tags.map(single => <li  className='technologyIcon'> {single}</li>)}
                        
                  
                </ul>

                <div className="flex items-center justify-around gap-5 mt-3">                    
                    <a  href={demo} target="_blank" className='portfolioLink'> <span  className="text:black dark:text-white"> <MdLiveTv/></span> Demo</a>
                    <a href={code}  target="_blank"   className='portfolioLink' >  <span  className="text:black dark:text-white"> <BsFileEarmarkCodeFill/></span> Code </a>
                    
                </div>
            </div>
        </div>
    )
}

export default SinglePortfolio