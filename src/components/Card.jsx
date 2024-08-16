import React from 'react'
import { MapPin,Phone, Globe, Instagram, Youtube, Twitter, Linkedin, Facebook} from 'lucide-react';
import map from "../images/map.png"

export function Card() {
    return (
        <div className="max-w-md mx-auto  rounded-md border space-x-2  bg-white">
            <div className='m-2 overflow-hidden'>
            <img 
                src={map}
                alt="Laptop"
                className="h-[200px] w-screen rounded-md object-cover "
            />
            </div>
            <div className="flex flex-col p-4 items-start">
            <div className="flex flex-col justify-center items-start space-x-2 mb-2">
                <div className='flex'>
                    <MapPin className="mr-2 h-5 w-5 text-gray-800" />
                    <span>Transort Nagar</span>
                    </div>
                    <button className="mt-4 rounded-full w-full bg-blue-500 text-white  flex items-center justify-center">
                        Get Direction
                    </button>
                    
                </div>
                <div className="flex items-center p-4">
                    < Phone className="mr-2 h-5 w-5 text-gray-800" />
                    <span>+91 888888888</span>
                </div>
                <div className="flex items-center p-4">
                    <Globe  className="mr-2 h-5 w-5 text-gray-800" />
                    <span>www.example.com</span>
                </div>
                <div className="flex justify-between items-center p-4 gap-4">
                    <Instagram className="mr-2 h-5 w-5 text-gray-800" />
                    <Youtube className="mr-2 h-5 w-5 text-gray-800" />
                    < Linkedin className="mr-2 h-5 w-5 text-gray-800" />
                    <Facebook className="mr-2 h-5 w-5 text-gray-800" />
                </div>




            </div>
        </div>
    )
}
