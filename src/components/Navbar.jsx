import React from 'react'
import {navLinks} from "../constants/index.js"
import Logo from '../assets/Logo.svg'

const Navbar = () => {
  return (
    <div className='w-full'>
      <div className='flex '>
      <div>
<img src={Logo} alt="" /></div>
</div>
    </div>
  )
}

export default Navbar
