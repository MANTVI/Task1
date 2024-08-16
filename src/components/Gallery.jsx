import React from 'react'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpg"


function Card() {
    return (
        <div  className='p-5  bg-gray-100'>

            <div className="grid grid-col-1 md:grid md:grid-cols-4 md:grid-rows-2 gap-4 p-4 w-full">
                <div className="row-span-3 col-span-2 bg-gray-200 rounded-md overflow-hidden">

                    <img
                        src={image1}
                        alt="Laptop"
                        className="w-full h-full rounded-t-md object-cover "
                    />

                </div>
                <div className=" bg-gray-300 rounded-md overflow-hidden">
                    <img
                        src={image2}
                        alt="Laptop"
                        className="w-full h-full rounded-t-md object-cover "
                    />
              
                  
                </div>
                <div className=" bg-gray-700 rounded-md overflow-hidden">
                    <img
                        src={image4}
                        alt="Laptop"
                        className="w-full h-full   rounded-t-md object-cover "
                    />
                </div>
                <div className="  bg-gray-400 rounded-md h-auto overflow-hidden">
                        <img
                            src={image3}
                            alt="Laptop"
                            className="w-full h-full  rounded-md object-cover "
                        />
                    </div>

                <div className=" bg-gray-700 rounded-md overflow-hidden">
                    <img
                        src={image7}
                        alt="Laptop"
                        className="w-full h-full rounded-t-md object-cover "
                    />
                </div>



            </div>
        </div>
    )
}

export default Card
