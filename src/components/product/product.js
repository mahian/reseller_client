import React from 'react';
import BookingModal from './BookingModal';

const Product = ({info}) => {
    const {title, desc, price, condition, image, date, userName, userImg} = info;
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src={image} alt="" />
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    <p className="text-gray-700 text-base mb-4">{desc}</p>
                    <p className="text-gray-700 text-base mb-4">{price}</p>
                    <p className="text-gray-700 text-base mb-4">{condition}</p>
                    <p className="text-gray-700 text-base mb-4">{date}</p>
                    <img className='h-5' src={userImg} alt="" />
                    <p className="text-gray-700 text-base mb-4">{userName}</p>
                    <label htmlFor="booking-modal" className="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Book now</label>
                </div>
            </div>
            <BookingModal info={info}/>
        </div>
    );
};

export default Product;