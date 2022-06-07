import React from 'react';

const  Partners = () => {
    return (
        <div div className='my-20'>
            <h2 className='text-4xl ml-8 title'> Trusted Partners </h2>
            <div className='my-4 grid grid-cols-2 md:grid-cols-4 items-center'>
                <img className='partners' src="https://i.postimg.cc/MH39dMZz/partner-1.png" alt="partners-1" />
                <img className='partners' src="https://i.postimg.cc/tRBvXf38/partner-4.png" alt="partners-2" />
                <img className='partners' src="https://i.postimg.cc/CLdPdNJ5/partner-2.png" alt="partners-3" />
                <img className='partners' src="https://i.postimg.cc/Vvk7qB87/partner-3.png" alt="partners-4" />
            </div>
        </div>
    );
};

export default Partners;