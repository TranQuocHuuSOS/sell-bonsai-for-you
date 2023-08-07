import React, { Component } from 'react';
const Signup=()=> {
        return(
            <div className='py-48 xl:mx-[30%] w-full'>
               <form className="bg-white  items-center  lg:gap-2 min-w-[40vw] h-auto   rounded  w-[30%] shadow-lg  bg-gradient-to-b  from-green-500 to-green-200 ">
                        <h3 className='p-2 text-center font-bold text-[24px]'>Form Sign up</h3>
                        <div className="mx-4">
                        <label className='my-2'>User name</label>
                        <input className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your phone or email" />
                        </div>
                        <br/>
                        <div className="mx-4">
                        <label className='my-2'>Your Email</label>
                        <input className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your email" />
                        </div>
                        <br/>
                        <div className="mx-4">
                        <label className='my-2'>Your password</label>
                        <input className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="Enter your password" />
                        </div>
                        
                        <br/>
                        <div className="mx-4">
                        <label className='my-2'>Your location</label>
                        <input className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your location" />
                        </div>
                        <br/>
                        <div className="mx-4">
                        <label className='my-2'>Your phone number</label>
                        <input className="shadow font-light text-[16px]  appearance-none border  rounded w-full py-2 hover:border-green-500 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your phone number" />
                        </div>
                        <br/>
                        <div className="mx-4">
                        <label className='my-2'>Your avatar</label>
                        <input className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="file" />
                        </div>
                        <div className="text-center items-center lg:gap-2 justify-center">
                        <button className="bg-green-700 my-4 shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[90px] rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign up
                        </button>
                        <br/>
                        </div>
                    </form>
            </div>
        );
}

export default Signup;