import React, { useState } from 'react'
import styles, { animation } from '../style.js';
import PricingCheck from './ExtraComponents/PricingCheck.jsx';
import { checks } from '../constants/index.js';
import './ExtraComponents/PricingSwitch.css';
import { useSpring,animated } from 'react-spring';



const Pricing = () => {
  const [isAnnual,setIsAnnual]=useState(true);

  const bill =()=>{
    return isAnnual ? 29 : 49;
  }

 const animatedbill=useSpring({
  number: bill(),
  from:{number:0},
  config:{duration: 200},
 })


  
  return (
    <div>
      {/* PRICING */}
      <div className='bg-smoke pt-9 md:pt-12 ' >
        <div className=" container m-auto px-[20px]">
          <div className={`text-center ${styles.flexCenter} flex-wrap flex-col mx-auto  xs:w-[84%] md:w-[60%]`}>
              <h2 className={`${styles.Pricingh2} pb-[1.5rem] text-center w-full `}>Fair, simple pricing for all.</h2>
              <p className={`${styles.PricingP} `}>
                All types of businesses need access to development resources, 
                so we give you the option to decide how much you need to use.</p>
                <form  className={`${styles.flexCenter} text-lightdark mb-7 md:mb-9 w-full gap-2`}>
                  <span className='font-HKGroteskPro-serif'>Annual</span>
                  {/* Toggle switch */}
                  <input type="checkbox" id="switch" className='billing-switch' onChange={()=>setIsAnnual(!isAnnual)} style={{}} /><label className='bill-switch-label me-2' htmlFor='switch' ></label>
                  <span className='font-HKGroteskPro-serif'>Monthly</span>
                </form>
          </div>
          {/* Price Card */}
          <div className={`  max-w-[90%]  m-auto pb-5 ${styles.flexCenter}  flex-wrap  `}>
            {/* Right Card */}
            <div className={`PricingCard container min-h-[600px] bg-[rgba(255,255,255,1)] ${styles.PricingCard} ${animation.lift} relative z-0`}>
              <div className=" ss:px-5 min-h-[530px] pt-10 pb-7 ">
                  {/* monthly/annual Price */}
                <div className={`${styles.flexCenter} flex-col ss:px-5 `}>
                  <span className={ `${styles.PricingBadge}`}>
                    <span className='font-HKGroteskPro text-[0.75rem] ' >STANDARD</span>
                  </span>
                
                  <div className={` w-[100%] text-center mt-10 flex justify-center `}>
                    <span className='mt-[15px] text-[1.9375rem] '>$</span>
                    <animated.span className='text-[3.8125rem] font-normal font-HKGroteskPro-serif' annual-price="29"  monthy-price="49">
                      {animatedbill.number.to((value) => value.toFixed(0))}
                      </animated.span>
                    <span className='text-[1.9375rem] pt-[40px]'>/mo</span>
                  </div>
                  <div className='flex justify-center font-HKGroteskPro-serif text-lightdark mb-[3rem]'>
                    <span>per seat</span>
                  </div>
                  <div className='flex justify-start flex-col w-[100%] '>
                    {checks.map((item)=>{
                      return(

                        <PricingCheck key={item.id} {...item}/>
                      )
                      
                    })}
                  </div>
                </div>
              </div>
                  <div className={`bg-primary w-[100%] h-[70px] absolute bottom-0 rounded-b-md text-center ${styles.flexCenter}`}  >
                    <a href="#" className=' text-white font-HKGroteskPro-serif text-lg'>Get it now</a>
                  </div>
            </div>
            {/* left Card */}
            <div className={` bg-[rgba(255,255,255,0.7)] min-h-[530px] ${styles.PricingCard} ${animation.lift} `}>
              <div className= {`xs:px-12  py-14 min-h-[460px] `} >
                <div className={`${styles.flexCenter} flex-col px-5`}>
                    <div className={ `${styles.PricingBadge} mb-20 `}>
                      <h6 className='text-sm font-HKGroteskPro-serif pt-1'>ENTERPRISE</h6>
                    </div> 
                    <div className='py-5 ss:px-5'>
                      <p className='text-xl text-lightdark text-center indent-8 font-[0.5px] leading-10'>We offer variable pricing with discounts for larger organizations. 
                        Get in touch with us and we’ll figure out something that works for everyone.</p>
                      </div> 
                </div>
                 
              </div>
              <div className={`min-h-[70px] w-[100%] bg-[rgba(217,226,239,1)]  ${styles.flexCenter} rounded-b-md`}>
                    <a href="" className='font-HKGroteskPro-serif font-normal text-lg text-lightdark'>Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Pricing
