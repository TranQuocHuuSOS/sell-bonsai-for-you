import React, { Component } from 'react';
const Album_media=()=>{
    return (
        <div>
            <div className='mx-0 sm:mx-6 md:mx-16 lg:mx-28 xl:mx-48 py-4 xl:flex'>
                <div className='basis-1/4'>
                    <div className='border-t-[2px] border-b-[2px] p-4'>
                        <p className='font-bold text-[24px]'>Tạo Album</p>
                        <div className='flex items-center rounded bg-gray-300 hover:bg-gray-400 p-2 '>
                            <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                            <h4  className='text-[12px] mx-2'>Nhóm công khai</h4>
                        </div>
                        <input className='hover:bg-gray-300 shadow hover:text-black p-4 my-4  w-full border-black border-[1px] rounded-md focus:outline-none focus:shadow-outline' placeholder='Tên album'></input>
                        <label  className="flex bg-gray-300 shadow inline-block items-center justify-center hover:bg-gray-400 text-[16px] text-black font-bold py-2 px-4 h-[40px] w-full rounded focus:outline-none focus:shadow-outline" >
                        <i data-visualcompletion="css-img"
                            className="x1b0d499 xep6ejk"
                            style={{
                                backgroundImage:
                                'url("https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/dcbgYzBtFt3.png")',
                                backgroundPosition: "0px -218px",
                                backgroundSize: "34px 254px",
                                width: 16,
                                height: 16,
                                backgroundRepeat: "no-repeat",
                                display: "inline-block"
                            }}
                        />
                            <span className='mx-2 flex items-center justify-center'>Tải ảnh hoặc video lên </span>
                            <input type="file" style={{ display: 'none' }} />
                        </label>
                    </div>
                    <div className='p-4'>
                        <button className="bg-green-700 shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-full rounded focus:outline-none focus:shadow-outline"  type="button">
                            Đăng
                        </button>
                    </div>
                </div>
                <div className='basis-3/4'>
                    <div className='flex items-center justify-center min-h-[25vh] xl:min-h-[50vh]'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="5em" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
                        
                    </div>
                    <p className='mx-2 font-bold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px] flex items-center justify-center text-center'>Bạn sẵn sàng thêm gì đó chưa?</p>
                    <p className='mx-2 text-[14px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] flex items-center justify-center text-center'>Kéo ảnh và video vào đây để bắt đầu.</p>
                </div>
            </div>
        </div>
    );
}


export default Album_media;