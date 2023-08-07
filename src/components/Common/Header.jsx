import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const Header =()=>{
   
        return (
           
            <header className='fixed w-full bg-white'>
                <div className='flex Navbar items-center p-2 md:p-0 lg:p-6 justify-between'>
                    <div className='name-web'>
                        <Link to="/" className="Home text-green-700 font-extrabold text-[20px] md:text-[30px] lg:text-[30px] hover:text-green-500">FloraTradeNetwork</Link>
                    </div>
                    {/* <div class="relative mb-4 flex w-[400px] flex-wrap items-stretch">
                        <input type="search"class="relative m-0 -mr-0.5 block w-[100px]  flex-auto rounded-l border border-solid  bg-transparent bg-clip-padding px-3 py-[0.5rem] top-2 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search" aria-label="Search" aria-describedby="button-addon1" />
                        <button class="relative z-[2] top-2 flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"id="button-addon1"data-te-ripple-initdata-te-ripple-color="light">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </button>
                    </div> */}
                    {/* <div class="tqd-form-item">
                        <button type="submit" class=" px-4 tqd-button hover:bg-white hover:border-[1px] hover:border-green-700 hover:text-green-700 bg-green-700 text-white h-[54px]  md:w-max xs:w-max max-w-full  leading-5">    
                            <Link to="">Sign in</Link>
                        </button>
                        <button type="submit" class=" px-4 tqd-button border-[1px] border-green-700 bg-white text-gray-900 h-[54px]  md:w-max xs:w-max max-w-full hover:bg-green-700 hover:text-white   leading-5">    
                        <Link to="">Sign up</Link>
                        </button>
                    </div> */}


                    <div className="w-full max-w-[800px]">
                    <form className="bg-white flex items-center justify-end lg:gap-2 w-full rounded ">
                        <div className="">
                        <input className="shadow font-light text-[16px] hidden lg:block md:hidden appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Phone or email" />
                        </div>
                        <div className=" ">
                        <input className="shadow font-light text-[16px] hidden lg:flex md:hidden appearance-none border  rounded w-full py-2 hover:border-green-500 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
                        
                        </div>
                        <div className="flex items-center lg:gap-2 justify-between gap-2">
                        <button className="hidden lg:block xl:block bg-green-700 shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[100px] rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <button className="hidden lg:block xl:block bg-green-700 shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[100px] rounded focus:outline-none focus:shadow-outline" type="button">
                            <Link to="/Signup" >Sign Up</Link>
                        </button>
                        <button className="block lg:hidden xl:hidden bg-green-700 shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[100px] rounded focus:outline-none focus:shadow-outline" type="button">
                            <Link to="/Signin"  >Profile</Link>
                        </button>
                        <a className="inline-block hidden lg:hidden xl:block md:hidden align-baseline font-bold text-[16px] text-sm text-green-700 hover:text-green-500 " href="#">
                        <Link to="/ResetPassword"  >Forgot Password?</Link> 
                        </a>
                        </div>
                    </form>
                    </div>


                    
                </div>
            </header>
      
        );
    }

export default Header;