import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    });
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
                        {
                            products.map(product => <Product key={product._id} info={product}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;