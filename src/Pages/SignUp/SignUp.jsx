import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const [token] = useToken( emailUser || googleUser );
    const { register, handleSubmit } = useForm();

    const handleLoginWithEmailAndPass = async data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        if(email && password){
            await createUserWithEmailAndPassword(email,password);
            await updateProfile({ displayName:name })
        }
    };
    if(googleLoading || emailLoading || updating){
        return <Loading/>;
    }
    if(token){
        navigate('/')
    }

    return (
        <div className='sign-up'>
            <div className="flexible h-[700px]">
                    <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title mx-auto my-3 text-3xl">Sign Up</h2>
                                <form onSubmit={handleSubmit(handleLoginWithEmailAndPass)}>
                                    <div className="form-control my-3">
                                        <label className="label">
                                            <span className="label-text ">Name</span>
                                        </label>
                                        <input type="text"  {...register("name", {
                                            required: {
                                                value:true,
                                                message:'Please type your name'
                                            },
                                            })} />
                                    </div>
                                    <div className="form-control my-3">
                                        <label className="label">
                                            <span className="label-text ">Email</span>
                                        </label>
                                        <input type="email"  {...register("email", {
                                            required: {
                                                value:true,
                                                message:'Please type your email'
                                            },
                                            pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                                            })} />
                                    </div>
                                    <div className="form-control my-3">
                                        <label className="label">
                                            <span className="label-text font-medium">Password</span>
                                        </label>
                                        <input type="password" {...register("password", {})} required />
                                    </div>
                                    <button className='w-full my-3 !rounded-md'>Sign Up</button>
                                </form>
                                
                                <p className='text-sm text-center'>Already have an account? <Link className='!text-primary underline' to="/login">Login now</Link></p>
                                <p className="text-red-600 text-center">{googleError?.message||emailError?.message || updateError?.message}</p>
                                <div className="divider">OR</div>
                                <button className='btn-outlined' onClick={()=>signInWithGoogle()}>Continue with Google</button>
                            </div>
                    </div>
            </div>
        </div>
    );
};

export default SignUp;