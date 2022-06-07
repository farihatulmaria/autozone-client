import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    const year = ()=>{
        const date = new Date();
        const displayYear = date.getFullYear();
        return displayYear;
    }
    return (
        <div className='main-footer w-full bg-slate-100 mt-20 py-4'>
            <footer>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 max-w-7xl mx-auto'>
                    <div className="contact space-y-5">
                    <h3 className='text-xl mb-10'>Contact Us</h3>
                    <p>Call us 24/7</p>
                    <h3 className='text-primary text-xl font-bold'>1800 500 1234 925</h3>
                    <p>
                        Bald Hill St, Asheville, NC 28803
                        info@brator.com
                    </p>
                    </div>
                    <div className="footer-service space-y-5">
                        <h3 className='text-xl mb-10'>Customer Service</h3>
                        <ul className='space-y-3'>
                            <li>Help Center</li>
                            <li>My Account</li>
                            <li>Track</li>
                            <li>My Order</li>
                            <li>Return Policy</li>
                            <li>Gift Cards</li>
                            <li>Buy Wholesale</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="info space-y-5">
                        <h3 className='text-xl mb-10'>Information</h3>
                        <ul className='space-y-3'>
                            <li>About AutoZone</li>
                            <li>Investors</li>
                            <li>Blog</li>
                            <li>Career</li>
                            <li>Contact</li>
                            <li>Affiliate Program</li>
                            <li>Sell on AutoZone</li>
                            <li>Partnership</li>
                        </ul>
                    </div>
                    <div className="subscribe space-y-5">
                        <h3 className='text-xl mb-10'>Subscribe To Our Newsletter</h3>
                        <p>Register now to get latest updates on promotions & coupons. Don’t worry, we not spam!</p>
                        <div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            <button className='my-5'>Subscribe</button>
                        </div>
                        <p>By subscribing, you accepted the Policy of our company</p>
                    </div>
                </div>
                <hr className='h-[2px] bg-primary mt-5'/>
                <div className="text-center copy-right mb-4">
                    
                    <p className='my-3'><FontAwesomeIcon icon={faCopyright} className='text-primary'/> {year()} AutoZone Car Parts and services company</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;