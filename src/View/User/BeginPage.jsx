import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const BeginPage=()=> {
    return(
        <div className='w-full  inline-block'>
            <div className='min-h-[30vh] p-12'> 
                <p className='  flex items-center justify-center sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[32px] font-bold'>Bạn đã có tài khoản hay chưa?</p>
                <p className='flex items-center justify-center text-blue-700 text-[13px] sm:text-[16px] md:text-[20px] lg:text-[20px] xl:text-[20px]'><Link to='/Signup'> Tạo một tài khoản!</Link></p>
                <p className='flex items-center justify-center text-blue-700 text-[13px] sm:text-[16px] md:text-[20px] lg:text-[20px] xl:text-[20px]'><Link to='/Signin'> Tôi đã có tài khoản! </Link></p>
            </div>
        </div>
    )
}

export default BeginPage;