import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../utilities/SectionTitle';
import BookingModal from '../product/BookingModal';
import Product from '../product/Product';

const HomeProduct = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/limitedProducts');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='container mx-auto px-3 py-10'>
            <SectionTitle title="Our Products"/>
            <div className='grid lg:grid-cols-3 gap-10 mt-20'>
                {
                    products.map(product => <Product key={product._id} info={product}/>)
                }
            </div>
            <BookingModal/>
        </div>
    );
};

export default HomeProduct;