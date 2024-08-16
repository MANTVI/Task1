import React from 'react'
import { Star, ChevronUp, ChevronDown } from 'lucide-react';
import Accord from './Accord';
function FAQ() {
    return (
        <>
            <div className='flex flex-col items-start ml-3 mt-7'>
                <span className='text-left font-bold text-lg'> Frequently Asked Questions
                </span>
                <div className="rounded-md h-auto text-left  bg-gray-100 w-full my-3">        
                        {<Accord/>}

                </div>
                <div className="rounded-md text-left bg-gray-100 w-full my-3 ">
                    
                    {<Accord/>}
                   
                </div>
                <div className="rounded-md text-left justify-between bg-gray-100 w-full my-3 ">
                {<Accord/>}

                </div>
                <div className="rounded-md text-left bg-gray-100 w-full my-3 ">
                    
                    
                        {<Accord/>}
                   
                </div>

                <span className='text-left font-bold text-lg mt-5'>
                    1 Review for Euro collision

                </span>
                <div className="rounded-md text-left bg-gray-100 w-full my-3  ">
                    <div className='flex  gap-2 items-center bg-white  rounded-md h-[70px] pl-2'>
                        <input
                            type="text"
                            id="review"
                            name="review"
                            placeholder='review'
                            className='h-full w-full text-lg'
                        />
                    </div>
                </div>
                <div className="rounded-md text-left bg-gray-100 w-full my-3 ">
                    <div className='flex  gap-2 items-center bg-white rounded-md h-[50px] pl-2'>
                        <span className='flex items-center gap-3'>
                            {<Star size={15} />}
                            Rate us and Write a Review
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FAQ
