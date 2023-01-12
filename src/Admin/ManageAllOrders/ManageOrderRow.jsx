import React, { useState } from 'react';
import { toast } from 'react-toastify';
const ManageOrderRow = ({booking,index,refetch}) => {
    const [shipped, setShipped] = useState(false)
    const shipOrders= () =>{
        fetch(`https://autozone-server-production.up.railway.app/ship/${booking._id}`,{
            method:'PUT',
            headers:{
                authorization: `user ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res=>res.json())
        .then(data=>{setShipped(true)})
    }
    const  cancelOrder =()=>{
        fetch(`https://autozone-server-production.up.railway.app/booking/${booking._id}`,{
            method:'DELETE',
            headers:{
                authorization: `user ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data){
                toast.success('Successfully deleted the order');
                refetch();
            }
        })

    }
    return (
        <tr>
            <td>{index+1}</td>
            <td>{booking.productName}</td>
            <td>{booking.paid ? <>
                {
                    shipped ? 'Pending...':'Shipped'  
                }
            </> : "unpaid"}</td>
            <td className='space-x-3'>
                {booking.paid ? <button className='btn-primary' onClick={()=>shipOrders()}>Ship Order</button> :''}
                <button className='btn-primary' onClick={()=>cancelOrder()}>Delete</button>
            </td>
        </tr>
    );
};

export default ManageOrderRow;