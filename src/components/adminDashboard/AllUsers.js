import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://reseller-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    const handleDelete = id =>{
        fetch(`https://reseller-server.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            refetch();
            console.log(res)
        })
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
                                <th>email</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td><img className='h-12 w-12 object-cover rounded-full' src={user.image} alt="" /></td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button onClick={()=> handleDelete(user._id)} className="btn btn-sm btn-error mr-3">delete</button>
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

export default AllUsers;