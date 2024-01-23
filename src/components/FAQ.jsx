import React from 'react'
import { faqs } from '../constants'
import FAQContent from './ExtraComponents/FAQContent'

const FAQ = () => {
  return (
      <div>
        {/* FAQ */}
        <div className=' bg-dark w-[100%] h-[1500px] xs:h-[1000px] relative bottom-[18.25rem] pt-[16rem] '>
        <div className=' pt-15 md:pt-20  w-[96%] sm:w-[80%] h-[1000px] ss:h-[600px] m-auto  ss:px-5 '>
          <div className='grid grid-cols-1  ss:grid-cols-2 ss:grid-rows-2 grid-flow-col grid-rows-4 pt-20 md:pt-1'>
            {faqs.map(item=>{
              return(
                <FAQContent key={item.id} {...item}/>
              )
            })}
          </div>
      
        </div>
        </div>
        <div className="relative  ">
      <div className=" text-smoke shape shape-bottom border-smoke ">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>      </div>
    </div>
      </div>
  )
}

export default FAQ
