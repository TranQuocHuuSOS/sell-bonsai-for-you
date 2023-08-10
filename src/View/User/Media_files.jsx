import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 const Media_files=({ children, isActive })=>{
    return (
        <div className='w-full  inline-block bg-gray-300'>
             <div className='mx-0 sm:mx-6 md:mx-20 lg:mx-36 xl:mx-48 my-4 h-auto bg-white rounded-lg'>
                <div className='grid sm:flex md:flex lg:flex xl:flex items-center justify-center sm:justify-between md:justify-between lg:justify-between xl:justify-between p-4 '>
                    <p className='flex text-[20px] font-bold justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start'>File phương tiện</p>
                    <div className='flex gap-4 sm:gap-2 md:gap-6 lg:gap-8 xl:gap-8 items-center justify-center sm:justify-end md:justify-end lg:justify-end xl:justify-end'>
                        <p className='text-blue-700 w-auto h-[40px] rounded-md hover:bg-gray-300 flex text-center items-center justify-center'>
                            <Link className='flex text-center items-center' to="/Album_media">Tạo album</Link>
                        </p>
                        <label className="inline-flex  text-blue-700 w-auto h-[40px] text-center rounded-md items-center justify-center hover:bg-gray-300">
                            <span className='flex text-center items-center'>
                                Tải ảnh/video lên
                                <input className='flex text-center items-center' type="file" style={{ display: 'none' }} />
                                </span>
                        </label>
                    </div>
                </div>
                <div className='flex justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start gap-4 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-8 my-0  sm:my-2 md:my-2 lg:my-4 xl:my-4 mx-4'>
                    <div className='font-semibold text-gray-500 hover:bg-gray-700 hover:text-white p-2 rounded-lg'>
                        Ảnh
                    </div>
                    <div className='font-semibold text-gray-500 hover:bg-gray-700 hover:text-white p-2 rounded-lg'>
                        <Link to='/Video'>Video</Link>
                    </div>
                    <div className='font-semibold text-gray-500 hover:bg-gray-700 hover:text-white p-2 rounded-lg'>
                        Album
                    </div>
                </div>
                <div className='grid sm:grid md:grid lg:grid xl:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-0 sm:p-4 md:p-4 lg:p-4 xl:p-4 text-center items-center justify-center'>
                    <span className='w-full h-full'>
                        <img className='flex items-center justify-center' src="https://www.haskins.co.uk/wp-content/uploads/2021/05/plant-focus-bonsai.jpg" alt=""></img>
                    </span>
                    <span className='w-full h-full'>
                        <img className='flex items-center justify-center' src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/362697619_730632755534628_1092746858695517719_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=XJTdA__NPHQAX9vku8E&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC04cE-BQb8s6QldUbjjm3a9dfQBclIQKHki-UJqYFG6g&oe=64D48F3D" alt=""></img>
                    </span>
                    <span className='w-full h-full'>
                        <img className='flex items-center justify-center' src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/365792630_614990604110947_3877913662579337846_n.jpg?stp=cp6_dst-jpg_p160x160&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=H_Q_yP04KqgAX8IHQ9L&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC3TWpe9q3cqPxZ3TMT_d0qd5VROPeTQTd6JxSFpHGUAQ&oe=64D5792F" alt=""></img>
                    </span>
                    <span className='w-full h-full'>
                        <img className='flex items-center justify-center' src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/362697619_730632755534628_1092746858695517719_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=XJTdA__NPHQAX9vku8E&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC04cE-BQb8s6QldUbjjm3a9dfQBclIQKHki-UJqYFG6g&oe=64D48F3D" alt=""></img>
                    </span>
                    <span className='w-full h-full'>
                        <img className='flex items-center justify-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Trident_Maple_bonsai_52%2C_October_10%2C_2008.jpg/800px-Trident_Maple_bonsai_52%2C_October_10%2C_2008.jpg" alt=""></img>
                    </span>
                    <span className='w-full h-full'>
                        <img className='flex items-center justify-center' src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/365792630_614990604110947_3877913662579337846_n.jpg?stp=cp6_dst-jpg_p160x160&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=H_Q_yP04KqgAX8IHQ9L&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC3TWpe9q3cqPxZ3TMT_d0qd5VROPeTQTd6JxSFpHGUAQ&oe=64D5792F" alt=""></img>
                    </span>
                </div>
            </div>
        </div>
       
    )
}


export default Media_files;