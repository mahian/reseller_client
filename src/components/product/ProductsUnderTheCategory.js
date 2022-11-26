import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Product from './Product';

const ProductsUnderTheCategory = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='container mx-auto px-3 py-20'>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <Product key={product._id} info={product} />)
                }
            </div>
        </div>
    );
};

export default ProductsUnderTheCategory;