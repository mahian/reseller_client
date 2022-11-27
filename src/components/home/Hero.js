import React from 'react';

const Hero = () => {
    return (
        <section style={{background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://www.kreedon.com/wp-content/uploads/2022/10/high-gaming-pc.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover"}}>
            <div className="hero py-20 text-white lg:min-h-[92vh]">
                <div className="hero-content md:text-center">
                    <div className='max-w-4xl'>
                        <h1 className="text-5xl font-bold">Classified platform, a Marketplace Connecting Buyers and Sellers</h1>
                        <p className="py-6">Reseller is the fastest online marketplace in Bangladesh. Start buying and selling today! Make shopping SIMPLE, SECURE and FAST on the largest marketplace in Bangladesh. Discover what you need and sell all sorts of products in our simple yet powerful platform.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;