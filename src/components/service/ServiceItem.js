import React from 'react'
import { BoxItem } from '../../data/motionAnimation'
function ServiceItem({service}) {
    return (
        <div  variants={BoxItem} className=' shadow-light-shadow  dark:shadow-dark-shadow  rounded-sm flex items-center justify-center gap-5 text-center  flex-col px-10 py-10  dark:shadow-dark-box-shadow'>
            <div className='w-[90px] h-[90px]  mx-auto'>
                <img src={service.icon} alt="Image not found " />
            </div>
            <h3 className='text-3xl  font-bold  dark:text-white'>{service.serviceName}</h3>
            <p className='text-xl  text-gray-color'>{service.subTitle}</p>
        </div>
    )
}

export default ServiceItem