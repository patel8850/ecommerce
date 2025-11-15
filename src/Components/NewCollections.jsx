import React from 'react'
import { new_Collection } from '../assets/newCollection'
import { Item } from './Item'

export const NewCollections = () => {
  return (
    <div className="px-4 sm:px-8">
      <h1 className="flex flex-col items-center text-3xl sm:text-5xl mt-5 text-center">
        New Collections
        <hr className="h-[4px] sm:h-[6px] bg-black rounded-full w-[150px] sm:w-[200px] m-2 mb-7" />
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {new_Collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.newprice}
              oldprice={item.oldprice}
            />
          )
        })}
      </div>
    </div>
  )
}
