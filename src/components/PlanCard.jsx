import React from 'react'
import { Check } from 'lucide-react'
export default function PlanCard({price,title,description,features,isPopular}) {
  return (
    <div className='plan-card border flex flex-col justify-between bg-white/20 backdrop-blur-lg rounded-lg h-full p-6 hover:shadow-md text-left relative '>
    {
        isPopular &&(
            <div className='popular-tag absolute -top-6 left-0 bg-indigo-500 text-white px-2 py-1 rounded-t-lg w-full text-center'>Popular</div>
        )
    }
    <div className=' items-end'>
        <h1 className='font-extrabold text-3xl'>${price} <span className=' font-normal text-gray-500 text-2xl align-bottom'>/month</span></h1>
        
        <h2 className='font-bold text-xl my-2'>
           {title}
        </h2>
        <p>{description}</p>
        <div className='border-t border-gray-400 opacity-20 my-3 flex-grow'></div>
        <ul>
           {
            features.map((feature,index)=>{
                return(
                    <li key={index} className='flex flex-row items-center text-gray-700 gap-2 mb-2'>
                         <div className='w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center'>
                            <Check className='inline-block  text-white w-3 h-3' />
                            
                         </div>
                         <p>{feature}</p>
                    </li>
                )
            })
           }
        </ul>
    </div>
    <div>
        <button className='bg-indigo-500 py-2 mt-3 rounded-lg text-white w-full hover:bg-indigo-400'>Select Plan</button>

    </div>
    </div>
  )
}
