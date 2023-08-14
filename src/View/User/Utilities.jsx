import React, { Component } from "react";
import { Link } from "react-router-dom";
const File = () => {
  return (
    <div className="w-full  inline-block bg-gray-300">
      <div className="mx-0 sm:mx-6 md:mx-16 lg:mx-28 xl:mx-48 my-4 h-auto bg-white rounded-lg">
        <div className="flex items-center justify-between p-4">
          <p className="text-[20px] font-bold">File</p>
          <div className="flex gap-0 sm:gap-2  md:gap-4 lg:gap-6 xl:gap-6 items-center">
            <input
              className="cursor-pointer border-[1px solid] border-black p-2 font-light text-[16px] hidden  bg-gray-200  rounded-[50px] w-full hover:border-gray-500  text-gray-700 md:flex  lg:flex  xl:flex"
              id="password"
              type="text"
              placeholder="Tìm kiếm file..."
            />
            <button
              type="button"
              className="cursor-pointer top-2 flex  md:hidden lg:hidden xl:hidden bg-green-500 hover:bg-green-500 items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg h-[30px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
            <label className="cursor-pointer text-blue-700 w-[100px] md:w-[200px] lg:w-[200px] xl:w-[200px] h-[40px] flex text-center rounded-md items-center justify-center hover:bg-gray-300">
              <span>Tải file lên</span>
              <input type="file" style={{ display: "none" }} />
            </label>
          </div>
        </div>
        <div className="grid sm:flex md:flex lg:flex xl:flex gap-2 my-4 items-center justify-center border-t-[1px] mx-4">
          <button
            class="text-[14px] lg:text-[16px] xl:text-[16px] my-4 sm:my-8 md:my-8 lg:my-8  xl:my-8 sm:w-[20%] md:w-[30%] lg:w-[40%] xl:w-[45%] bg-gray-200 hover:bg-gray-300 top-2 flex items-center justify-center rounded px-6 py-2.5  font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-initdata-te-ripple-color="light"
          >
            TÊN FILE
          </button>
          <button
            class="text-[14px] lg:text-[16px] xl:text-[16px] my-4 sm:my-8 md:my-8 lg:my-8  xl:my-8 sm:w-[20%] md:w-[30%]  lg:w-[20%] xl:w-[25%] bg-gray-200 hover:bg-gray-300 top-2 flex items-center justify-center rounded px-6 py-2.5  font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-initdata-te-ripple-color="light"
          >
            LOẠI
          </button>
          <button
            class="text-[14px] lg:text-[16px] xl:text-[16px] my-4 sm:my-8 md:my-8 lg:my-8  xl:my-8 sm:w-[60%] md:w-[40%]  lg:w-[40%] xl:w-[30%] bg-gray-200 hover:bg-gray-300 top-2 flex items-center justify-center rounded px-6 py-2.5  font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-initdata-te-ripple-color="light"
          >
            LẦN SỬA ĐỔI GẦN ĐÂY...
          </button>
        </div>
      </div>
    </div>
  );
};

export default File;
