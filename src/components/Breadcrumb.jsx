import React from 'react';
import { Home, Share2, Bookmark } from 'lucide-react';

export function Breadcrumb() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center bg-gray-100 md:p-8 md:pr-5 p-5">
      <div className='flex flex-col items-start w-full md:w-auto'>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:underline"
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-500">/</span>
                <a href="#" className="text-sm font-medium text-gray-500 hover:underline">
                  Automotive
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-500">/</span>
                <span className="text-sm font-medium text-gray-500">
                  Euro Collision
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <span className='mt-2 text-2xl font-bold text-gray-800 md:text-3xl'>
          Euro Collision
        </span>
      </div>

      <div className="flex flex-col md:flex-col items-center md:items-end w-full md:w-auto mt-4 md:mt-0">
        <button className="w-full md:w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 mb-2 md:mb-2">
          Book Now
        </button>
        <div className="flex space-x-2 w-full md:w-auto">
          <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-500 bg-gray-200 rounded hover:bg-gray-300 flex items-center justify-center">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </button>
          <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-500 bg-gray-200 rounded hover:bg-gray-300 flex items-center justify-center">
            <Bookmark className="mr-2 h-4 w-4" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
