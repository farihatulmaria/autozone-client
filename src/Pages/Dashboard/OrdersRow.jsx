import React from 'react';
import { useNavigate } from 'react-router-dom';
const OrdersRow = ({order,index,setCancelModal ,setProductId}) => {
    const navigate = useNavigate();
    return (
        <tr>
            <td>{index+1}</td>
            <td>{order.productName}</td>
            <td>{order.payment}</td>
            <td>{order.paid ? 'Paid':<>
                <button className='mr-5' onClick={()=>navigate(`/dashboard/payment/${order._id}`)}>Pay</button> 
                <button><label htmlFor="delete-confirm-modal" onClick={()=>{
                    setProductId(order._id)
                    setCancelModal(order)
                    }}>Cancel</label></button>
            </>}</td>
        </tr>
    );
};

export default OrdersRow;