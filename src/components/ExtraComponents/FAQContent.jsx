import React from 'react'

const FAQContent = ({id,title,content}) => {
  return (
    <div>

     <div className='flex px-3 py-5'>
                {/* badge */}
                <div className="">
                <span className="inline-flex items-center justify-center w-[30px] text-center rounded-full  bg-[rgba(66,186,150,1)]  text-lg font-medium text-white ">
                     ?
                    </span>
              </div>
              {/* title/content */}
                <div className='ps-5'>
                    <h1 className='text-white'>{title}</h1>
                    <p className='text-lightdark'>{content}</p>
                </div>
            </div>
    </div>
  )
}

export default FAQContent
