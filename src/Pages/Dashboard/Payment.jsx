import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import CheckoutForm from './CheckoutForm.jsx';
const stripePromise = loadStripe('pk_test_51L1BHHFWjq1iR0syNNqMJVLXkFTpyNRUuesaqGFwIY4i1MplU7pbtAO1mUCcej1aZ4vsgIDaOD3q3RaMyboZmbDE00DVM7cxzk') 

const Payment = () => {
    const {id} = useParams();
    const url = `https://autozone-server-production.up.railway.app/singleBooking/${id}`;

    const { data: booking, isLoading } = useQuery(['singleBooking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading/>
    }
    /* 
   
    
    */
    return (
    <div className='login'>
        <div className="flexible h-[700px]">
            <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mx-auto my-3 text-3xl">CheckOut</h2>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm booking={booking} />
                        </Elements>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default Payment;