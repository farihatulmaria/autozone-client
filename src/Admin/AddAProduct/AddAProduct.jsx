import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase';
const AddAProduct = () => {
    const { register, handleSubmit,reset,formState: { errors } } = useForm();
    const image_Storage_Key = '819f223923061b4eb407559d94688bce';
    const addReview = (info)=> {

        const image = info.image[0];

        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${image_Storage_Key}`;
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const image = result.data.url;
                const item = {
                    name:info.name,
                    image:image,
                    email:info.email,
                    description:info.description,
                    price:info.price,
                    minimumItems:info.minimumItems,
                    available:info.quantity
                }
                fetch('https://autozoneapp.herokuapp.com/products',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json',
                        authorization: `user ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(item)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        toast.success(`Added ${item.name} to the products collection`)
                        reset()
                    }
                    else{
                        toast.error(`Failed to add product`)
                        reset()
                    }
                })
            }
        })
    }
    const [user] = useAuthState(auth);
    return (
        <div className=' h-[700px] mx-5 AddAProduct flex justify-center items-start'>
            <div className="card my-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto my-3 text-3xl">Add A Product</h2>
                    <form onSubmit={handleSubmit(addReview)}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center ">
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input type="email" className='bg-slate-200' readOnly value={user?.email} {...register("email", {
                                    required: {
                                        value:true,
                                        message:'Please type your email'
                                    },
                                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                                    })} />
                            </div>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text font-medium">product name</span>
                                </label>
                                <input type="text" {...register("name", {
                                    required: {
                                        value:true,
                                        message:'Please type your product name'
                                    },
                                })} />
                            </div>
                            <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Photo</span>
                                    </label>
                                <input
                                        type="file"
                                        name='file'
                                        id='file'
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: 'Image is Required'
                                            }
                                        })}
                                    />  
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                            </div>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text font-medium">Description</span>
                                </label>
                                <textarea 
                                type="text" 
                                className='textarea textarea-primary textarea-bordered' {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })} required />

                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Price</span>
                                </label>
                                <input 
                                type="number" 
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is Required'
                                    }
                                })} required />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Minimum Items</span>
                                </label>
                                <input 
                                type="number" 
                                {...register("minimumItems", {
                                    required: {
                                        value: true,
                                        message: 'Minimum Items is Required'
                                    }
                                })} required />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Quantity</span>
                                </label>
                                <input 
                                type="number" 
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: 'Quantity is Required'
                                    }
                                })} required />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                        </div>
                        <button className='w-full my-3 !rounded-md'> <FontAwesomeIcon icon={faPlus} className='mx-2'/> Add The Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;