import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthContextProvider';
import {FcGoogle} from "react-icons/fc";


const Login = () => {
    const {setNewTitle, googleLogin} =useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    setNewTitle('Login- SaveYou')
    const handleLogin = data => {
        
    }
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(res=> console.log(res))
    }
    return (
        <div className='w-96 md:w-[800px] m-auto'>

            <div className="hero min-h-screen 0">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-light text-secondary">Login now!</h1>
                        <p className="py-6">Welcome to <span className="font-bold text-accent">Saveyou.com </span><br />
                            Log in to manage your account.
                            Start posting your own ads.
                            Mark ads as favorite and view them later.
                            View and manage your ads at your convenience..</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input defaultValue="" {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary mb-3">Login</button>
                                
                            </div>
                        </form>
                        <button onClick={handleGoogleLogin} className="btn  btn-circle m-auto mb-3"><span className='text-xl'><FcGoogle></FcGoogle></span></button>
                                <p className="text-sm my-1 font-light text-center mb-3">Dont have an account? <Link className='text-accent font-bold' to={`/signup`}>SignUp Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;