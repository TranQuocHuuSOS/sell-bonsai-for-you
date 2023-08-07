import React, { Component } from 'react';
const Signin=()=> {
        return(
            <div className='py-48 xl:mx-[34%]  w-full'>
               <form className="bg-white  items-center  lg:gap-2 min-w-[20vw] h-auto   rounded  w-[30%] shadow-lg  bg-gradient-to-b  from-green-500 to-green-200 ">
                        <h3 className='p-8 text-center font-bold text-[24px]'>Form Sign in</h3>
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
                            Create Account
                        </a>
                        <br/>
                        <a className="py-2 align-baseline font-bold text-[16px] text-sm text-blue-700 hover:text-blue-500 " href="#">
                            Forgot Password?
                        </a>
                        </div>
                    </form>
            </div>
        );
}

export default Signin;