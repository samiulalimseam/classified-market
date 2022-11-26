import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './SignUp.css';
import AuthContext from '../../Context/AuthContextProvider';


const SignUp = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const handleSignUp = data => {
        console.log(data);
    }
    return (
        <div className='w-96 md:w-[800px] m-auto'>

            <div className="hero min-h-screen 0">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-light text-secondary"><strong>
                        SignUp now!</strong> </h1>
                        <p className="py-6">Sign up on <span className="text-lg font-bold text-accent">Saveyou</span>
                            The largest marketplace in Bangladesh
                            Start posting your own ads.
                            Mark ads as favorite and view them later.
                            View and manage your ads at your convenience.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                {/* name input -------------------- */}
                                <input defaultValue="" {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                                {/* email -------------input------------------------ */}
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
                                {/* password input-------------------------- */}
                                <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                                <p className="text-sm my-1 font-light">Have an account? <Link className='text-accent font-bold' to={`/login`}>Login Now</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;