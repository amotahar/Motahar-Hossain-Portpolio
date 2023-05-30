import React from 'react'
import SectionHeader from '../../subComponents/SectionHeader'
import ContactForm from './ContactForm'
import { FaEnvelope, FaMobile, FaStoreAlt } from "react-icons/fa"
import ContactInfoItem from './ContactInfoItem'
import { contactData } from '../../data/dummy'
function Contact() {

  const { title, subTitle, contactInfos } = contactData;
  return (
    <div className='border dark:bg-dark-bg-color dark:border-none' id='contact'>

      {/* contact  header start  */}
      <SectionHeader title={title} description={subTitle} />
      <div className='container mx-auto'>
        {/* contact info start  */}
        <div className='grid gap-8 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
          {contactInfos.map((item, index) => (
            <ContactInfoItem title={item.header} icon={item.icon} subTitle={item.subText} />
          ))}



        </div>

        <ContactForm />
      </div>
    </div>
  )
}

export default Contact