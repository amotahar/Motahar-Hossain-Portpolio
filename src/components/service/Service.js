import React from 'react'
import { servicesData } from '../../data/dummy'
import SectionHeader from '../../subComponents/SectionHeader'
import ServiceItem from './ServiceItem'
function Service() {

  const { title, description, services } = servicesData;
  console.log(services)
  return (
    <div className='dark:bg-dark-bg-color lg:py-10' id='serrvice'>

      {/* section Header  */}
      <SectionHeader bg="true" title={title} description={description} />

      <div className='container mx-auto'>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2   sm:grid-cols-1  lg:gap-8  xs:gap-4 py-10 sm:py-2">
           {services.map((service, index) => {
           return  <ServiceItem key={index} service={service} />
          })} 

        </div>
      </div>
    </div>
  )
}

export default Service