
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '../../components/style/output.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import Discuss from './Discuss';
library.add(fas);
const Navbar=()=> {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='shadow-lg  bg-gradient-to-b items-center justify-between from-green-400 to-green-0 w-full  h-auto'>
        <a className='flex  items-center justify-center'>
            <img className='items-center justify-center w-[75%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg' src='https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/19/1046610/6.jpeg' alt=""></img>
        </a>
        <div className='lg:flex md:flex sm:block block justify-between px-12 sm:px-20 md:px-36 lg:px-48 p-8'>
            <h3 className=' text-[20px] md:text-[18px] justify-center items-center text-center lg:text-h4-2 font-bold'>Hội BONSAI - CÂY CẢNH</h3>
            <div className='flex items-center justify-center gap-2 md:gap-4 lg:gap-4'>
                <button className='   top-2 flex bg-green-500 hover:bg-green-500 items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" height="1rem" viewBox="0 0 576 512"><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z"/></svg>
                    <p className='text-black hidden sm:block md:block lg:block hover:text-gray-700 font-bold text-[16px]'>Tham gia nhóm</p>
                </button>
                <button class=" text-green-500 hover:bg-gray-300  top-2 flex items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight bg-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"id="button-addon1"data-te-ripple-initdata-te-ripple-color="light">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                </button>
            </div>
        </div>
        <div className='flex justify-between items-center mx-1 sm:mx-16 md:mx-28 lg:mx-48 p-8   border-t-[1px] border-gray-300 '>
            <div>
                <div className='xl:flex  hidden md:text-center md:items-center lg:text-center lg:items-center sm:text-center sm:items-center text-center items-center'>
                    <ul id="tqd-top-menu" className=' xl:flex  hidden sm:gap-2 md:gap-1 lg:gap-4 md:text-center md:items-center lg:text-center lg:items-center sm:text-center sm:items-center text-center items-center'>
                        <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                            <Link  to="/">Thảo luận</Link>
                        </li>
                        <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                            <Link to="/Remarkable">Đáng chú ý</Link>
                        </li>
                        <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                            <Link to="/Everyone">Mọi người</Link>
                        </li>
                        <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                            <Link to="/Event">Sự kiện</Link>
                        </li>
                        <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                            <Link to="/Media_files">File phương tiện</Link>
                        </li>
                        <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                            <Link to="/File">File</Link>
                        </li>
                    </ul>
                </div>

                <div onClick={handleNav} className='block xl:hidden'>
                    {nav ? <AiOutlineClose size={25} className='text-black' /> : <AiOutlineMenu size={25} className='text-black' />}
                </div>
                
                <div className={nav ? 'rounded-lg lg:w-[400px] mx-1  sm:mx-12 md:mx-20 lg:mx-36 md:w-[350px] sm:w-[300px] w-[150px] absolute bg-green-200 text-black md:top-[700px] lg:top-[800px] sm:top-[600px]  left-0  justify-center text-center' : 'absolute left-[-100%]'}>
                <ul id="tqd-top-menu" className=' '>
                    <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                        <a href="#">Thảo luận</a>
                    </li>
                    <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                        <a href="#">Đáng chú ý</a>
                    </li>
                    <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                        <a href="#">Mọi người</a>
                    </li>
                    <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                        <a href="#">Sự kiện</a>
                    </li>
                    <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                        <a href="#">File phương tiện</a>
                    </li>
                    <li className='tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]'>
                        <a href="#">File</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className='flex  gap-2 md:gap-4 lg:gap-4'>
                <button className='  top-2 flex hover:text-green-300 bg-green-500 hover:bg-green-600 items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </button>
                <button class=" hover:bg-gray-300  top-2 flex items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight bg-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"id="button-addon1"data-te-ripple-initdata-te-ripple-color="light">
                   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                </button>
               

               
       



            </div>
            {/* <div class="xl:hidden text-center items-center cursor-pointer px-3 sm:px-8">
                <svg id="tql-toggle-top-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tqd-icon w-[24px] h-[24px]">  
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>                          
            </div> */}
        </div>
    </div>
    );
}
export default Navbar;