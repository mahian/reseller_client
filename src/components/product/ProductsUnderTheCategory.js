import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { productContext } from '../../context/ProductContext';
import BookingModal from './BookingModal';
import Product from './Product';

const ProductsUnderTheCategory = () => {
    const { product, setProduct } = useContext(productContext)
    const products = useLoaderData()
    return (
        <div className='container mx-auto px-3 py-20'>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <Product key={product._id} product={product} setProduct={setProduct} />)
                }
            </div>
            {
                product &&
                <BookingModal product={product} setProduct={setProduct}/>
            }
        </div>
    );
};

export default ProductsUnderTheCategory;