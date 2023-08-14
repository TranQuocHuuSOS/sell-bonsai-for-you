import React, { Component , useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useAuth } from '../Account/AuthContext';
const Header =()=>{
    const { isLoggedIn, userData,login, logout } = useAuth(); // Use the useAuth hook
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleLogout = () => {
        // Thực hiện đăng xuất
        logout();
        // Đổi trạng thái của dropdown thành đóng
        setIsDropdownOpen(false);
        // Quay về trang đăng nhập
        window.location.href = "/Signin";
      };
    // Lấy thông tin người dùng từ local storage khi tải trang
    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            login(parsedUserData);
        }
    }, [login]);
    const showProfileAndLogout = isLoggedIn || userData;
        return (
            <header className='fixed w-full bg-white'>
                <div className=' grid sm:flex md:flex lg:flex xl:flex Navbar items-center p-2 md:p-4 lg:p-6 xl:p-6 justify-center sm:justify-between md:justify-between lg:justify-between xl:justify-between'>
                    <div className='name-web'>
                        <Link to="/" className="Home text-green-700 font-extrabold text-[20px] md:text-[30px] lg:text-[30px] hover:text-green-500 flex justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start">FloraTradeNetwork</Link>
                    </div>
                    <div className="flex items-center justify-center sm:justify-end md:justify-end lg:justify-end xl:justify-end  w-full lg:max-w-[800vw] xl:max-w-[800vw] ">
                        <div className="bg-white flex items-center sm:justify-end md:justify-end lg:justify-end xl:justify-end lg:gap-2 w-full rounded ">
                            
                           
                               {/* Kiểm tra isLoggedIn để ẩn nút Đăng nhập và Đăng ký khi đã đăng nhập */}
                            {!isLoggedIn && (
                                 <div className="flex items-center lg:gap-2 justify-between gap-2">
                                    <button className="hidden lg:block xl:block bg-green-700 shadow hover:bg-green-500 text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[100px] rounded focus:outline-none focus:shadow-outline" type="button">
                                        <Link to="/Signin">Sign In</Link>
                                    </button>
                                    <button className="hidden lg:block xl:block bg-green-700 shadow hover:bg-green-500 text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[100px] rounded focus:outline-none focus:shadow-outline" type="button">
                                        <Link to="/Signup">Sign Up</Link>
                                    </button>
                                </div>
                            )}
                            {showProfileAndLogout && (
                                <details className="dropdown h-[30px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px]">
                                    <summary  className=" flex hover:bg-gray-300  top-2  items-center rounded bg-primary px-6 py-2.5 text-xs font-bold uppercase leading-tight bg-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg h-[30px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px]  text-[16px]">Profile</summary>
                                        <div className="font-bold text-[16px] rounded-lg mx-4 right-[2px] sm:right-[10px] md:right-[10px] lg:right-[10px] xl:right-[10px] p-2 absolute menu dropdown-content z-[1] bg-base-100 rounded-box shadow-lg bg-green-200 text-black">
                                            Welcome, {isLoggedIn && userData ? userData.username : "Guest"}
                                        </div>
                                </details>
                            )}
                             {showProfileAndLogout && (
                                <button  onClick={handleLogout} className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                                </button>
                            )}
                            </div>
                        </div>
                    </div>
            </header>
        );
    }

export default Header;