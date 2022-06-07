import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase';
const AddAReview = () => {
    const { register, handleSubmit,reset } = useForm();
    const [user] = useAuthState(auth);
    const addReview = (info)=> {
        
        if(info){
            const img = user.photoURL || 'https://i.postimg.cc/FsQ2LGtM/userImg.png';
            const review = {
                name:user.displayName,
                email:info.email,
                img,
                rating:info.rating,
                reviewText:info.reviewText

            }
            fetch('https://autozoneapp.herokuapp.com/reviews',{
                method:'POST',
                headers:{
                    authorization: `user ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(review)
            })
            .then(res=>res.json())
            .then(data =>{
                if(data?.insertedId){
                    toast.success('Your review is successfully added to the home page');
                    reset();
                }else{
                    toast.error('Failed to add your review')
                }
            }) 
        } 
    }
    return (
        <div className='flexible h-[700px] AddAReview'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto my-3 text-3xl">Add A Review</h2>
                    <form onSubmit={handleSubmit(addReview)}>
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Email</span>
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
                                <span className="label-text font-medium">Review</span>
                            </label>
                            <textarea type="text" className='textarea textarea-primary textarea-bordered' {...register("reviewText", {})} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating (1-5)</span>
                            </label>
                            <input
                                type="number"
                                min={1} max={5}
                                {...register("rating", {
                                min: 1, max: 5
                                })}
                            />
                        </div>
                        <button className='w-full my-3 !rounded-md'> <FontAwesomeIcon icon={faPlus} className='mx-2'/> Add The Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAReview;