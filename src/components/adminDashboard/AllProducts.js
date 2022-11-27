import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllProducts = () => {
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    });
    const handleDelete = id => {
        fetch(`http://localhost:5000/products/${id}`, {
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
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>image</th>
                                <th>name</th>
                                <th>category</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td>
                                        <button onClick={()=> handleDelete(product._id)} className="btn btn-sm btn-error mr-3">delete</button>
                                        <button className="btn btn-sm btn-success">update</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllProducts;