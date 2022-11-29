import React from 'react';

const Product = ({ product, setProduct }) => {
    const { title, price, condition, image, date, userName, userImg, original_price } = product;
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white w-full">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg h-60 w-full object-cover" src={image} alt="" />
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-bold mb-2">{title}</h5>
                    <div className='flex items-center'>
                        <h3 className="text-primary font-bold mr-3 text-3xl">{price}৳</h3>
                        <p className="text-gray-500 font-semibold relative before:content-[''] before:w-full before:h-[1px] before:bg-gray-400 before:absolute before:top-[13px]">{original_price}৳</p>
                    </div>
                    <p className="text-gray-700 font-semibold mt-2"><strong>condition : </strong>{condition}</p>
                    <div className='flex items-center mt-4 mb-7'>
                        <img className='h-10 w-10 rounded-full object-cover' src={userImg} alt="" />
                        <div className='ml-3'>
                            <p className="text-gray-700 font-bold">{userName}</p>
                            <p className="text-gray-700 text-xs font-semibold">{date}</p>
                        </div>
                    </div>
                    <label htmlFor="booking-modal" onClick={() => setProduct(product)} className="w-full cursor-pointer px-6 py-2.5 bg-primary text-white font-medium uppercase rounded shadow-md hover:opacity-95 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:opacity-100 active:shadow-lg transition duration-150 ease-in-out">Book now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;