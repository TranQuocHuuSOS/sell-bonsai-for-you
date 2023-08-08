import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '../../components/style/output.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import Discuss from './Discuss';
library.add(fas);
 const Event=()=>{
    const [nav, setNav] = useState(false)
    const [navs, setNavs] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='w-full  inline-block bg-gray-300'>
             <div className='mx-72 my-4 h-auto bg-white rounded-lg'>
                <div className='flex items-center justify-between p-4 '>
                    <p className='text-[20px] font-bold'>Sự kiện sắp tới</p>
                    <div className='flex gap-2'>
                        <button className="bg-gray-300 shadow hover:bg-gray-400 text-[16px] text-black font-bold py-2 px-4 h-[40px] w-[120px] rounded focus:outline-none focus:shadow-outline" onClick={()=>window.my_modal_3.showModal()} type="button">
                            Tìm sự kiện      
                        </button>
                        {/* You can open the modal using ID.showModal() method */}
                        <dialog id="my_modal_3" className="modal w-[50%] rounded-xl">
                            <form method="dialog" className="modal-box">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    <h3 className="flex font-bold text-lg border-b-[1px] p-6 justify-center items-center">Tìm sự kiện</h3>
                                    <p className="flex py-4 items-center justify-center">
                                        <i data-visualcompletion="css-img" className=""style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/GYA7Pcxl6Ai.png")',backgroundPosition: "0px -260px",backgroundSize: "146px 374px",width: 112,height: 112,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                    </p>
                                    <p className='flex items-center justify-center'>Không có sự kiện nào sắp diễn ra.</p>
                                    <div className='flex p-4 items-center justify-center gap-2'>
                                        <button className="bg-gray-300 shadow hover:bg-gray-400 text-[16px] text-black font-bold py-2 px-4 h-[40px] w-full rounded focus:outline-none focus:shadow-outline" onClick={()=>window.my_modal_3.showModal()} type="button">
                                            Khám phá sự kiện      
                                        </button>
                                        <button className="bg-gray-300 shadow hover:bg-gray-400 text-[16px] text-black font-bold py-2 px-4 h-[40px] w-full rounded focus:outline-none focus:shadow-outline" onClick={()=>window.my_modal_3.showModal()} type="button">
                                            Tạo sự kiện      
                                        </button>
                                    </div>
                            </form>
                        </dialog>






                        <button className="bg-green-700 shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[120px] rounded focus:outline-none focus:shadow-outline" onClick={()=>window.my_modal_2.showModal()} type="button">
                            Tạo sự kiện
                        </button>

                          {/* You can open the modal using ID.showModal() method */}
                          <dialog id="my_modal_2" className="modal w-[50%] rounded-xl h-[500px]">
                            <form method="dialog" className="modal-box">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>

                                
                                    <h3 className="flex font-bold text-lg border-b-[1px] p-6 justify-center items-center">Tạo sự kiện</h3>
                                    <img className='w-full  ' src="https://saigonhoa.com/wp-content/uploads/2018/09/Tuoi-bonsai.jpg" alt=""></img>
                                    <div className='flex p-4 items-center'>
                                        <img className='w-[5%] h-[5%] rounded-full' src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/315640373_109075705358360_6098016627465134079_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=340051&_nc_ohc=uofj8Cx1K_AAX-vAEaz&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA8uUIy4UtIhaKEJRgb9AG_5A3dKcfnK8W1yvldMp_gmg&oe=64D490C8" alt=""></img>
                                        <div className=''>
                                            <p className='mx-2 hover:underline'><strong>Phạm Phúc</strong></p>
                                            <p className='mx-2 hover:underline'>Người tổ chức - Trang cá nhân của bạn</p>
                                        </div>
                                    </div>
                                    <input className='hover:bg-gray-300 hover:text-black p-4 mx-4 w-[96%] border-black border-[1px] rounded-md' placeholder='Tên sự kiện'>

                                    </input>
                                    <div className='flex p-4 gap-8'>
                                        <div className='flex hover:bg-gray-300 p-4 w-full items-center border-black border-[1px] rounded-md'>
                                            {/* <i data-visualcompletion="css-img"className="x1b0d499 x1d69dk1"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -320px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/> */}
                                            <div className=''>
                                                <p className='mx-2'>Ngày bắt đầu</p>
                                                {/* <p className='mx-2'><strong>7 Tháng 8, 2023</strong></p> */}
                                                <input className='mx-2 hover:bg-gray-300' type="date"></input>
                                            </div>
                                        </div>
                                        <div className='flex hover:bg-gray-300 p-4 w-full items-center border-black border-[1px] rounded-md'>
                                        {/* <img className="x1b0d499 xep6ejk "  src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/h15jrhghvUR.png" alt=""/> */}
                                            <div className=''>
                                                <p className='mx-2'>Thời gian bắt đầu</p>
                                                {/* <p className='mx-2'><strong>7 Tháng 8, 2023</strong></p> */}
                                                <input className='mx-2 hover:bg-gray-300' type="time"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <a className='p-4 py-4 text-blue-700'>+ Ngày và giờ kết thúc</a>
                                    
                                    <div className=' p-4'>
                                        <select id="countries"
                                            className="bg-gray-50 border-[1px] hover:bg-gray-300 border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected="">Đây là sự kiện gặp mặt trực tiếp hay trên mạng?</option>
                                            <option value="US" className='flex'>
                                                Gặp mặt trực tiếp
                                            </option>
                                            <option value="CA">
                                                Trên mạng
                                            </option>
                                        </select>
                                    </div>
                          

                                    <textarea className='hover:bg-gray-300 p-4 mx-4 w-[96%] border-black border-[1px] rounded-md' placeholder='Hãy mô tả chi tiết về sự kiện'>

                                    </textarea>

                                    <details className="dropdown flex  p-4 border-b-[3px] mx-4">
                                    
                                        <summary className="m-1 btn">
                                           
                                            Thêm người đồng tổ chức
                                        </summary>
                                        
                                        
                                        <ul className="p-2 bg-gray-300 w-[100%] shadow menu dropdown-content z-[1] bg-base-100 rounded-md ">
                                        <input className='p-4  w-[100%] border-black border-[1px] hover:border-gray-400 rounded-md' placeholder='Tên sự kiện'>
                                        </input>
                                        <p className='my-2 text-[12px]'>Người đồng tổ chức có thể chấp nhận hoặc từ chối sau khi bạn đăng sự kiện.</p>
                                        </ul>
                                        
                                    </details>

                                    <details className="dropdown flex  p-4 border-b-[3px] mx-4">
                                    
                                        <summary className="m-1 btn">
                                           
                                            Sự kiện lặp lại
                                        </summary>
                                        
                                        
                                        <ul className="p-2 bg-gray-300 w-[100%] shadow menu dropdown-content z-[1] bg-base-100 rounded-md ">
                                            <div className='border-[1px] border-black hover:border-gray-400 rounded-md bg-gray-50 '>
                                                <p className='text-blue-500 mx-4 text[12px]'>Tần xuất</p>
                                                <select id="countries"
                                                    className=" text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option selected="">Không bao giờ</option>
                                                    <option value="CA">
                                                        Hàng ngày
                                                    </option>
                                                    <option value="CA">
                                                        Hàng tuần
                                                    </option>
                                                </select>
                                            </div>
                                            <div className='flex my-2 gap-8'>
                                        <div className='flex p-2 w-full items-center hover:border-gray-400 bg-gray-50 border-black border-[1px] rounded-md'>
                                            {/* <i data-visualcompletion="css-img"className="x1b0d499 x1d69dk1"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -320px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/> */}
                                            <div className=''>
                                                <p className='mx-2'>Ngày kết thúc</p>
                                                {/* <p className='mx-2'><strong>7 Tháng 8, 2023</strong></p> */}
                                                <input className='mx-2 hover:bg-gray-300' type="date"></input>
                                            </div>
                                        </div>
                                        <div className='flex  p-2 w-full items-center hover:border-gray-400 bg-gray-50 border-black border-[1px] rounded-md'>
                                        {/* <img className="x1b0d499 xep6ejk "  src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/h15jrhghvUR.png" alt=""/> */}
                                            <div className=''>
                                                <p className='mx-2'>Thời gian kết thúc</p>
                                                {/* <p className='mx-2'><strong>7 Tháng 8, 2023</strong></p> */}
                                                <input className='mx-2 hover:bg-gray-300' type="time"></input>
                                            </div>
                                        </div>
                                    </div>
                                        </ul>
                                        
                                    </details>

                                    <div className=' flex p-4 bg-white w-full items-center justify-center gap-2'>
                                        <button className="bg-gray-300 shadow hover:bg-gray-400 text-[16px] text-black font-bold py-2 px-4 h-[40px] w-full rounded focus:outline-none focus:shadow-outline" onClick={()=>window.my_modal_3.showModal()} type="button">
                                            Tạo sự kiện      
                                        </button>
                                    </div>
                            </form>
                        </dialog>



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
                            <time className='hover:underline'>T6, 18 THÁNG 11, 2022</time>
                            <p className='font-bold text-[24px] hover:underline'>On Top Top Mỗi Ngày X10 Mức Thu Tết Ấm</p>
                            <div className='flex'>
                                <img className='w-[5%] h-[5%] rounded-full' src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/315640373_109075705358360_6098016627465134079_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=340051&_nc_ohc=uofj8Cx1K_AAX-vAEaz&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA8uUIy4UtIhaKEJRgb9AG_5A3dKcfnK8W1yvldMp_gmg&oe=64D490C8" alt=""></img>
                                <p className='mx-2 hover:underline'>Người tạo:<strong>Phạm Phúc</strong></p>
                            </div>
                            <div className='justify-between mx-4'>
                                <div onClick={handleNav} className=' block my-8 bg-gray-200 hover:bg-gray-300 top-2 flex items-center rounded  px-6 py-2.5 text-xs font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg '>
                                    {nav ? <AiOutlineClose size={20} className='text-black mx-2' /> : <  svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" className='mx-2'/></svg>   }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-4 border-b-[1px]'>
                        <img className='w-[20%] h-[20%] rounded-lg' src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/315640373_109075705358360_6098016627465134079_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=340051&_nc_ohc=uofj8Cx1K_AAX-vAEaz&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA8uUIy4UtIhaKEJRgb9AG_5A3dKcfnK8W1yvldMp_gmg&oe=64D490C8" alt=""></img>
                        <div className='mx-4'>
                            <time className='hover:underline'>T6, 18 THÁNG 11, 2022</time>
                            <p className='font-bold text-[24px] hover:underline'>On Top Top Mỗi Ngày X10 Mức Thu Tết Ấm</p>
                            <div className='flex'>
                                <img className='w-[5%] h-[5%] rounded-full' src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/315640373_109075705358360_6098016627465134079_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=340051&_nc_ohc=uofj8Cx1K_AAX-vAEaz&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA8uUIy4UtIhaKEJRgb9AG_5A3dKcfnK8W1yvldMp_gmg&oe=64D490C8" alt=""></img>
                                <p className='mx-2 hover:underline' >Người tạo:<strong>Phạm Phúc</strong></p>
                            </div>
                            <div className='justify-between mx-4'>
                                <div onClick={handleNav} className=' block my-8 bg-gray-200 hover:bg-gray-300 top-2 flex items-center rounded  px-6 py-2.5 text-xs font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg '>
                                    {navs ? <AiOutlineClose size={20} className='text-black mx-2' /> : <  svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" className='mx-2'/></svg>   }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className={nav ? 'rounded-lg lg:w-[400px] mx-1 p-2  sm:mx-12 md:mx-20 lg:mx-[25%] md:w-[350px] sm:w-[300px] w-[150px] absolute shadow-lg bg-green-200 text-black md:top-[700px] xl:top-[1150px] lg:top-[1000px] sm:top-[600px]  left-0  justify-center ' : 'absolute left-[-100%]'}>
                                    <div className='flex items-center gap-4 p-2  '>
                                    <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -738px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        <div className=''> 
                                            <p><strong>https://liên kết với tôi</strong></p>
                                            <p>Chia sẻ liên kết này để mời những người khác.</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-4 p-2 border-b-[1px] border-black'>
                                        <span>
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/Ux6-kYi8pUr.png")',backgroundPosition: "0px 0px",backgroundSize: "22px 44px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </span>
                                        <p><strong>Mời</strong></p>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -1068px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Chia sẻ</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -254px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Lưu</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/ZEGhgYEOa-Q.png")',backgroundPosition: "0px -224px",backgroundSize: "38px 418px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Thêm vào lịch</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -1002px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Báo cáo sự kiện</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/--VVu6fkmiY.png")',backgroundPosition: "0px -22px",backgroundSize: "22px 88px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Báo cáo sự kiện với quản trị viên nhóm</strong></p>
                                        </div>
                                    </div>
                                </div>



                                <div className={navs ? 'rounded-lg lg:w-[400px] mx-1 p-2  sm:mx-12 md:mx-20 lg:mx-[25%] md:w-[350px] sm:w-[300px] w-[150px] absolute shadow-lg bg-green-200 text-black md:top-[700px] xl:top-[1150px] lg:top-[1000px] sm:top-[600px]  left-0  justify-center ' : 'absolute left-[-100%]'}>
                                    <div className='flex items-center gap-4 p-2   '>
                                    <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -738px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        <div className=''> 
                                            <p><strong>https://liên kết với tôi</strong></p>
                                            <p>Chia sẻ liên kết này để mời những người khác.</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-4 p-2 border-b-[1px] border-black '>
                                        <span>
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/Ux6-kYi8pUr.png")',backgroundPosition: "0px 0px",backgroundSize: "22px 44px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </span>
                                        <p><strong>Mời</strong></p>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -1068px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Chia sẻ</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -254px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Lưu</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/ZEGhgYEOa-Q.png")',backgroundPosition: "0px -224px",backgroundSize: "38px 418px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Thêm vào lịch</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -1002px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Báo cáo sự kiện</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/--VVu6fkmiY.png")',backgroundPosition: "0px -22px",backgroundSize: "22px 88px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Báo cáo sự kiện với quản trị viên nhóm</strong></p>
                                        </div>
                                    </div>
                                </div>








             </div>
        </div>
    )
}


export default Event;