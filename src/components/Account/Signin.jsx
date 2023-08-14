import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import axios from "axios";
const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { login } = useAuth();
  function handleLogin() {
    // kiểm tra dữ liệu đăng nhập
    if (email && password) {
      axios
        .get("http://localhost:3000/users")
        .then((response) => {
          const userData = response.data;
          const user = userData.find(
            (user) => user.email === email && user.password === password
          );
          if (user) {
            login(user); // Call the login function from the AuthContext
            console.log("Login Successfully!");
            alert("bạn đã đăng nhập thành công!");
            // Lưu thông tin người dùng vào local storage
            localStorage.setItem("userData", JSON.stringify(user));
            if (user.role === "user" || user.role === "buyer") {
              window.location.href = "./Discussion";
            } else if (user.role === "admin") {
              window.location.href = "./Admin";
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
  return (
    <div className="   w-full">
      <div className="px-2 flex items-center justify-center min-h-[70vh] sm:min-h-[80vh] md:min-h-[100vh] lg:min-h-[100vh]   xl:min-h-[100vh]">
        <form className="bg-white p-2 sm:p-4 md:p-6 lg:p-8 xl:p-8    rounded sm:w-[60%] md:w-[50%] lg:w-[40%]  xl:w-[40%] shadow-lg  bg-gradient-to-b  from-green-500 to-green-200 ">
          <h3 className=" text-center font-bold text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]">
            Sign In
          </h3>
          <div className="mx-4">
            <label className="cursor-pointer my-2">Enter your email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="cursor-pointer shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Phone or email"
            />
          </div>
          <br />
          <div className="mx-4">
            <label className="cursor-pointer my-2">Enter your password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="cursor-pointer shadow font-light text-[16px]  appearance-none border  rounded w-full py-2 hover:border-green-500 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <br />
          <div className="text-center items-center lg:gap-2 justify-center">
            <button
              onClick={handleLogin}
              className="bg-green-700  shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[150px] rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <br />
            <a
              className=" py-2 align-baseline font-bold text-[16px] text-sm text-blue-700 hover:text-blue-500 "
              href="#"
            >
              <Link to="/Signup">Create Account</Link>
            </a>
            <br />
            <a
              className="py-2 align-baseline font-bold text-[16px] text-sm text-blue-700 hover:text-blue-500 "
              href="#"
            >
              <Link to="/ResetPassword">Forgot Password?</Link>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
