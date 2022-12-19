import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import ManageOrderRow from './ManageOrderRow';
const ManageAllOrders = () => {
    const { isLoading, refetch, data:bookings } = useQuery('bookings', () =>
    fetch(`https://autozone-server-production.up.railway.app/booking`,{
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
        <div className='mx-5'>
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th> 
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings?.map((booking,index)=><ManageOrderRow 
                            key={booking._id}
                            booking={booking} 
                            index={index} 
                            refetch={refetch}
                        />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;