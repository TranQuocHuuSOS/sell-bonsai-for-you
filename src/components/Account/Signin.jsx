import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import axios from "axios";
const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { login } = useAuth();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleLogin() {
    // kiểm tra dữ liệu đăng nhập
    setEmailError("");
    setPasswordError("");
    if (!email) {
      setEmailError("Vui lòng nhập email");
    }
    else if (!isValidEmail(email)) {
      setEmailError("Email không đúng định dạng");
    }
    
    if (!password) {
      setPasswordError("Vui lòng nhập mật khẩu");
    }
    if (email && password ) {
      axios
        .get("http://localhost:3000/users")
        .then((response) => {
          const userData = response.data;
          const user = userData.find(
            (user) => user.email === email && user.password === password
          );
          if (user ) {
            if(user.status === 'action'){
            login(user); // Call the login function from the AuthContext
            console.log("Login Successfully!");
            alert("bạn đã đăng nhập thành công!");
            // Lưu thông tin người dùng vào local storage
            localStorage.setItem("userData", JSON.stringify(user));
            if (user.role === "Người dùng" || user.role === "Người bán") {
              window.location.href = "./Discussion";
            } 
            else if (user.role === "Quản lý") {
              window.location.href = "./Page_main";
            }
          }
          else{
            console.log("This account blocked!");
            alert("This account was blocked!")
          }
          } else {
            console.log("Invalid credentials!");
          }
        })
        .catch((error) => {
          console.error("An error occurred!", error);
        });
    } else {    
      console.log("Please enter email and password");
    }
  }
  function isValidEmail(email) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  return (
    <div className="   w-full">
      <div className="px-2 flex items-center justify-center min-h-[70vh] sm:min-h-[80vh] md:min-h-[100vh] lg:min-h-[100vh]   xl:min-h-[100vh]">
        <form className="bg-white p-2 sm:p-4 md:p-6 lg:p-8 xl:p-8    rounded sm:w-[60%] md:w-[50%] lg:w-[40%]  xl:w-[40%] shadow-lg  bg-gradient-to-b  from-green-500 to-green-200 ">
          <h3 className=" text-center font-bold text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]">
            Đăng nhập
          </h3>
          <div className="mx-4">
            <label className="cursor-pointer my-2">Nhập email của bạn</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="cursor-pointer shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="SDT hoặc Email" required
            />
             <p className="text-red-500">{emailError}</p>
          </div>
          <br />
          <div className="mx-4">
            <label className="cursor-pointer my-2">Nhập mật khẩu của bạn</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="cursor-pointer shadow font-light text-[16px]  appearance-none border  rounded w-full py-2 hover:border-green-500 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Mật khẩu của bạn" required
            />
             <p className="text-red-500">{passwordError}</p>
          </div>
          <br />
          <div className="text-center items-center lg:gap-2 justify-center">
            <button
              onClick={handleLogin}
              className="bg-green-700  shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[150px] rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Đăng nhập
            </button>
            <br />
            <a
              className=" py-2 align-baseline font-bold text-[16px] text-sm text-blue-700 hover:text-blue-500 "
              href="#"
            >
              <Link to="/Signup">Tạo một tài khoản</Link>
            </a>
            <br />
            <a
              className="py-2 align-baseline font-bold text-[16px] text-sm text-blue-700 hover:text-blue-500 "
              href="#"
            >
              <Link to="/ResetPassword">Quên mật khẩu?</Link>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
