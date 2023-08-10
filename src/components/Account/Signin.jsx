import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const Signin=()=> {
        return(
            <div className='   w-full'>
                <div className='px-2 flex items-center justify-center min-h-[70vh] sm:min-h-[80vh] md:min-h-[100vh] lg:min-h-[100vh]   xl:min-h-[100vh]'>
                    <form className="bg-white p-2 sm:p-4 md:p-6 lg:p-8 xl:p-8    rounded sm:w-[60%] md:w-[50%] lg:w-[40%]  xl:w-[40%] shadow-lg  bg-gradient-to-b  from-green-500 to-green-200 ">
                        <h3 className=' text-center font-bold text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]'>Sign In</h3>
                        <div className="mx-4">
                        <label className='my-2'>User name</label>
                        <input className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Phone or email" />
                        </div>
                        <br/>
                        <div className="mx-4">
                        <label className='my-2'>Password</label>
                        <input className="shadow font-light text-[16px]  appearance-none border  rounded w-full py-2 hover:border-green-500 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
                        
                        </div>
                        <br/>
                        <div className="text-center items-center lg:gap-2 justify-center">
                        <button className="bg-green-700  shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[90px] rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <br/>
                        <a className=" py-2 align-baseline font-bold text-[16px] text-sm text-blue-700 hover:text-blue-500 " href="#">
                            <Link to='/Signup'>Create Account</Link>
                        </a>
                        <br/>
                        <a className="py-2 align-baseline font-bold text-[16px] text-sm text-blue-700 hover:text-blue-500 " href="#">
                            <Link to='/ResetPassword'>Forgot Password?</Link>
                        </a>
                        </div>
                    </form>
                </div>
            </div>
        );
}

export default Signin;