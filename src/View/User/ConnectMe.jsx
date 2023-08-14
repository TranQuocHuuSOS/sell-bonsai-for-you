import React, { Component } from "react";
import { Link } from "react-router-dom";
const BeginPage = () => {
  return (
    <div className="w-full  inline-block">
      <div className="min-h-[50vh] p-12">
        <span className="flex items-center justify-center top-[50px]">
            <img className="" src="https://w7.pngwing.com/pngs/618/6/png-transparent-computer-icons-bonsai-icon-design-bonsai-miscellaneous-logo-smiley.png" alt=""></img>
        </span>
        <p className="  flex items-center justify-center sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[32px] font-bold">
          Bạn đã có tài khoản hay chưa?
        </p>
        <p className="flex items-center justify-center text-blue-700 text-[13px] sm:text-[16px] md:text-[20px] lg:text-[20px] xl:text-[20px]">
          <Link to="/Signup"> Tạo một tài khoản!</Link>
        </p>
        <p className="flex items-center justify-center text-blue-700 text-[13px] sm:text-[16px] md:text-[20px] lg:text-[20px] xl:text-[20px]">
          <Link to="/Signin"> Tôi đã có tài khoản! </Link>
        </p>
      </div>
    </div>
  );
};

export default BeginPage;
