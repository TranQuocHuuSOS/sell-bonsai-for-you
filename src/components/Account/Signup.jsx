import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [numberphone, setNumberphone] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [numberphoneError, setNumberphoneError] = useState("");
  const [status, setStatus] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  function Sign_up() {
    // kiểm tra dữ liệu đăng nhập
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setRoleError("");
    setLocationError("");
    setNumberphoneError("");
    if (!username) {
      setUsernameError("Vui lòng nhập tên người dùng");
    }
    if (!email) {
      setEmailError("Vui lòng nhập email");
    }
    else if (!isValidEmail(email)) {
      setEmailError("Email không đúng định dạng");
    }
    if (!password) {
      setPasswordError("Vui lòng nhập mật khẩu");
    }
    if (!role) {
      setRoleError("Vui lòng chọn 1 vai trò");
    }
    if (!location) {
      setLocationError("Vui lòng nhập địa chỉ");
    }
    if (!numberphone) {
      setNumberphoneError("Vui lòng nhập sdt");
    }
    if (username && email && password && role && location && numberphone) {
    const data = {
      username: username,
      email: email,
      password: password,
      role: role,
      location: location,
      numberphone: numberphone,
      status: "action"
    };
    axios
      .post("http://localhost:3000/users", data)
      .then((Response) => {
        if (Response.status > 0) {
          setShowSuccessMessage(true);
          alert("Bạn đã đăng nhập thành công!");
        } else {
          console.error("Registration failed!");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }
}
function isValidEmail(email) {
  // Biểu thức chính quy để kiểm tra định dạng email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
  return (
    <div className="w-full">
      {showSuccessMessage ? (
        (window.location.href = "/Signin")
      ) : (
        <div className="px-2 py-8 flex items-center justify-center lg:min-h-[120vh] xl:min-h-[120vh]">
          <form className="bg-white p-2 sm:px-4 md:px-6 lg:px-8 xl:px-8    rounded sm:w-[60%] md:w-[50%] lg:w-[40%]  xl:w-[40%] shadow-lg  bg-gradient-to-b  from-green-500 to-green-200 ">
            <h3 className="text-center font-bold text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px]">
              Đăng ký
            </h3>
            <div className="mx-4">
              <label className="cursor-pointer">Nhập tên người dùng</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="cursor-pointer shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                placeholder="Tên người dùng"
              />
              <p className="text-red-500">{usernameError}</p>
            </div>
            <br />
            <div className="mx-4">
              <label className="cursor-pointer">Nhập email của bạn</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="cursor-pointer shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                placeholder="Đại chỉ email"
              />
              <p className="text-red-500">{emailError}</p>
            </div>
            <br />
            <div className="mx-4">
              <label className="cursor-pointer">Mật khẩu của bạn</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="cursor-pointer shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                placeholder="Mật khẩu"
              />
               <p className="text-red-500">{passwordError}</p>
            </div>

            <br />
            <div className="mx-4">
              <label className="cursor-pointer">Vị trí của bạn</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="cursor-pointer shadow font-light text-[16px]  appearance-none border rounded w-full py-2 px-3 hover:border-green-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                placeholder="Nhập vị trí của bạn tại đây"
              />
               <p className="text-red-500">{locationError}</p>
            </div>
            <br />
            <div className="mx-4">
              <label className="cursor-pointer">SDT của bạn</label>
              <input
                type="number"
                value={numberphone}
                onChange={(e) => setNumberphone(e.target.value)}
                className="cursor-pointer shadow font-light text-[16px]  appearance-none border  rounded w-full py-2 hover:border-green-500 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                placeholder="Nhập sdt tại đây"
              />
               <p className="text-red-500">{numberphoneError}</p>
            </div>
            <br />
            <div className="mx-4">
              <label className="cursor-pointer">Vai trò của bạn</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                id="countries"
                className="cursor-pointer bg-gray-50 border-[1px] hover:bg-gray-300 border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="cursor-pointer" selected="selected">Vui lòng chọn một vai trò!</option>
                <option value="Người dùng" className="cursor-pointer flex">
                  Người dùng
                </option>
                <option value="Người bán" className="cursor-pointer">
                  Người bán
                </option>
              </select>
              <p className="text-red-500">{roleError}</p>
            </div>
            <div className="grid text-center items-center justify-center">
              <button
                onClick={Sign_up}
                className="bg-green-700 my-4 shadow hover:bg-green-500  text-[16px] text-white font-bold py-2 px-4 h-[40px] w-[150px] rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Đăng ký
              </button>
              <a
                className=" py-2 align-baseline font-bold text-[16px] text-sm text-blue-700 hover:text-blue-500 "
                href="#"
              >
                <Link to="/Signin">Tôi đã có tài khoản!</Link>
              </a>
              <br />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Signup;
