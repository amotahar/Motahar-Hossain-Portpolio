import React from 'react'
import { projectsData } from '../../data/dummy'

import SectionHeader from "../../subComponents/SectionHeader"
import SinglePortfolio from './SinglePortfolio'

function Portfolio() {
const {portfolioData, title} = projectsData;
  
return (
    <div className='py-10 dark:bg-dark-bg-color bg-light-body-color'  id='portfolio'>
      <SectionHeader  title={title} />
      <div className="container mx-auto">
        <div className='grid items-center justify-center gap-5 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1'>
          {
            portfolioData.map(item => (
             <SinglePortfolio  key={item.id} item={item}/>
            ))
          }         
        </div>
      </div>
    </div>
  )
}

export default Portfolio