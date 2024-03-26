import React from 'react'

import { AiOutlineMinusSquare, AiOutlineArrowLeft } from 'react-icons/ai';


export const Navbar = () => {
  return (
    <div className='bg-[#39AEBC] p-5 flex items-center'>
      <AiOutlineArrowLeft className='text-white mr-5'/>
      <h1 className='text-white'>
        View Audiance
      </h1>
    </div>
  )
}