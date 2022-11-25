import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section className='bg-gray-100 '>
            <div className='container mx-auto px-3 py-10 grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <div>
                    <div className='p-10 bg-white flex'>
                        <input type="text" placeholder="search product" className="input input-bordered input-primary w-full rounded-none" />
                        <button className="btn rounded-none">search</button>
                    </div>
                    <div className='p-10 bg-white mt-5'>
                        <h2 className='text-2xl font-semibold'>product categories</h2>
                        <ul className="menu mt-3">
                            <li><Link>Item 1</Link></li>
                            <li className="bordered"><Link>I have border</Link></li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='p-10 bg-white md:col-span-2 lg:col-span-3'>
                    <h2 className='text-3xl font-semibold'>All Product</h2>
                    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5'>

                        <div class="flex justify-center">
                            <div class="rounded-lg shadow-lg bg-white">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center">
                            <div class="rounded-lg shadow-lg bg-white">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center">
                            <div class="rounded-lg shadow-lg bg-white">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>
                                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;