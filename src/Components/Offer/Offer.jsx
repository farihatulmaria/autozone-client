import React from 'react';

const Offer = () => {
    return (
        <div className='offer my-8 mx-5'>
            <h2 className='text-3xl title'>What's Hot</h2>
            <div className="grid grid-cols-1 gap-5 text-white md:grid-cols-2 lg:grid-cols-3 my-5">
                <div className="single-offer">
                    <div className="card bg-base-100 shadow-xl !rounded-none " style={{backgroundImage:"url('https://i.postimg.cc/7Y9Wrrsm/car-1.jpg')",backgroundPosition:"center"}}>
                        <div className="card-body !rounded-none">
                            <h3 className="card-title font-light">Lamps & Lights</h3>
                            <h2 className="card-title text-3xl">MEGA SALE</h2>
                            <p>FROM 450$</p>
                            <div className="card-actions justify-start mt-3">
                                <button className='rounded-none'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-offer">
                    <div className="card bg-base-100 shadow-xl !rounded-none" style={{backgroundImage:"url('https://i.postimg.cc/HkLPpvFH/car-2.jpg')",backgroundPosition:"center"}}>
                        <div className="card-body !rounded-none">
                            <h2 className="card-title text-3xl">BODY PARTS</h2>
                            <h3 className="card-title font-light">FOR ANY VEHICLE</h3>
                            <p>Coupe, sedan, suv and many more</p>
                            <div className="card-actions justify-start mt-3">
                                <button className='rounded-none'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-offer">
                    <div className="card bg-base-100 shadow-xl !rounded-none" style={{backgroundImage:"url('https://i.postimg.cc/TPL7bLR4/car-3.jpg')",backgroundPosition:"center"}}>
                        <div className="card-body !rounded-none">
                            <h2 className="card-title text-3xl">ENGINE</h2>
                            <h3 className="card-title font-light">SYSTEM</h3>
                            <p>Prices Reduction</p>
                            <div className="card-actions justify-start mt-3">
                                <button className='rounded-none'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;