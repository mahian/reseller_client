import React from 'react';
import SectionTitle from '../../utilitys/SectionTitle';

const CategoriesHome = () => {
    const CategoriesData = [
        {
            _id: 1,
            name: "name",
            image: "https://www.bdstall.com/asset/product-image/giant_135029.jpg"
        },
        {
            _id: 2,
            name: "name",
            image: "https://www.bdstall.com/asset/product-image/giant_135029.jpg"
        },
        {
            _id: 3,
            name: "name",
            image: "https://www.bdstall.com/asset/product-image/giant_135029.jpg"
        },
    ]
    return (
        <div className='container mx-auto px-3 my-20'>
            <SectionTitle title="Categories" />
            <div className='grid md:grid-cols-3 gap-5 mt-10'>
                {
                    CategoriesData.map(category => <div id={category._id} className="card bg-primary text-white shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={category.image} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">{category.name}</h2>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default CategoriesHome;