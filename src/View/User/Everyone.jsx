import React, { Component } from "react";
const Everyone = () => {
  return (
    <div className="w-full inline-block   bg-gray-300">
      <div className="mx-0 sm:mx-6 md:mx-20 lg:mx-36 xl:mx-48 my-4 h-auto bg-white rounded-lg">
        <div className="p-4">
          <strong>Thành viên</strong> · 50.118
          <br />
          Người và Trang mới tham gia nhóm này sẽ hiển thị tại đây.
          <strong className="cursor-pointer"> Tìm hiểu thêm</strong>
          <div className="p-4">
            <input
              className="cursor-pointer border-[1px solid] border-black p-4 font-light text-[16px] flex  bg-gray-200  rounded-[50px] w-full hover:border-gray-500  text-gray-700  "
              id="password"
              type="text"
              placeholder="Tìm kiếm bạn bè..."
            />
          </div>
        </div>
        <div className=" border-t-[1px] mx-2 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4">
          <p className="my-4">
            <strong>Quản trị viên & người kiểm duyệt</strong>· 2
          </p>
          <div className="flex  items-center justify-between p-4">
            <div className="flex items-center">
              <a className="cursor-pointer">
                <img
                  className="cursor-pointer rounded-full w-[50px] h-[50px]"
                  src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                  alt=""
                ></img>
              </a>
              <p className=" cursor-pointer mx-2 font-medium text-[16px] hover:underline">
                Tran Quoc Huu
              </p>
            </div>
            <div className="cursor-pointer mx-0 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4">
              <button className="   top-2 flex bg-green-500 hover:bg-green-500 items-center rounded bg-primary px-2 sm:px-2 md:px-4 lg:px-6 xl:px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  height="1rem"
                  viewBox="0 0 576 512"
                >
                  <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
                </svg>
                <p className="text-black hidden sm:block md:block lg:block hover:text-gray-700 font-bold text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px]">
                  Thêm bạn bè
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className=" border-t-[1px] mx-4">
          <p className="my-4">Thành viên có điểm chung</p>
          <div className="flex  items-center justify-between my-2 p-0 sm:p-4 md:p-4 lg:p-4 xl:p-4">
            <div className="flex items-center">
              <a className="">
                <img
                  className="cursor-pointer rounded-full w-[50px] h-[50px]"
                  src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                  alt=""
                ></img>
              </a>
              <div className="">
                <p className=" cursor-pointer mx-2 font-medium text-[16px] hover:underline">
                  Tran Quoc Huu
                </p>
                <p className="hidden md:flex lg:flex xl:flex mx-2">
                  9 bạn chung bao gồm Dương Thị Hồng Lam và Muas Aster
                </p>
                <p className="hidden sm:flex md:flex lg:flex xl:flex mx-2">
                  Trường PTDT Nội Trú Dăk tô
                </p>
              </div>
            </div>
            <div className="mx-0 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4">
              <button className="cursor-pointer top-2 flex bg-green-500 hover:bg-green-500 items-center rounded bg-primary px-2 sm:px-2 md:px-4 lg:px-6 xl:px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  height="1rem"
                  viewBox="0 0 576 512"
                >
                  <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
                </svg>
                <p className="text-black hidden sm:block md:block lg:block hover:text-gray-700 font-bold text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px]">
                  Thêm bạn bè
                </p>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between my-2 p-0 sm:p-4 md:p-4 lg:p-4 xl:p-4">
            <div className="flex items-center">
              <a className="">
                <img
                  className="cursor-pointer rounded-full w-[50px] h-[50px]"
                  src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                  alt=""
                ></img>
              </a>
              <div className="">
                <p className="cursor-pointer mx-2 font-medium text-[16px] hover:underline">
                  Tran Quoc Huu
                </p>
                <p className="hidden md:flex lg:flex xl:flex mx-2">
                  9 bạn chung bao gồm Dương Thị Hồng Lam và Muas Aster
                </p>
                <p className="hidden sm:flex md:flex lg:flex xl:flex mx-2">
                  Trường PTDT Nội Trú Dăk tô
                </p>
              </div>
            </div>
            <div className="mx-0 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4">
              <button className="   top-2 flex bg-green-500 hover:bg-green-500 items-center rounded bg-primary px-2 sm:px-2 md:px-4 lg:px-6 xl:px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  height="1rem"
                  viewBox="0 0 576 512"
                >
                  <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
                </svg>
                <p className="text-black hidden sm:block md:block lg:block hover:text-gray-700 font-bold text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px]">
                  Thêm bạn bè
                </p>
              </button>
            </div>
          </div>
          <div className="flex  items-center justify-between my-2 p-0 sm:p-4 md:p-4 lg:p-4 xl:p-4">
            <div className="flex items-center">
              <a className="">
                <img
                  className="cursor-pointer rounded-full w-[50px] h-[50px]"
                  src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                  alt=""
                ></img>
              </a>
              <div className="">
                <p className="cursor-pointer mx-2 font-medium text-[16px] hover:underline">
                  Tran Quoc Huu
                </p>
                <p className="hidden md:flex lg:flex xl:flex mx-2">
                  9 bạn chung bao gồm Dương Thị Hồng Lam và Muas Aster
                </p>
                <p className="hidden sm:flex md:flex lg:flex xl:flex mx-2">
                  Trường PTDT Nội Trú Dăk tô
                </p>
              </div>
            </div>
            <div className="mx-0 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4">
              <button className="top-2 flex bg-green-500 hover:bg-green-500 items-center rounded bg-primary px-2 sm:px-2 md:px-4 lg:px-6 xl:px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  height="1rem"
                  viewBox="0 0 576 512"
                >
                  <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
                </svg>
                <p className="text-black hidden sm:block md:block lg:block hover:text-gray-700 font-bold text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px]">
                  Thêm bạn bè
                </p>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <button className="flex items-center justify-center rounded-lg w-[200px] bg-gray-300 hover:bg-gray-400">
              <p className="py-2">xem tất cả</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Everyone;
