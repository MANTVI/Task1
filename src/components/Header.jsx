import React from 'react';
import logo from "../images/logo.png";
import { Search } from 'lucide-react';

function Header() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center  md:flex-row bg-black p-4">
                <img
                    src={logo}
                    alt="Logo"
                    className="mb-2 md:mb-0 md:h-8 md:w-8 rounded-md object-cover "
                />
                <div className="w-full md:w-auto flex justify-center md:justify-start md:mx-2">
                    <input
                        type="text"
                        id="more-demos"
                        name="more-demos"
                        placeholder="More Demos"
                        className="w-full mb-3 md:w-60 px-3 py-2 bg-gray-100 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="w-full flex flex-col items-center space-y-2 md:w-auto md:flex-row md:space-x-2 md:space-y-0 md:ml-auto">
                    <button
                        type="button"
                        className="w-full md:w-auto rounded-md border bg-blue-950 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Get Instant Demo Access
                    </button>
                    <button
                        type="button"
                        className="w-full md:w-auto rounded-md border bg-green-800 px-3 py-2 text-sm text-white font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Buy Now
                    </button>
                </div>
            </div>


            <div className='flex flex-col w-full md:flex-row md:justify-between md:items-center 
            bg-blue-800 p-4  md:pr-8'>
                <div className="flex flex-col items-start w-full md:flex-row md:justify-between md:w-auto md:gap-3">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-8 w-8 md:m-auto rounded-md object-cover  hidden md:block"
                    />

                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder='Ex: Food, Service, etc'
                        className="w-full md:mt-1 px-2 py-2 mt-2  bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder='Enter your location'
                        className="w-full md:mt-1 px-3 py-2 mt-2  bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                    <button
                        type="button"
                        className="mt-2 md:mt-1 block h-[36px] w-full md:w-[36px] px-3 py-2 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <Search size={15} color='blue' />
                    </button>
                </div>
                <div className="flex flex-row  items-start gap-3 mt-2 md:flex-row md:space-x-2 md:space-y-0">
                    <button
                        type="button"
                        className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-blue-950"
                    >
                        Add Listing
                    </button>
                    <button
                        type="button"
                        className="rounded-md border border-white px-3 py-2 text-sm text-white font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Signing
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
