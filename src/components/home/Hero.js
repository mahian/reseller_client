import React from 'react';

const Hero = () => {
    return (
        <section>
            <div className="hero py-20 lg:min-h-[92vh]" style={{background: "linear-gradient(rgba(157, 215, 241, 0.8), rgba(255, 255, 255, 0)"}}>
                <div className="hero-content grid md:grid-cols-2 gap-5">
                    <div>
                        <img className='w-full rounded-lg' src="assets/buyandsell.jpg" alt="" />
                    </div>
                    <div>
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

// style={{background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://www.kreedon.com/wp-content/uploads/2022/10/high-gaming-pc.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover"}}