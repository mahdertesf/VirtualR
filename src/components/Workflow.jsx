import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import code from '../assets/code.jpg'
import {checklistItems} from '../constants'

function Workflow() {
  return (
    <div className='flex flex-col mx-4 mt-20 lg:mt-1'>
        <h1 className=' text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mb-10 lg:mb-20 '>Accelerate your <span className='bg-gradient-to-r
         from-orange-500 to-red-800 text-transparent bg-clip-text'>coding workflow</span></h1>
        <div className='flex flex-wrap justify-center gap-10 '>
            <img src={code} alt='code' className=' w-full lg:w-[45%] h-full'/>
            <div className='flex flex-col w-full items-center  lg:w-[45%] pt-4'>
                {checklistItems.map((item)=>{
                    return(
                        <div key={item.title} className=' mb-6 px-20 h-full '>
                            <div className='flex mb-3  items-center gap-4'>
                                <FaRegCheckCircle className='text-green-500 ' />
                                <h3 className=''>{item.title}</h3></div>
                            <p className='text-neutral-500 '>{item.description}</p>
                        </div>
                    )
                })}

            </div>

        </div>

    </div>
  )
}

export default Workflow