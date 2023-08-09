import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 const Media_files=({ children, isActive })=>{
    return (
        <div className='w-full  inline-block bg-gray-300'>
             <div className='mx-48 my-4 h-auto bg-white rounded-lg'>
                <div className='flex items-center justify-between p-4 '>
                    <p className='text-[20px] font-bold'>File phương tiện</p>
                    <div className='flex gap-8'>
                        <p className='text-blue-700 hover:bg-gray-300'>
                            <Link to="/Album_media">Tạo album</Link>
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
                        <Link to='/Video'>Video</Link>
                    </div>
                    <div className='font-semibold text-gray-500'>
                        Album
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 p-4'>
                    <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/362697619_730632755534628_1092746858695517719_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=XJTdA__NPHQAX9vku8E&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC04cE-BQb8s6QldUbjjm3a9dfQBclIQKHki-UJqYFG6g&oe=64D48F3D" alt=""></img>
                    <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/362697619_730632755534628_1092746858695517719_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=XJTdA__NPHQAX9vku8E&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC04cE-BQb8s6QldUbjjm3a9dfQBclIQKHki-UJqYFG6g&oe=64D48F3D" alt=""></img>
                    <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/365792630_614990604110947_3877913662579337846_n.jpg?stp=cp6_dst-jpg_p160x160&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=H_Q_yP04KqgAX8IHQ9L&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC3TWpe9q3cqPxZ3TMT_d0qd5VROPeTQTd6JxSFpHGUAQ&oe=64D5792F" alt=""></img>
                    <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/362697619_730632755534628_1092746858695517719_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=XJTdA__NPHQAX9vku8E&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC04cE-BQb8s6QldUbjjm3a9dfQBclIQKHki-UJqYFG6g&oe=64D48F3D" alt=""></img>
                    <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/365792630_614990604110947_3877913662579337846_n.jpg?stp=cp6_dst-jpg_p160x160&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=H_Q_yP04KqgAX8IHQ9L&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC3TWpe9q3cqPxZ3TMT_d0qd5VROPeTQTd6JxSFpHGUAQ&oe=64D5792F" alt=""></img>
                    <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/365792630_614990604110947_3877913662579337846_n.jpg?stp=cp6_dst-jpg_p160x160&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=H_Q_yP04KqgAX8IHQ9L&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC3TWpe9q3cqPxZ3TMT_d0qd5VROPeTQTd6JxSFpHGUAQ&oe=64D5792F" alt=""></img>
                </div>
            </div>
        </div>
       
    )
}


export default Media_files;