import React from 'react';

const Portfolio = () => {
    return (
        <div className='Portfolio p-5 my-7 mx-3'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody>
                    <tr>
                        <th>Name:</th>
                        <td>Farihatul Maria</td>
                    </tr>
                    <tr>
                        <th>Email Address:</th>
                        <td>farihatulmaria@gmail.com</td>
                    </tr>
                    <tr>
                        <th>Educational Background:</th>
                        <td>Class 9 Student</td>
                    </tr>
                    <tr>
                        <th>Skills:</th>
                        <td>HTMl , CSS , JavaScript , ReactJS, MongoDB , PhotoShop </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <h2 className='my-5 text-2xl'>Portfolio Projects </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://cdn.pixabay.com/photo/2014/11/06/10/56/airport-519020_960_720.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Tour Planer</h2>
                        <p>Tour Planer is a react js application coded by me.</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary"><a target={'_blank'} href="https://tour-planners.netlify.app/" rel="noreferrer">Live Demo</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://cdn.pixabay.com/photo/2016/03/27/20/54/wedding-reception-1284245_960_720.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Event bird</h2>
                        <p>Event bird is a react js application coded by me.</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary"><a target={'_blank'} href="https://eventbird.netlify.app/" rel="noreferrer">Live Demo</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_960_720.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Cellphone Hunter</h2>
                        <p>Cellphone Hunter is a react js application coded by me.</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary"><a target={'_blank'} href="https://cellphone-hunter.netlify.app/" rel="noreferrer">Live Demo</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;