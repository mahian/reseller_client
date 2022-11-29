import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext, useState } from 'react';
import { authContext } from './UserContext';

export const productContext = createContext()
const ProductContext = ({children}) => {
    const [product, setProduct] = useState(null)
    const {user} = useContext(authContext);

    // products
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://reseller-server.vercel.app/products');
            const data = await res.json();
            return data;
        }
    });

    // limited products
    const { data: limitedProducts = [] } = useQuery({
        queryKey: ['limitedProducts'],
        queryFn: async () => {
            const res = await fetch('https://reseller-server.vercel.app/limitedProducts');
            const data = await res.json();
            return data;
        }
    });

    // booked orders
    const { data: bookedOrders = [] } = useQuery({
        queryKey: ['bookedOrders'],
        queryFn: async () => {
            const res = await fetch(`https://reseller-server.vercel.app/bookedOrders?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });



    const info = {
        products,
        limitedProducts,
        product,
        setProduct,
        bookedOrders
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