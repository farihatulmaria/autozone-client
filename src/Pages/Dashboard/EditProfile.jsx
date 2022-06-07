import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase';

const EditProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const editProfile = async (data)=>{
        const userInfo = {
            education:data.education,
            location: data.location,
            phoneNumber:data.phoneNumber,
        }
        fetch('https://autozoneapp.herokuapp.com/users',{
            method:'PATCH',
            headers:{
                authorization: `user ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(userInfo)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
    <div className="flexible h-[700px] mx-10">
            <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mx-auto my-3 text-3xl">Edit Profile</h2>
                        <form onSubmit={handleSubmit(editProfile)}>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text ">Name</span>
                                </label>
                                <input type="text" value={user?.displayName} readOnly className='bg-slate-200'  {...register("name", {
                                    required: {
                                        value:true,
                                        message:'Please type your name'
                                    },
                                })} />
                            </div>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text ">Education:</span>
                                </label>
                                <input type="text"  {...register("education", {
                                    required: {
                                        value:true,
                                        message:'Please type your Education'
                                    },
                                })} />
                            </div>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text ">Location</span>
                                </label>
                                <input type="text"  {...register("location", {
                                    required: {
                                        value:true,
                                        message:'Please type your Location'
                                    },
                                })} />
                            </div>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text ">Phone Number</span>
                                </label>
                                <input type="tel"  {...register("phoneNumber", {
                                    required: {
                                        value:true,
                                        message:'Please type your Phone Number'
                                    },
                                })} />
                            </div>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text ">LinkedIn profile link</span>
                                </label>
                                <input type="text"  {...register("linkedInProfile", {
                                    required: {
                                        value:true,
                                        message:'Please type your LinkedIn profile link'
                                    },
                                })} />
                            </div>
                            <button className='w-full my-3 !rounded-md'>Save</button>
                        </form>
                    </div>
            </div>
    </div>
    );
};

export default EditProfile;