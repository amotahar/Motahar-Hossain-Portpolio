import React from "react"
import {motion} from "framer-motion"


function SectionHeader({ title, description, bg }) {
    return (
        <div
        
        
        className={`" flex justify-center ${bg? "dark:bg-dip-color" : "dark:bg-dark-bg-color"}    py-10 lg:px-10  sm:px-1"`}>
            <div className="lg:w-1/2 px-5 sm:px-0 md:w-3/4 sm:w-full  m-auto    text-center  sm:mb-0">
                <h2 className="text-4xl  dark:text-white  font-bold  mb-5">{title}</h2>
                <p className="text-gray-color  text-lg">{description}</p>
            </div>
        </div>
    )
}

export default SectionHeader