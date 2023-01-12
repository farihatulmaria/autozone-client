import React from 'react';
import { toast } from 'react-toastify';
const CanCelModal = ({id,refetch}) => {
    const cancelOrder = () =>{
        fetch(`https://autozone-server-production.up.railway.app/booking/${id}`,{
            method:'DELETE',
            headers:{
                authorization: `user ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                toast.success('Successfully deleted the order')
                refetch()
            }
        })
    }
    return (
        <>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                    <h3 className="font-bold text-lg">Do you really want to cancel this order ?</h3>
                    <div className="modal-action space-x-3">
                        <button onClick={()=>cancelOrder()}><label htmlFor="delete-confirm-modal">Yes</label></button>
                        <button><label htmlFor="delete-confirm-modal">Cancel</label></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CanCelModal;