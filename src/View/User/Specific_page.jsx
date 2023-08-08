import React, { Component } from 'react';
import {Link} from  'react-router-dom';
 const Specific_page=()=>{
    return (
        <div className='w-full  inline-block bg-gray-300'>
             <div className='mx-72 my-4 py-4 h-auto bg-white rounded-lg '>
                <div className='flex items-center justify-between p-4 '>
                    <p className='text-[20px] '>Giới thiệu về nhóm này</p>
                </div>
                <div className=' py-4 border-t-[2px] border-b-[2px] mx-4'>
                    <p>Hội nhằm giúp anh, chị, em giao lưu, học hỏi kinh nghiệm chăm sóc bonsai cây cảnh.
                        Giúp chia sẽ những giống cây, mô hình và những tác phẩm bonsai, cây cảnh.
                        Giao lưu, mua bán những tác phẩm bonsai, cây cảnh dựa trên tinh thần thiện chí. Cấm tuyêt đối những hành vi gian lận. Lừa lọc.
                        Tuyệt đối không đăng tải, chia sẽ những nội dung không liên quan đến bonsai, cây cảnh. (gỡ bài viết 1 lần trước khi bị ban khỏi nhóm)
                        Chúc ace có được những tác phẩm đẹp như ý.
                    </p>
                    <div className='flex items-center gap-4 p-2  border-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                        <div className=''> 
                            <p className=''>Công khai</p>
                            <p className='text-[12px]'>Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-2  border-black'>
                        <i data-visualcompletion="css-img"
                            className="x1b0d499 xuo83w3"
                            style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/RHm_0gNg-83.png")',
                            backgroundPosition: "0px -264px",
                            backgroundSize: "38px 574px",
                            width: 20,
                            height: 20,
                            backgroundRepeat: "no-repeat",
                            display: "inline-block"
                        }}
                        />
                        <div className=''> 
                            <p className=''>Hiển thị</p>
                            <p>Ai cũng có thể tìm thấy nhóm này.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-2  border-black'>
                    <i data-visualcompletion="css-img"className="x1b0d499 xuo83w3"style={{
                        backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/w9MCTs-UROU.png")',
                        backgroundPosition: "0px -118px",
                        backgroundSize: "26px 570px",
                        width: 20,
                        height: 20,
                        backgroundRepeat: "no-repeat",
                        display: "inline-block"
                    }}
                    />
                        <div className=''> 
                            <p className=''>Lịch sử</p>
                            <p className='text-[12px]'>Đã tạo nhóm vào 8 tháng 2, 2019. Lần gần nhất đổi tên là vào 27 tháng 4, 2022. <a href='/'>Xem thêm</a> </p>
                        </div>
                    </div>
                </div>
             </div>

             <div className='mx-72 py-4 h-auto bg-white rounded-lg '>
                <div className='flex items-center justify-between p-4 '>
                    <p className=''>Hoạt động</p>
                    
                </div>
                <div className=' py-4 border-t-[2px] mx-4'>
                    
                    <div className='flex items-center gap-4 p-2  border-black'>
                    <i data-visualcompletion="css-img"
                        className="x1b0d499 xuo83w3"
                        style={{
                            backgroundImage:
                            'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/xXZumWTvYwM.png")',
                            backgroundPosition: "0px -610px",
                            backgroundSize: "26px 956px",
                            width: 20,
                            height: 20,
                            backgroundRepeat: "no-repeat",
                            display: "inline-block"
                        }}
                    />

                        <div className=''> 
                            <p className=''>Hôm nay có 9 bài viết mới</p>
                            <p className='text-[12px]'>354 trong tháng trước</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-2  border-black'>
                    <i data-visualcompletion="css-img"
                        className="x1b0d499 xuo83w3"
                        style={{
                            backgroundImage:
                            'url("https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/w9MCTs-UROU.png")',
                                backgroundPosition: "0px -250px",
                                backgroundSize: "26px 570px",
                                width: 20,
                                height: 20,
                                backgroundRepeat: "no-repeat",
                                display: "inline-block"
                        }}
                    />
                        <div className=''> 
                            <p className=''>Tổng cộng 50.129 thành viên</p>
                            <p>+ 117 trong tuần qua</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-2  border-black'>
                    <i data-visualcompletion="css-img"
                        className="x1b0d499 xuo83w3"
                        style={{
                            backgroundImage:
                            'url("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/ydtoGokHUCF.png")',
                            backgroundPosition: "0px -270px",
                            backgroundSize: "74px 466px",
                            width: 20,
                            height: 20,
                            backgroundRepeat: "no-repeat",
                            display: "inline-block"
                        }}
                    />

                        <div className=''> 
                            <p className=' text-[20px]'>Ngày tạo: 4 năm trước</p>
                            
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
}
export default Specific_page;