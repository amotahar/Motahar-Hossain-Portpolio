import React from 'react'
import { aboutData } from '../../data/dummy'
// import Button from '../../subComponents/Button'
import AboutHeader from './AboutHeader'

import SkillsItem from './SkillsItem'
function About() {


  const { leftTitle, rightTitlte,description,  cvLink } = aboutData;

  
  return (
    <div className='dark:bg-dark-bg-color' id='about'>
      <div className="container mx-auto">
        <div className='flex flex-wrap items-center justify-center'>
          <div

            className='relative flex flex-col gap-10 lg:w-2/5 sm:w-full lg:p-10 sm:p-2'>
            <AboutHeader title={leftTitle} />
            <p className='text-xl leading-10 text-silver-color '>{description}</p>
            <div>
            <a  target="_blank " className='inline-block button' href={cvLink}>DownLoad CV</a>
            </div>
            
          </div>
          <div className='relative flex flex-col gap-10 p-10 lg:w-3/5 sm:w-full sm:p-2'>
            <AboutHeader title={rightTitlte} />
            <div>

              {aboutData.skills.map(item => (
                
                <div>
                <h3 className='text-2xl font-bold dark:text-white'>{item.catagory}</h3>
                <ul  className='flex  flex-wrap items-center justify-start gap-3 mt-2 mb-3'>
                    {item.tags.map((tag, ind) => {
                        return  <SkillsItem key={ind}  tags={tag}/>
                    })}
                    
    
                </ul>
            </div>
                ))}


              {/* {skills.map((skill, ind)=>  <SkillsItem  key={ind} skills={skill}/>)} */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About