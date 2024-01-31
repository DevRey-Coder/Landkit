import { IoIosArrowRoundForward } from "react-icons/io";
import React from 'react'
import styles from '../style'
import './ExtraComponents/CTAButton.css'
const CTA = () => {
  return (
    
      <div className='w-[100%] pt-15  relative bottom-[43rem] xs:bottom-[42rem] sm:bottom-[45rem] md:bottom-[40rem]'>
        <div className=' w-[80%] md:w-[55%] m-auto '>
          <div className={`${styles.flexCenter} flex-col text-center`}>
            <div className='mb-6'>
              <span className={`text-smoke text-sm opacity-[.3] font-HKGroteskPro-serif font-thin rounded-xl indent-10 bg-gray-700  px-3 pb-1`}>
                  GET STARTED
              </span>
            </div>
              <h2 className='text-white text-4xl mb-5 font-HKGroteskPro-serif font-normal'>Get Landkit and save your time.</h2>
              <p className='text-lightdark text-lg mb-10 font-HKGroteskPro-serif '>Stop wasting time trying to do it the "right way" and build a site from scratch.
                 Landkit is faster, easier, and you still have complete control.</p>
                 <div className=" buyitnow flex h-[60px] w-[150px] items-center justify-center gap-2 rounded-md bg-[rgba(66,186,150,1)] cursor-pointer">
              <a href="#" className="text-white ">
                Buy it now
              </a>
              <IoIosArrowRoundForward className="text-white text-2xl cursor-pointer" />
                 </div>
          </div>
        </div>
      </div>
    
  )
}

export default CTA
