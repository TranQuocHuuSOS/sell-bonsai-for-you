import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 const File=()=>{
    return (
        <div className='w-full  inline-block bg-gray-300'>
             <div className='mx-48 my-4 h-auto bg-white rounded-lg'>
                <div className='flex items-center justify-between p-4 '>
                    <p className='text-[20px] font-bold'>File</p>
                    <div className='flex gap-6 items-center'>
                        <input className="border-[1px solid] border-black p-2 font-light text-[16px] flex  bg-gray-200  rounded-[50px] w-full hover:border-gray-500  text-gray-700  " id="password" type="text" placeholder="Tìm kiếm file..." /> 
                        <label className="text-blue-700 w-[200px] h-[40px] text-center rounded-md items-center justify-center hover:bg-gray-300">
                            <span>Tải file lên</span>
                            <input type="file" style={{ display: 'none' }} />
                        </label>
                    </div>
                </div>
                <div className='flex gap-2 my-4 items-center justify-center border-t-[1px] mx-4'>
                    <button class="text-[16px] my-8 w-[50%] bg-gray-200 hover:bg-gray-300 top-2 flex items-center justify-center rounded px-6 py-2.5  font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"id="button-addon1"data-te-ripple-initdata-te-ripple-color="light">
                            TÊN FILE
                    </button>
                    <button class="text-[16px] my-8 w-[25%] bg-gray-200 hover:bg-gray-300 top-2 flex items-center justify-center rounded px-6 py-2.5  font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"id="button-addon1"data-te-ripple-initdata-te-ripple-color="light">
                            LOẠI
                    </button>
                    <button class="text-[16px] my-8 w-[25%] bg-gray-200 hover:bg-gray-300 top-2 flex items-center justify-center rounded px-6 py-2.5  font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"id="button-addon1"data-te-ripple-initdata-te-ripple-color="light">
                            LẦN SỬA ĐỔI GẦN ĐÂY...
                    </button>
                </div>
             </div>
        </div>
    )
}


export default File;