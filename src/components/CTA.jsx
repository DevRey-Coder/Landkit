
import React from 'react'
import styles from '../style'

const CTA = () => {
  return (
    <div>
      <div className='w-[100%] pt-15 relative bottom-[10rem]'>
        <div className='w-[80%] m-auto'>
          <div className={`${styles.flexCenter}`}>
            <div className='mb-4'>
              <span className={`${styles.PricingBadge} text-gray-700 bg-gray-700  px-3`}>
                  GET STARTED
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
