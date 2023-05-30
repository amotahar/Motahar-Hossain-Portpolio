import React from 'react'

function SkillsItem({tags}) {
    
    return (
        <li className='flex  items-center justify-center  uppercase py-1 px-3  font-semibold rounded-sm   dark:shadow-inset-dark-shadow  shadow-inset-shadow dark:text-white' 
        >{tags}
    </li>
    )
}

export default SkillsItem