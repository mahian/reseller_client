import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import BookingModal from './BookingModal';
import Product from './Product';

const Products = () => {
    // categories
    const { data: CategoriesData = [] } = useQuery({
        queryKey: ['CategoriesData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    const { products, product, setProduct } = useContext(productContext)
    return (
        <section className='bg-gray-100 min-h-screen'>
            <div className='container mx-auto px-3 py-10 grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <div>
                    <div className='p-10 bg-white flex'>
                        <input type="text" placeholder="search product" className="input input-bordered input-primary w-full rounded-none" />
                        <button className="btn rounded-none">search</button>
                    </div>
                    <div className='p-10 bg-white mt-5'>
                        <h2 className='text-2xl font-semibold'>product categories</h2>
                        <ul className="menu mt-3">
                            {
                                CategoriesData.map(category => <li><Link>{category.name}</Link></li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className='p-10 bg-white md:col-span-2 lg:col-span-3'>
                    <h2 className='text-3xl font-semibold'>All Product</h2>
                    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                        {
                            products.map(product => <Product key={product._id} setProduct={setProduct} product={product} />)
                        }
                    </div>
                    {product &&
                        <BookingModal setProduct={setProduct} product={product}/>
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;