import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllBlogs = () => {

    const navigate = useNavigate();
    return (
        <div className='grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://i.postimg.cc/4dPD0mw9/blog-1.jpg" alt="Blog-1" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <p>Optimizing application performance is key for developers who are mindful of keeping a user's experience positive to keep them on an app and engaged.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={()=>navigate('/blogs/performance')}>Read More</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://i.postimg.cc/C1WKCX3R/blog-2.jpg" alt="Blog-2" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>Let's uncover the many kinds of states in your React apps that you might not be aware of, plus how to manage them in the most effective way.</p>
                    <div className="card-actions">
                    <button className="btn btn-primary" onClick={()=>navigate('/blogs/reactState')}>Read More</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://i.postimg.cc/cLR1wDjd/blog-3.jpg" alt="Blog-3" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied</p>
                    <div className="card-actions">
                    <button className="btn btn-primary" onClick={()=>navigate('/blogs/prototypical')}>Read More</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://i.postimg.cc/pdk21mR7/blog-4.jpg" alt="Blog-4" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Why you do not set the state directly in React?</h2>
                    <p>Whoever worked or learned a bit of React probably knows that we should never change or update the state directly. Rather we should always declare a new object const obj = {} and use this.setState(object) and let react handle it, just like I did in the example below. But why?</p>
                    <div className="card-actions">
                    <button className="btn btn-primary"  onClick={()=>navigate('/blogs/directState')}>Read More</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://i.postimg.cc/QtX4bCnC/How-will-you-improve-the-performance-of-a-React-Application.jpg" alt="Blog-5" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How will you implement a search to find products by name?</h2>
                    <p>When you send a GET request to an API, you get the response data back from the server. But sometimes managing this data can be a problem.</p>
                    <p>In this blog post, I will show you how to create a search filter in React. It will search for a particular term in the data using functional components and React hooks.</p>
                    <div className="card-actions">
                    <button className="btn btn-primary" onClick={()=>navigate('/blogs/findProducts')}>Read More</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://i.postimg.cc/KYmGNPSB/blog-5.jpg" alt="Blog-6" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>Unit testing involves testing individual components of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={()=>navigate('/blogs/unitTest')}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;