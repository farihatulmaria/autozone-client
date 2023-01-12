import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase';
import CancelModal from './CancelModal';
import OrdersRow from './OrdersRow';
const MyOrders = () => {
    const [user]= useAuthState(auth);
    const [cancelModal, setCancelModal] = useState(false);
    const [productId, setProductId] = useState()
    const email = user?.email;
    const { isLoading, error, refetch, data:booking } = useQuery(['booking',email], () =>
    fetch(`https://autozone-server-production.up.railway.app/booking/${email}`,{
        method:'GET',
        headers:{
            authorization: `user ${localStorage.getItem('accessToken')}`
        },
    }).then(res =>
      res.json()))
      
      if(isLoading){
          return <Loading/>
      }
    return (
        <div className='my-orders mx-5'>
            {
                booking.length>0 ? <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booking?.map((order,index)=> <OrdersRow  key={order._id} order={order} index={index} setCancelModal={setCancelModal} setProductId={setProductId}/>)
                            }
                        </tbody>
                    </table>
                </div>: <h3 className='text-3xl text-center my-10'>Sorry , You Haven't Ordered Yet</h3>
            }
            {
                cancelModal ? <CancelModal id={productId} refetch={refetch}/> : ''
            }
        </div>
    );
};

export default MyOrders;