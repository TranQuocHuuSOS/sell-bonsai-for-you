import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Signup=()=> {
        const [username, setUsername]= useState("");
        const [email, setEmail]= useState("");
        const [password, setPassword]= useState("");
        const [role, setRole] = useState("");
        const [location , setLocation]= useState("");
        const [numberphone, setNumberphone] = useState("");
        const [showSuccessMessage, setShowSuccessMessage] = useState(false);
        function Sign_up(){
            const data={
                username: username,
                email: email,
                password : password,
                role: role,
                location: location,
                numberphone: numberphone
            };
            axios 
                .post("http://localhost:3000/users", data)
                .then((Response)=>{
                    if(Response.status>0){
                        setShowSuccessMessage(true);
                    }
                    else{
                        console.error("Registration failed!");
                    }
                })
                .catch((error) => {
                    console.error("An error occurred:", error);
                });
        }
        return(
            <div className='w-full'>
                {showSuccessMessage ?(
                    window.location.href="/Signin"
                ):(
                <div className='px-2 py-8 flex items-center justify-center lg:min-h-[120vh] xl:min-h-[120vh]'>
                    <form className="bg-white p-2 sm:p-4 md:p-6 lg:p-8 xl:p-8    rounded sm:w-[60%] md:w-[50%] lg:w-[40%]  xl:w-[40%] shadow-lg  bg-gradient-to-b  from-green-500 to-green-200 ">
                        <h3 className='text-center font-bold text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]'>Sign Up</h3>
                        <div className="mx-4">
                            <label className='my-2'>User name</label>
                            <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  placeholder="Enter your phone or email" />
                        </div>
                        <br/>
                        <div className="mx-4">
                            <label className='my-2'>Your Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Enter your email" />
                        </div>
                        <br/>
                        <div className="mx-4">
                            <label className='my-2'>Your password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Enter your password" />
                        </div>
                        
                        <br/>
                        <div className="mx-4">
                            <label className='my-2'>Your location</label>
                            <input type="text" value={location} onChange={(e)=> setLocation(e.target.value)} className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  placeholder="Enter your location" />
                        </div>
                        <br/>
                        <div className="mx-4">
                            <label className='my-2'>Your phone number</label>
                            <input type="number" value={numberphone} onChange={(e)=> setNumberphone(e.target.value)} className="shadow font-light text-[16px]  appearance-none border  rounded w-full py-2 hover:border-green-500 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password"  placeholder="Enter your phone number" />
                        </div>
                        <br/>
                        <div className="mx-4">
                            <label className='my-2'>Your role</label>
                            <input value={role} onChange={(e)=> setRole(e.target.value)} className="  shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Enter your role' id="username" type="text" />
                        </div>
                        <div className="grid text-center items-center justify-center">
                            <button onClick={Sign_up} className="bg-green-700 my-4 shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[150px] rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign up
                            </button>
                            <a className=" py-2 align-baseline font-bold text-[16px] text-sm text-blue-700 hover:text-blue-500 " href="#">
                                <Link to='/Signin'>Tôi đã có tài khoản!</Link>
                            </a>
                            <br/>
                        </div>
                    </form>
                </div>
                )}
                
            </div>
        );
}

export default Signup;