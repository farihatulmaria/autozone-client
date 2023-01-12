import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase';
import useToken from '../../hooks/useToken';
const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const [token] = useToken( emailUser || googleUser );

    const { register, handleSubmit } = useForm();

    const handleLoginWithEmailAndPass = data => {
        const email = data.email;
        const password = data.password;
        if(email && password){
            signInWithEmailAndPassword(email,password);
        }
    };
    if(googleLoading || emailLoading){
        return <Loading/>
    }
    if(token){
        navigate('/');
    }
    
    return (
        <div className='login'>
            <div className="flexible h-[700px]">
                    <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title mx-auto my-3 text-3xl">Login</h2>
                                <form onSubmit={handleSubmit(handleLoginWithEmailAndPass)}>
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
                                    <p className='text-xs underline my-3'><Link to="/sign-up">Forgot Password ?</Link></p>

                                    <button className='w-full my-3 !rounded-md'>Login</button>
                                </form>
                                
                                <p className='text-sm text-center'>New to AutoZone? <Link className='!text-primary underline' to="/sign-up">Create new account</Link></p>
                                <p className="text-primary text-center font-bold">
                                    {googleError?.message || emailError?.message}
                                </p>
                                <div className="divider">OR</div>
                                <button className='btn-outlined' onClick={()=>signInWithGoogle()}>Continue with Google</button>
                            </div>
                    </div>
            </div>
        </div>
    );
};

export default Login;