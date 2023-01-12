import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-[600px]" style={{backgroundImage: "url('https://i.postimg.cc/Hs7fkrrS/banner.jpg')"}}>
            <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content grid grid-cols-2">
                <div className="max-w-md text-white">
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;