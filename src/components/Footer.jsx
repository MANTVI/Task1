import React from 'react'
import { Copyright, Twitter, Instagram, Youtube, Linkedin, Facebook, } from 'lucide-react';


export default function Footer() {
  return (
    <>
      <section className="flex w-full py-8 justify-center items-center flex-col bg-gray-100">

        <div className="w-auto p-8 ">
          <ul className="-m-5 flex flex-wrap items-center">
            <li className="p-5">
              <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                Home
              </a>
            </li>
            <li className="p-5">
              <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                Home
              </a>
            </li>
            <li className="p-5">
              <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                Blog
              </a>
            </li>
            <li className="p-5">
              <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                Blog
              </a>
            </li>
            <li className="p-5">
              <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                Contact
              </a>
            </li>
            <li className="p-5">
              <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                Contact
              </a>
            </li>

          </ul>
        </div>




      </section>
      <div className='flex flex-col justify-center items-center bg-gray-300 text-gray-800 h-[200px] '>
        <span className='flex  justify-center items-center gap-2 mb-3'>Copyright
          <Copyright size={15} />
          2024
        </span>
        <span>Developed by Vimal </span>
        <div className='flex gap-10 mt-6'>
        <Facebook />
        <Twitter />
        <Instagram />
        <Linkedin />
        <Youtube />
        </div>


      </div>
    </>
  );
}
