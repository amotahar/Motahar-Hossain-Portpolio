import React from 'react'
import { experienceData } from '../../data/dummy'
import SectionHeader from '../../subComponents/SectionHeader'
import ExperienceItem from './ExperienceItem'
function Experience() {

    const {title, experienceItems}  = experienceData;
    return (
        <div  className='dark:bg-dark-bg-color lg:py-10'  id='experience'>
            <div className="container m-auto">
                <SectionHeader title={title} />
                {/* experience element data  */}
                <div
              
                className='grid gap-8 md:grid-cols-2 sm:grid-cols-1'>
                  {experienceItems.map((item, ind) => {
                    return  <ExperienceItem  key={ind} item={item} />
                  })}
                
                  
                </div>

            </div>
        </div>
    )
}

export default Experience