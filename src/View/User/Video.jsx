import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 const Video=()=>{
    return (
        <div className='w-full  inline-block bg-gray-300'>
             <div className='mx-48 my-4 h-auto bg-white rounded-lg'>
                <div className='flex items-center justify-between p-4 '>
                    <p className='text-[20px] font-bold'>File phương tiện</p>
                    <div className='flex gap-8'>
                        <p className='text-blue-700 hover:bg-gray-300'>
                            <Link to="/">Tạo album</Link>
                        </p>
                        <p className='text-blue-700 hover:bg-gray-300'>
                            <a type="file">Thêm ảnh/video</a>
                        </p>
                    </div>
                </div>
                <div className='flex gap-8 p-4'>
                    <div className='font-semibold text-gray-500'>
                        Ảnh
                    </div>
                    <div className='font-semibold text-gray-500'>
                        Video
                    </div>
                    <div className='font-semibold text-gray-500'>
                        Album
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 p-4'>
                    <video class="w-[100px] h-[100px]  autoplay" src="9710724946719880 (1).mp4" type="video/mp4" autoplay muted loop></video>
                    
                    <video autoplay loop muted>
                        <source src="video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video autoplay loop muted>
                        <source src="video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                  
                </div>
            </div>
        </div>
       
    )
}


export default Video;