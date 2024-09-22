import React from 'react'
    import { testimonials } from '../constants'

function Testimonials() {
  return (
    <div className='flex flex-col mt-40 justify-center'>
        <h1 className='text-4xl sm:text-6xl  text-center tracking-wide'>What People are saying</h1>
        <div className='flex flex-wrap mt-5 mx-6 justify-center'>
            {testimonials.map((testimonial)=>{
                return(
                    <div className=' flex flex-col bg-neutral border border-neutral-800 p-5 m-2  w-full lg:w-[30%] md:w-[46%] rounded-md'>
                        <p>{testimonial.text}</p>
                        <div className='flex m-3 items-center'>
                            <img src={testimonial.image} alt='use image' className='rounded-full w-10 h-10 border'/>
                            <div className='flex flex-col m-2 jus'>
                                <h3>{testimonial.user}</h3>
                                <p className='text-neutral-500'>{testimonial.company}</p>

                            </div>


                        </div>


                    </div>
                )
            })}

        </div>


    </div>
  )
}

export default Testimonials