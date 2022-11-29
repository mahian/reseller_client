import React, { useContext } from 'react';
import { productContext } from '../../context/ProductContext';
import SectionTitle from '../../utilities/SectionTitle';
import BookingModal from '../product/BookingModal';
import Product from '../product/Product';

const HomeProduct = () => {
    const { limitedProducts, product, setProduct } = useContext(productContext)
    return (
        <div className='container mx-auto px-3 py-10'>
            <SectionTitle title="Our Products" />
            <div className='grid lg:grid-cols-3 gap-10 mt-20'>
                {
                    limitedProducts.map(product => <Product key={product._id} product={product} setProduct={setProduct} />)
                }
            </div>
            {
                product &&
                <BookingModal product={product} setProduct={setProduct}/>
            }
        </div>
    );
};

export default HomeProduct;