import { useQuery } from '@tanstack/react-query';
import React, { createContext, useState } from 'react';

export const productContext = createContext()
const ProductContext = ({children}) => {
    const [product, setProduct] = useState(null)

    // products
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    });

    // limited products
    const { data: limitedProducts = [] } = useQuery({
        queryKey: ['limitedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/limitedProducts');
            const data = await res.json();
            return data;
        }
    });

    const info = {
        products,
        limitedProducts,
        product,
        setProduct
    }
    return (
        <div>
            <productContext.Provider value={info}>
                {children}
            </productContext.Provider>
        </div>
    );
};

export default ProductContext;