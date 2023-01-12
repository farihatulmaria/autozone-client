import { faComputer, faEarthAsia, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='text-center mx-4'>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="stat">
                    <FontAwesomeIcon icon={faEarthAsia} className='mx-auto text-5xl my-5'/>
                    <div className="stat-value">192</div>
                    <div className="stat-title">Country</div>
                </div>
                
                <div className="stat">
                    <FontAwesomeIcon icon={faComputer} className='mx-auto text-5xl my-5'/>
                    <div className="stat-value">4,200 +</div>
                    <div className="stat-title">Projects Completed</div>
                </div>
                <div className="stat px-20 py-5">
                    <FontAwesomeIcon icon={faUsers} className='mx-auto text-5xl my-5'/>
                    <div className="stat-value">50,000 +</div>
                    <div className="stat-title">Happy Client</div>
                </div>
                <div className="stat px-20 py-5">
                    <FontAwesomeIcon icon={faThumbsUp} className='mx-auto text-5xl my-5'/>
                    <div className="stat-value">5,000 +</div>
                    <div className="stat-title">Feedbacks</div>
                </div>
            
            </div>
        </div>
    );
};

export default BusinessSummary;