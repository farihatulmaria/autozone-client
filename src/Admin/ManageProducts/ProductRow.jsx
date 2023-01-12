import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({product,index,refetch}) => {
    const deleteProduct = ()=>{
        const productId = product._id;
        if(productId){
            fetch(`https://autozone-server-production.up.railway.app/products/${productId}`,{
                method:'DELETE',
                headers:{
                    authorization: `user ${localStorage.getItem('accessToken')}`
                },
            })
            .then(res=>res.json())
            .then(data=>{
                if(data?.acknowledged){
                    toast.success(`Successfully deleted ${product.name}`)
                    refetch();
                }else{
                    toast.error(`Failed to delete ${product.name}`)
                }
            })
        }
    }
    return (
        <tr>
            <td>{index+1}</td>
            <td>{product.name}</td>
            <td><button className='btn-primary' onClick={()=>deleteProduct()}>Delete</button></td>
        </tr>
    );
};

export default ProductRow;