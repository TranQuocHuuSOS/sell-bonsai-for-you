import React, { Component } from 'react';
const ResetPassword =()=> {
        return (
            <div className=' w-full'>
                <div className='flex items-center justify-center min-h-[70vh] sm:min-h-[80vh] md:min-h-[100vh] lg:min-h-[100vh]   xl:min-h-[100vh]'>
                    <form className="bg-white  p-2 sm:p-4 md:p-6 lg:p-8 xl:p-8    rounded w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%]  xl:w-[40%] shadow-lg  bg-gradient-to-b  from-green-500 to-green-200 ">
                        <h3 className='p-8 text-center font-bold text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]'>Confirm email</h3>
                        <div className="mx-4">
                        <input className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your email" />
                        </div>
                        <br/>
                        <div className="text-center items-center lg:gap-2 justify-center">
                        <button className="bg-green-700 my-2 shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[90px] rounded focus:outline-none focus:shadow-outline" type="button">
                            Confirm
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        );
}

export default ResetPassword;