import React from 'react'
import { new_Collection } from '../assets/newCollection'
import { Item } from './Item'
export const NewCollections = () => {
  return (
    <div>
      <h1 className=' flex-col items-center flex text-5xl mt-5'>New Collections <hr className="h-[6px] bg-black rounded-full w-[200px] m-2 mb-7"/></h1>
     
      <div className='grid grid-cols-4 '>
        {new_Collection.map((item,i)=>{
          return  <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                newprice={item.newprice}
                oldprice={item.oldprice}
              />
        })}
      </div>
    </div>
  )
}
