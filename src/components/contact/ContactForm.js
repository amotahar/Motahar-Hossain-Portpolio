import React from 'react'
import Button from '../../subComponents/Button'
import Input from '../../subComponents/Input'

function ContactForm() {
  return (
    <div  className='flex items-center justify-center gap-y-7  flex-col m-auto lg:w-3/5 mx-auto sm:w-full  py-10'>
        <div  className='flex justify-between  items-center  gap-x-4 w-full '>
            <Input type="text"  placeholder="Name"/>
            <Input type="text"  placeholder="Email"/>
        </div>
        <Input  type="text" placeholder="Subject*"/>
        <Input  type="textarea" placeholder="Message..." />
        <div>
            <Button   type="submit"  title="Send Message" />
        </div>
    </div>
  )
}

export default ContactForm