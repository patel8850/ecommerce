import React from 'react'
import arrow from '../assets/Images/arrow.png'
export const Breadcrum = (props) => {
  return (
    <div className=' mt-2 flex ml-20'>
      HOME <img className='h-6 w-6' src={arrow} alt="" />Shop <img className='h-6 w-6' src={arrow} alt="" />{props.product.category} <img className='h-6 w-6' src={arrow} alt="" />{props.product.name}
    </div>
  )
}
