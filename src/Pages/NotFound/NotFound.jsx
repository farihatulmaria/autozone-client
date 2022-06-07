import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <section>
            <div className="hero h-[600px]">
                <div className="hero-content text-center">
                    <div className="max-w-md space-y-3">
                        <img src="https://i.postimg.cc/pXhBypD6/undraw-Page-not-found-re-e9o6.png" alt="404" />
                            <h3 className='text-xl '>Error 404</h3>
                            <h2 className='text-3xl '>Oops This is Awkward...</h2>
                            <p className='text-base'>We couldn’t find the page you were looking for, or maybe it never existed. Try heading back to the home page.</p>
                        <button onClick={()=>navigate('/')}>Back To Home Page</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;