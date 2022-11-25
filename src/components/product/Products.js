import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    return (
        <section className='bg-gray-100 '>
            <div className='container mx-auto px-3 py-10 grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <div>
                    <div className='p-10 bg-white flex'>
                        <input type="text" placeholder="search product" className="input input-bordered input-primary w-full rounded-none" />
                        <button className="btn rounded-none">search</button>
                    </div>
                    <div className='p-10 bg-white mt-5'>
                        <h2 className='text-2xl font-semibold'>product categories</h2>
                        <ul className="menu mt-3">
                            <li><Link>Item 1</Link></li>
                            <li className="bordered"><Link>I have border</Link></li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='p-10 bg-white md:col-span-2 lg:col-span-3'>
                    <h2 className='text-3xl font-semibold'>All Product</h2>
                    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;