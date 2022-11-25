import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../utilities/SectionTitle';

const CategoriesHome = () => {
    const CategoriesData = [
        {
            _id: 1,
            name: "full pc",
            image: "https://www.bdstall.com/asset/product-image/giant_135029.jpg"
        },
        {
            _id: 2,
            name: "parts and component",
            image: "https://www.bdstall.com/asset/product-image/giant_135029.jpg"
        },
        {
            _id: 3,
            name: "monitor",
            image: "https://www.bdstall.com/asset/product-image/giant_135029.jpg"
        },
    ]
    return (
        <div className='container mx-auto px-3 my-20'>
            <SectionTitle title="Categories" />
            <div className='grid md:grid-cols-3 gap-5 mt-10'>
                {
                    CategoriesData.map(category => <Link to="products" id={category._id}><div className="flex items-center p-10 rounded-md bg-primary text-white shadow-xl">
                        <img src={category.image} alt="Shoes" className="rounded-full w-28 h-28" />
                        <h2 className="text-3xl font-bold">{category.name}</h2>
                    </div></Link>)
                }

            </div>
        </div>
    );
};

export default CategoriesHome;