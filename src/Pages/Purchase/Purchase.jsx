import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase';
const Purchase = () => {
    const { register, handleSubmit,reset } = useForm();
    const {id}= useParams();
    const [user] = useAuthState(auth);
    const url = `https://autozoneapp.herokuapp.com/products/${id}`;
    const {data:product,isLoading,error,refetch} = useQuery('product', () =>
    fetch(url,{
        method:'GET'
    }).then(res =>
    res.json())) 
    if(isLoading){
        return <Loading/>;
    }    
    const {name,image,description,minimumItems,available,price} = product;
    
    const placeOrder = (data) =>{
        const quantity = parseInt(data.quantity);
        const payment = parseInt(quantity) * price;
        const order = {
            productName:data.name,
            email:data.email,
            address:data.address,
            phone:data.phone,
            payment,
            quantity
        }
        if(order){
            fetch('https://autozoneapp.herokuapp.com/booking',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                     authorization: `user ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(order)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.success){
                    toast.success('Your order has been booked successfully');
                    reset();
                    refetch();
                }else{
                    toast.error('Failed to book your order');
                    reset();
                }
            })
        }
        
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-4'>
            <div className="product-img mx-auto">
                <img width={300} src={image} alt={name} />
            </div>
            <div className="product-content">
                <h6 className="text-3xl">{name}</h6>
                <p className='my-5'>{description}</p>
                <p className='my-3'>
                    Minimum: {minimumItems}
                    <br />
                    Available: {available===0?'Sold Out':available}
                </p>
                <h3 className='text-3xl'><span className='text-primary'>$</span>{price}</h3>
            </div>
            <div className="order py-4 flex items-center justify-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h5 className="card-title">Buy Now</h5>
                        <form onSubmit={handleSubmit(placeOrder)}>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input type="text" value={name} className='bg-slate-200' readOnly {...register("name", {})} required />
                            </div>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text font-medium">Quantity</span>
                                </label>
                                <input type="number" min={minimumItems} max={available} {...register("quantity", {})} required />
                            </div>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" value={user?.email} className='bg-slate-200' readOnly {...register("email", {
                                    required: {
                                        value:true,
                                        message:'Please type your email'
                                    },
                                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                                    })} />
                            </div>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text font-medium">Address</span>
                                </label>
                                <input type="text" {...register("address", {})} required />
                            </div>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text font-medium">Phone Number</span>
                                </label>
                                <input type="tel" {...register("phone", {})} required />
                            </div>
                            <button className='w-full my-3 !rounded-md'>Proceed To Checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;