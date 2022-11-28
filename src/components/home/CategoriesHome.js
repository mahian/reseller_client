import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../utilities/SectionTitle';

const CategoriesHome = () => {
    const {data: CategoriesData = []} = useQuery({
        queryKey: ['CategoriesData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='container mx-auto px-3 my-20'>
            <SectionTitle title="Categories" />
            <div className='grid md:grid-cols-3 gap-5 mt-10'>
                {
                    CategoriesData.map(category => <Link to={`category/${category.category_id}`} key={category._id}><div className="flex items-center p-10 rounded-md bg-primary hover:opacity-90 text-white transition shadow-xl">
                        <img src={category.icon} alt="" className="rounded w-28 h-28 mr-3" />
                        <h2 className="text-3xl font-bold">{category.name}</h2>
                    </div></Link>)
                }

            </div>
        </div>
    );
};

export default CategoriesHome;