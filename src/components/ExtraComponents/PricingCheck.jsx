import React from 'react'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { RiCheckLine } from "react-icons/ri";
const PricingCheck = (item) => {

  const {title,id}=item;
  return (
    <div>
      <div className='flex items-center gap-10 pb-5'>
      <div className='relative flex items-center justify-start'>
      <span><RiCheckboxBlankCircleFill className='text-[rgba(78,191,162,.2)] absolute text-[27px] top-[-10px]' /></span>
     <span><RiCheckLine className='absolute top-[-4px] left-[6px] text-[rgba(78,191,162,1)] '/></span>
      </div>
      <h6 className='text-lg font-HKGroteskPro-serif font-normal' >{title}</h6>
      </div>
    </div>
  )
}

export default PricingCheck
