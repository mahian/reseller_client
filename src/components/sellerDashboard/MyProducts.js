import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../context/UserContext';

const MyProducts = () => {
    const {user} = useContext(authContext)
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://reseller-server.vercel.app/myProducts?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = id => {
        fetch(`https://reseller-server.vercel.app/products/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            console.log(res)
            refetch()
        })
        .then(err => console.log(err))
    }
    return (
        <section className='bg-gray-100 py-20'>
            <div className='container mx-auto px-3'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>image</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <td><img className='h-16 w-16 object-cover rounded-lg' src={product.image} alt="" /></td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td><p className='font-semibold text-green-400'>available</p></td>
                                    <td><button onClick={()=> handleDelete(product._id)} className='btn btn-sm btn-error'>delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default MyProducts;