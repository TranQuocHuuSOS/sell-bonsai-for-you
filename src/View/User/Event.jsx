import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 const Event=()=>{
    return (
        <div className='w-full  inline-block bg-gray-300'>
             <div className='mx-72 my-4 h-auto bg-white rounded-lg'>
                <div className='flex items-center justify-between p-4 '>
                    <p className='text-[20px] font-bold'>Sự kiện sắp tới</p>
                    <div className='flex gap-2'>
                        <button className="bg-gray-300 shadow hover:bg-gray-400 text-[16px] text-black font-bold py-2 px-4 h-[40px] w-[120px] rounded focus:outline-none focus:shadow-outline" type="button">
                            <Link to="/">Tìm sự kiện</Link>
                        </button>
                        <button className="bg-green-700 shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[120px] rounded focus:outline-none focus:shadow-outline" type="button">
                            <Link to="/">Tạo sự kiện</Link>
                        </button>
                    </div>
                </div>
                <div className='items-center justify-center flex p-4'>
                    Chưa có sự kiện nào sắp diễn ra
                </div>
             </div>

             <div className='mx-72 my-4 h-auto bg-white rounded-lg'>
                <div className=' p-4 '>
                    <p className='text-[20px] font-bold'>Sự kiện trước đây</p>
                    <div className='flex my-4 border-b-[1px]'>
                        <img className='w-[20%] h-[20%] rounded-lg' src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/315640373_109075705358360_6098016627465134079_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=340051&_nc_ohc=uofj8Cx1K_AAX-vAEaz&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA8uUIy4UtIhaKEJRgb9AG_5A3dKcfnK8W1yvldMp_gmg&oe=64D490C8" alt=""></img>
                        <div className='mx-4'>
                            <time>T6, 18 THÁNG 11, 2022</time>
                            <p className='font-bold text-[24px]'>On Top Top Mỗi Ngày X10 Mức Thu Tết Ấm</p>
                            <div className='flex'>
                                <img className='w-[5%] h-[5%] rounded-full' src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/315640373_109075705358360_6098016627465134079_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=340051&_nc_ohc=uofj8Cx1K_AAX-vAEaz&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA8uUIy4UtIhaKEJRgb9AG_5A3dKcfnK8W1yvldMp_gmg&oe=64D490C8" alt=""></img>
                                <p className='mx-2'>Người tạo:<strong>Phạm Phúc</strong></p>
                            </div>
                            <button class="my-8 bg-gray-200 hover:bg-gray-300 top-2 flex items-center rounded  px-6 py-2.5 text-xs font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                type="button"id="button-addon1"data-te-ripple-initdata-te-ripple-color="light">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex my-4 border-b-[1px]'>
                        <img className='w-[20%] h-[20%] rounded-lg' src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/315640373_109075705358360_6098016627465134079_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=340051&_nc_ohc=uofj8Cx1K_AAX-vAEaz&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA8uUIy4UtIhaKEJRgb9AG_5A3dKcfnK8W1yvldMp_gmg&oe=64D490C8" alt=""></img>
                        <div className='mx-4'>
                            <time>T6, 18 THÁNG 11, 2022</time>
                            <p className='font-bold text-[24px]'>On Top Top Mỗi Ngày X10 Mức Thu Tết Ấm</p>
                            <div className='flex'>
                                <img className='w-[5%] h-[5%] rounded-full' src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/315640373_109075705358360_6098016627465134079_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=340051&_nc_ohc=uofj8Cx1K_AAX-vAEaz&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA8uUIy4UtIhaKEJRgb9AG_5A3dKcfnK8W1yvldMp_gmg&oe=64D490C8" alt=""></img>
                                <p className='mx-2'>Người tạo:<strong>Phạm Phúc</strong></p>
                            </div>
                            <button class="my-8 bg-gray-200 hover:bg-gray-300 top-2 flex items-center rounded  px-6 py-2.5 text-xs font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                type="button"id="button-addon1"data-te-ripple-initdata-te-ripple-color="light">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
                
             </div>
        </div>
    )
}


export default Event;