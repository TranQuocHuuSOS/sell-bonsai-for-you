import React, { Component } from 'react';
const ResetPassword =()=> {
        return (
            <div className='py-48 xl:mx-[34%]  w-full'>
               <form className="bg-white  items-center  lg:gap-2 min-w-[20vw] h-auto   rounded  w-[30%] shadow-lg  bg-gradient-to-b  from-green-500 to-green-200 ">
                        <h3 className='p-8 text-center font-bold text-[24px]'>Form confirm email</h3>
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
        );
}

export default ResetPassword;