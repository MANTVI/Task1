import React from 'react';
import { Card } from './Card';
import ContactForm from './ContactForm';
import { CirclePlay, Clock, CarFront, CreditCard } from 'lucide-react';
import FAQ from './FAQ';

function Content() {
  return (
    <div className="flex flex-col h-full w-full md:flex-row  bg-gray-100">
      <div className="basis-[70%] p-4">
        <div className="rounded-md text-left bg-gray-100 p-4">

          <div className='flex  gap-2 items-center bg-gray-300 border  rounded-md h-[50px] pl-2'>
            <CirclePlay size={24} color="blue" />
            checkout <span className='font-bold'>Euro collision</span>
          </div>
          <div className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, maiores expedita impedit sed in cupiditate quaerat possimus tenetur temporibus similique tempore quos eius blanditiis adipisci optio error. Corrupti sequi sapiente nesciunt perspiciatis hic atque repudiandae doloremque consequuntur, autem quae praesentium magni est error nihil voluptatum id pariatur, odio cumque. Sit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, maiores expedita impedit sed in cupiditate quaerat possimus tenetur temporibus similique tempore quos eius blanditiis adipisci optio error. Corrupti sequi sapiente nesciunt perspiciatis hic atque repudiandae doloremque consequuntur, autem quae praesentium magni est error nihil voluptatum id pariatur, odio cumque. Sit.





          </div>
          <div className='flex mt-5 gap-4'>
            <CreditCard color="blue" />
            <span>Accepts credit Cards</span>
            <CarFront color="blue" />
            <span>Auto Repair</span>
            <CarFront color="blue" />
            <span>Body Shops</span>
            <CarFront color="blue" />
            <span>Car Wash</span>

          </div>
        </div>
        {<FAQ />}
      </div>
      <div className="basis-[30%]  p-4">
        <div className="rounded-md text-left ">
          <div className='flex  mb-4 mt-4 items-center bg-white   rounded-md h-[50px] pl-2'>
            <Clock size={24} color="black" />
            <div className='flex  gap-12 items-center' >
              <span className='text-red-600 text-left pl-2'>Closed Now</span>
              <span className='text-right text-xs pr-2'>09:00 AM - 05:00 PM</span>
            </div>
          </div>



        </div>
        {<Card />}
        {<ContactForm />}
      </div>
    </div>
  );
}

export default Content;
