import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../../components/style/output.css";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import Discuss from './Discuss';
library.add(fas);

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="shadow-lg  bg-gradient-to-b items-center justify-between from-green-400 to-green-0 w-full  h-auto">
      <a className="flex  items-center justify-center">
        <img
          className="items-center justify-center w-[75%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
          src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/19/1046610/6.jpeg"
          alt=""
        ></img>
      </a>
      <div className="lg:flex md:flex sm:block block justify-between  sm:px-16 md:px-24 lg:px-48 py-4 sm:py-4 md:py-6 lg:py-8 xl:py-8 px-8">
        <h3 className="cursor-pointer hover:underline text-[16px] sm:text-[18px] md:text-[18px] justify-center items-center text-center lg:text-h4-2  xl:text-h4-2 font-bold">
          Hội BONSAI - CÂY CẢNH
        </h3>
        <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-4">
          <button className="h-[30px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px]  top-2 flex bg-green-500 hover:bg-green-500 items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              height="1rem"
              viewBox="0 0 576 512"
            >
              <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
            </svg>
            <p className="text-black hidden sm:block md:block lg:block hover:text-gray-700 font-bold text-[16px]">
              Tham gia nhóm
            </p>
          </button>
          <button
            onClick={() => window.my_modal_invite.showModal()}
            type="button"
            className="   top-2 flex bg-green-500 hover:bg-green-500 items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg h-[30px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
            <p className="text-black hidden sm:block md:block lg:block hover:text-gray-700 font-bold text-[16px]">
              Mời
            </p>
          </button>

          <dialog
            id="my_modal_invite"
            className="modal w-[100%] sm:w-[95%] md:w-[90%] lg:w-[90%] xl:w-[90%] rounded-xl"
          >
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="flex font-bold text-lg border-b-[1px] p-6 justify-center items-center text-[14px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px]">
                Mời bạn bè tham gia nhóm này
              </h3>
              <p className="flex px-4 text-p-[12px] ">
                Lọc bạn bè để lọc theo hạn mục
              </p>
              <div className="flex border-b-[2px] ">
                <div className="basis-full lg:basis-3/4 xl:basis-3/4  p-4 items-center justify-center ">
                  <div className="sm:flex md:flex lg:flex xl:flex gap-4 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2">
                    <button
                      className="flex items-center justify-center md:justify-start lg:justify-start xl:justify-start gap-2 bg-gray-300 shadow hover:bg-gray-400 text-[16px] text-black font-bold py-2 px-4 h-[40px] w-full rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      <img
                        class="x1b0d499 xi3auck"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/Z0Ov3P_7mJZ.png"
                        alt=""
                        height="20"
                        width="20"
                      ></img>
                      Đà Nẵng
                    </button>
                    <button
                      className="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 flex items-center justify-center md:justify-start lg:justify-start xl:justify-start gap-2 bg-gray-300 shadow hover:bg-gray-400 text-[16px] text-black font-bold py-2 px-4 h-[40px] w-full rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      <img
                        class="x1b0d499 xep6ejk"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/LC3-zr-r3Mt.png"
                        alt=""
                        height="20"
                        width="20"
                      ></img>
                      Nhóm chung
                    </button>
                    <button
                      className="flex items-center justify-center md:justify-start lg:justify-start xl:justify-start gap-2 bg-gray-300 shadow hover:bg-gray-400 text-[16px] text-black font-bold py-2 px-4 h-[40px] w-full rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      <img
                        class="x1b0d499 xep6ejk"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/Oxb4oFfUmiY.png"
                        alt=""
                        height="20"
                        width="20"
                      ></img>
                      Quảng Ngãi
                    </button>
                  </div>
                  <div className="p-4">
                    <input
                      className="border-[1px solid] border-black p-4 font-light text-[16px] flex  bg-gray-200  rounded-[50px] w-full hover:border-gray-500  text-gray-700  "
                      id="password"
                      type="text"
                      placeholder="Tìm bạn bè theo tên"
                    />
                  </div>
                  <div className="max-h-[200px] overflow-y-scroll">
                    <div className="cursor-pointer flex items-center justify-between py-2 mx-4">
                      <div className="flex items-center">
                        <a className="">
                          <img
                            className="rounded-full w-[30px] sm:w-[40px] md:w-[50px] lg:w-[50px] xl:w-[50px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                            src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                            alt=""
                          ></img>
                        </a>
                        <div className="">
                          <p className="mx-2 font-medium text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] hover:underline">
                            Nguyễn Trọng Nam
                          </p>
                          <p className="hidden sm:flex md:flex lg:flex xl:flex mx-2 max-w-md">
                            9 bạn chung bao gồm Dương Thị Hồng Lam và Muas Aster
                          </p>
                        </div>
                      </div>
                      <div className="cursor-pointer flex items-center justify-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          defaultValue=""
                          className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    </div>
                    <div className="cursor-pointer flex items-center justify-between py-2 mx-4">
                      <div className="flex items-center">
                        <a className="">
                          <img
                            className="rounded-full w-[30px] sm:w-[40px] md:w-[50px] lg:w-[50px] xl:w-[50px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                            src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                            alt=""
                          ></img>
                        </a>
                        <div className="">
                          <p className=" mx-2 font-medium text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] hover:underline">
                            Tran Quoc Huu
                          </p>
                          <p className=" mx-2 hidden sm:flex md:flex lg:flex xl:flex max-w-md">
                            9 bạn chung bao gồm Dương Thị Hồng Lam và Muas Aster
                          </p>
                        </div>
                      </div>
                      <div className="cursor-pointer flex items-center justify-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          defaultValue=""
                          className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    </div>
                    <div className="cursor-pointer flex items-center justify-between py-2 mx-4">
                      <div className="flex items-center">
                        <a className="">
                          <img
                            className="rounded-full w-[30px] sm:w-[40px] md:w-[50px] lg:w-[50px] xl:w-[50px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                            src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                            alt=""
                          ></img>
                        </a>
                        <div className="">
                          <p className=" mx-2 font-medium text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] hover:underline">
                            Tran Quoc Toản
                          </p>
                          <p className=" mx-2 hidden sm:flex md:flex lg:flex xl:flex max-w-md">
                            9 bạn chung bao gồm Dương Thị Hồng Lam và Muas Aster
                          </p>
                        </div>
                      </div>
                      <div className="cursor-pointer flex items-center justify-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          defaultValue=""
                          className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    </div>
                    <div className="cursor-pointer flex items-center justify-between py-2 mx-4">
                      <div className="flex items-center">
                        <a className="">
                          <img
                            className="rounded-full w-[30px] sm:w-[40px] md:w-[50px] lg:w-[50px] xl:w-[50px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                            src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                            alt=""
                          ></img>
                        </a>
                        <div className="">
                          <p className="mx-2 font-medium text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] hover:underline">
                            Tran Quoc Tuấn
                          </p>
                          <p className="cursor-pointer mx-2 hidden sm:flex md:flex lg:flex xl:flex max-w-md">
                            9 bạn chung bao gồm Dương Thị Hồng Lam và Muas Aster
                          </p>
                        </div>
                      </div>
                      <div className="cursor-pointer flex items-center justify-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          defaultValue=""
                          className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block xl:block  basis-1/4 p-4 ">
                  <div className="bg-gray-300   h-full rounded-sm">
                    <p className="mx-2">Chưa chọn người bạn nào</p>
                  </div>
                </div>
              </div>
              <div className="grid sm:flex md:flex lg:flex xl:flex items-center justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start border-b-[1px] p-4">
                <a className="">
                  <i
                    data-visualcompletion="css-img"
                    className="x1b0d499 xep6ejk"
                    style={{
                      backgroundImage:
                        'url("https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/64xKwXc2k78.png")',
                      backgroundPosition: "0px 0px",
                      backgroundSize: "26px 26px",
                      width: 24,
                      height: 24,
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  />
                </a>
                <div className="cursor-pointer">
                  <p className=" mx-2 font-medium text-[16px]">Mời qua mã QR</p>
                  <p className=" mx-2">
                    Bạn có thể tạo mã QR để mọi người quét để truy cập vào nhóm
                    của bạn
                  </p>
                </div>
              </div>
              <div className="flex gap-2 p-4 ">
                <div className="flex items-center justify-center gap-2 w-full">
                  <button
                    className=" inline-block gap-2 bg-gray-300 shadow hover:bg-gray-400 text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] text-black font-bold py-2 px-4 h-[40px] w-full rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Hủy
                  </button>
                  <button
                    className=" gap-2 inline-block bg-gray-300 shadow hover:bg-gray-400 text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] text-black font-bold py-2 px-4 h-[40px] w-[100%] rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Gửi lời mời
                  </button>
                </div>
              </div>
            </form>
          </dialog>
        </div>
      </div>
      <details className="dropdown px-0 sm:px-16 md:px-24 lg:px-32 xl:px-48 py-0">
        <summary className="cursor-pointer m-1 btn hover:bg-gray-300">
          Hội nhóm liên quan
        </summary>
        <ul className="border-[1px] top-[10%] p-2 bg-white w-[100%] shadow-xl menu dropdown-content bg-base-100 rounded-md ">
          <div className="container">
            <div className="grid sm:flex md:flex lg:flex xl:flex items-center justify-center sm:justify-between md:justify-between lg:justify-between xl:justify-between">
              <p className="flex justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start">
                Nhóm liên quan
              </p>
              <p className="cursor-pointer text-blue-700 flex justify-center sm:justify-end md:justify-end lg:justify-end xl:justify-end">
                Khám phá các nhóm khác
              </p>
            </div>
            <div className="grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-0 sm:p-2 md:p-4 lg:p-4 xl:p-4 ">
              <div className="rounded-lg shadow-xl border-[1px] ">
                <img
                  className="cursor-pointer rounded-lg"
                  src="https://henryjewels.com/images/products/2022/12/14/original/cover_1670993739.jpg"
                  alt=""
                ></img>
                <div className="p-4">
                  <p className="cursor-pointer text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] hover:underline">
                    <strong>Hội buôn bán giao lưu trầm</strong>
                  </p>
                  <p className="sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px]">
                    117K thành viên • Hơn 10 bài viết/ngày
                  </p>
                  <div className="flex items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    <h4 className=" mx-2">Công khai</h4>
                  </div>
                </div>
                <div className="p-4">
                  <button className="cursor-pointer justify-center  top-2 flex w-full bg-blue-500 hover:bg-blue-700 items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      height="1rem"
                      viewBox="0 0 576 512"
                    >
                      <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
                    </svg>
                    <p className="text-black hidden sm:block md:block lg:block xl:block hover:text-gray-700 font-bold text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                      Tham gia nhóm
                    </p>
                  </button>
                </div>
              </div>

              <div className="rounded-lg shadow-xl border-[1px]">
                <img
                  className="cursor-pointer rounded-lg"
                  src="https://henryjewels.com/images/products/2022/12/14/original/cover_1670993739.jpg"
                  alt=""
                ></img>
                <div className="p-4">
                  <p className="cursor-pointer text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] hover:underline">
                    <strong>Hội buôn bán giao lưu trầm</strong>
                  </p>
                  <p className="sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px]">
                    117K thành viên • Hơn 10 bài viết/ngày
                  </p>
                  <div className="flex items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    <h4 className=" mx-2">Công khai</h4>
                  </div>
                </div>
                <div className="p-4">
                  <button className="cursor-pointer justify-center  top-2 flex w-full bg-blue-500 hover:bg-blue-700 items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      height="1rem"
                      viewBox="0 0 576 512"
                    >
                      <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
                    </svg>
                    <p className="cursor-pointer text-black hidden sm:block md:block lg:block xl:block hover:text-gray-700 font-bold text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                      Tham gia nhóm
                    </p>
                  </button>
                </div>
              </div>
              <div className="rounded-lg shadow-xl border-[1px]">
                <img
                  className="cursor-pointer rounded-lg"
                  src="https://henryjewels.com/images/products/2022/12/14/original/cover_1670993739.jpg"
                  alt=""
                ></img>
                <div className="p-4">
                  <p className="cursor-pointer text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] hover:underline">
                    <strong>Hội buôn bán giao lưu trầm</strong>
                  </p>
                  <p className="sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px]">
                    117K thành viên • Hơn 10 bài viết/ngày
                  </p>
                  <div className="flex items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    <h4 className=" mx-2">Công khai</h4>
                  </div>
                </div>
                <div className="p-4">
                  <button className="cursor-pointer justify-center  top-2 flex w-full bg-blue-500 hover:bg-blue-700 items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      height="1rem"
                      viewBox="0 0 576 512"
                    >
                      <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
                    </svg>
                    <p className="cursor-pointer text-black hidden sm:block md:block lg:block xl:block hover:text-gray-700 font-bold text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                      Tham gia nhóm
                    </p>
                  </button>
                </div>
              </div>
              <div className="rounded-lg shadow-xl border-[1px]">
                <img
                  className="cursor-pointer rounded-lg"
                  src="https://chuteu.com/wp-content/uploads/2021/12/top-14-cay-canh-dep-nhat-viet-nam-10.jpg"
                  alt=""
                ></img>
                <div className="p-4">
                  <p className="cursor-pointer text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] hover:underline">
                    <strong>Hội Cây Cảnh Việt Nam</strong>
                  </p>
                  <p className="sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px]">
                    48K thành viên • 8 bài viết/ngày
                  </p>
                  <div className="flex items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    <h4 className=" mx-2">Công khai</h4>
                  </div>
                </div>
                <div className="p-4">
                  <button className="cursor-pointer justify-center  top-2 flex w-full bg-blue-500 hover:bg-blue-700 items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      height="1rem"
                      viewBox="0 0 576 512"
                    >
                      <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
                    </svg>
                    <p className="cursor-pointer text-black hidden sm:block md:block lg:block xl:block hover:text-gray-700 font-bold text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                      Tham gia nhóm
                    </p>
                  </button>
                </div>
              </div>
              <div className="rounded-lg shadow-xl border-[1px]">
                <img
                  className="cursor-pointer rounded-lg"
                  src="https://nhadepso.com/wp-content/uploads/2023/01/cay-bonsai-dep_1.jpg"
                  alt=""
                ></img>
                <div className="p-4">
                  <p className="cursor-pointer text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] hover:underline">
                    <strong>Giao lưu Bonsai</strong>
                  </p>
                  <p className="sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px]">
                    12K thành viên • 10 bài viết/tuần
                  </p>
                  <div className="flex items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    <h4 className=" mx-2">Công khai</h4>
                  </div>
                </div>
                <div className="p-4">
                  <button className="cursor-pointer justify-center  top-2 flex w-full bg-blue-500 hover:bg-blue-700 items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      height="1rem"
                      viewBox="0 0 576 512"
                    >
                      <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
                    </svg>
                    <p className="text-black hidden sm:block md:block lg:block xl:block hover:text-gray-700 font-bold text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                      Tham gia nhóm
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </details>

      {/*bắt đầu thanh navbar */}
      <div className="flex justify-between items-center mx-1 sm:mx-16 md:mx-28 lg:mx-48 py-4 sm:py-4 md:py-6 lg:py-8 xl:py-8 px-8   border-t-[1px] border-gray-300 ">
        <div>
          <div className="xl:flex  hidden md:text-center md:items-center lg:text-center lg:items-center sm:text-center sm:items-center text-center items-center">
            <ul
              id="tqd-top-menu"
              className="tabs xl:flex  hidden sm:gap-2 md:gap-1 lg:gap-4 md:text-center md:items-center lg:text-center lg:items-center sm:text-center sm:items-center text-center items-center"
            >
              <li className=" tab-item  tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link className="tab-icon fas fa-code" to="/Discussion">
                  Thảo luận
                </Link>
              </li>
              <li className="tab-item  tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link className="tab-icon fas fa-code" to="/Important">
                  Đáng chú ý
                </Link>
              </li>
              <li className="tab-item  tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link className="tab-icon fas fa-code" to="/Collaborators">
                  Mọi người
                </Link>
              </li>
              <li className="tab-item  tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link className="tab-icon fas fa-code" to="/Event">
                  Sự kiện
                </Link>
              </li>
              <li className="tab-item tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link className="tab-icon fas fa-code" to="/Multimedia">
                  File phương tiện
                </Link>
              </li>
              <li className="tab-item tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link className="tab-icon fas fa-code" to="/Utilities">
                  File
                </Link>
              </li>
            </ul>
          </div>

          {/*ở chế độ màn hình nhỏ hơn xl thì hiện icon tắt bật menu bằng cách click vào icon này*/}
          <div onClick={handleNav} className="block xl:hidden">
            {nav ? (
              <AiOutlineClose size={25} className="text-black" />
            ) : (
              <AiOutlineMenu size={25} className="text-black" />
            )}
          </div>

          <div
            className={
              nav
                ? "rounded-lg lg:w-[400px] mx-1  sm:mx-12 md:mx-20 lg:mx-36 md:w-[350px] sm:w-[300px] w-[150px] absolute bg-green-200 text-black md:top-[700px] lg:top-[800px] sm:top-[600px]  left-0  justify-center text-center"
                : "absolute left-[-100%]"
            }
          >
            <ul id="tqd-top-menu" className=" ">
              <li className="tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link to="/Discussion">Thảo luận</Link>
              </li>
              <li className="tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link to="/Important">Đáng chú ý</Link>
              </li>
              <li className="tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link to="/Collaborators">Mọi người</Link>
              </li>
              <li className="tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link to="/Event">Sự kiện</Link>
              </li>
              <li className="tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link to="/Multimedia">File phương tiện</Link>
              </li>
              <li className="tqd-top-menu-item hover:bg-gray-300 p-2 rounded font-normal text-[12px] md:text-[14px] lg:text-[16px]">
                <Link to="/Utilities">File</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex  gap-2 md:gap-4 lg:gap-4 items-center justify-center">
          <button
            onClick={() => window.my_modal_search.showModal()}
            type="button"
            className="   flex hover:text-green-300 bg-green-500 hover:bg-green-600 items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg h-[30px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
          {/*Bắt đầu modal search */}
          <dialog
            id="my_modal_search"
            className="modal w-[100%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[50%] rounded-xl"
          >
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <form className="w-[95%] p-4  ">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="cursor-pointer block w-full p-4 pl-10 text-sm text-gray-900 border bg-gray-300 border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tìm kiếm hội nhóm, bạn bè,..."
                    required=""
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>

                <p className="flex items-center justify-center my-4">
                  Không có tìm kiếm nào gần đây.
                </p>
                <div className="p-0 sm:p-2 md:p-4 lg:p-4 xl:p-4">
                  <p>
                    <strong>Khám phá nhóm này</strong>
                  </p>
                  <div className="cursor-pointer flex items-center my-2">
                    <a className="">
                      <img
                        className="rounded-full w-[30px] sm:w-[40px] md:w-[50px] lg:w-[50px] xl:w-[50px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                        src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                        alt=""
                      ></img>
                    </a>
                    <div className="">
                      <p className=" mx-2 font-medium text-[16px] hover:underline">
                        Tran Quoc Huu
                      </p>
                      <p className=" mx-2 text-[12px]">
                        Xem hoạt động của bạn trong nhóm này.
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer flex items-center my-2">
                    <a className="flex items-center justify-center rounded-full w-[30px] sm:w-[40px] md:w-[50px] lg:w-[50px] xl:w-[50px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[50px] bg-gray-300">
                      <svg
                        className=" w-6 h-6 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </a>
                    <div className="">
                      <p className=" mx-2 font-medium text-[16px]">
                        Tìm kiếm toàn bộ facebook
                      </p>
                    </div>
                  </div>
                </div>
                <div className="items-center justify-center text-center">
                  <p className="">Bạn đang làm gì à?</p>
                  <p className="text-[12px]">
                    Tìm kiếm bài viết, bình luận hoặc thành viên trong hội
                    BONSAI - CÂY CẢNH
                  </p>
                </div>
              </form>
            </form>
          </dialog>

          {/*Kết thúc modal search */}
          {/* <button onClick={handleNavs} class="m-1 btn hover:bg-gray-300  top-2 flex items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight bg-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"id="button-addon1"data-te-ripple-initdata-te-ripple-color="light">
                        {nav ? <AiOutlineClose size={20} className='text-black mx-2' /> : <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>   }  
                </button> */}
          <details className="cursor-pointer dropdown h-[30px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px]">
            <summary className=" flex hover:bg-gray-300  top-2  items-center rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight bg-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg h-[30px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
              </svg>
            </summary>
            <ul className="mx-4 right-[2px] sm:right-[10px] md:right-[10px] lg:right-[10px] xl:right-[10px] p-2 absolute menu dropdown-content z-[1] bg-base-100 rounded-box shadow-lg bg-green-200 text-black">
              <div className="flex items-center gap-4 p-2">
                <i
                  data-visualcompletion="css-img"
                  className="x1b0d499 xep6ejk"
                  style={{
                    backgroundImage:
                      'url("https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/bPGc_daV-R1.png")',
                    backgroundPosition: "0px -180px",
                    backgroundSize: "26px 564px",
                    width: 20,
                    height: 20,
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                />
                <div className="">
                  <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                    <strong>Nội dung của bạn</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2   ">
                <i
                  data-visualcompletion="css-img"
                  className="x1b0d499 xep6ejk"
                  style={{
                    backgroundImage:
                      'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',
                    backgroundPosition: "0px -1068px",
                    backgroundSize: "26px 1228px",
                    width: 20,
                    height: 20,
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                />
                <div className="">
                  <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                    <strong>Chia sẻ</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2">
                <i
                  data-visualcompletion="css-img"
                  className="x1b0d499 xep6ejk"
                  style={{
                    backgroundImage:
                      'url("https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/UybsExH-n_0.png")',
                    backgroundPosition: "0px -738px",
                    backgroundSize: "26px 1008px",
                    width: 20,
                    height: 20,
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                />
                <div className="">
                  <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                    <strong>Ghim nhóm</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2">
                <i
                  data-visualcompletion="css-img"
                  className="x1b0d499 xep6ejk"
                  style={{
                    backgroundImage:
                      'url("https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/UybsExH-n_0.png")',
                    backgroundPosition: "0px -386px",
                    backgroundSize: "26px 1008px",
                    width: 20,
                    height: 20,
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                />
                <div className="">
                  <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                    <strong>Sắp xếp bình luận</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2">
                <i
                  data-visualcompletion="css-img"
                  className="x1b0d499 xep6ejk"
                  style={{
                    backgroundImage:
                      'url("https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/UybsExH-n_0.png")',
                    backgroundPosition: "0px -804px",
                    backgroundSize: "26px 1008px",
                    width: 20,
                    height: 20,
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                />
                <div className="">
                  <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                    <strong>Báo cáo nhóm</strong>
                  </p>
                </div>
              </div>
            </ul>
          </details>

          {/* <div onClick={handleNav} className='block '>
                                        {nav ? <AiOutlineClose size={20} className='text-black mx-2' /> : <  svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" className='mx-2'/></svg>   }
                                    </div> */}
          {/* <div className={navs ? 'rounded-lg lg:w-[400px] mx-1 p-2  sm:mx-12 md:mx-20 lg:mx-[60%] md:w-[350px] sm:w-[300px] w-[150px] absolute shadow-lg bg-green-200 text-black md:top-[700px] xl:top-[800px] lg:top-[200px] sm:top-[600px]  left-0  justify-center ' : 'absolute left-[-100%]'}>
                                    <div className='flex items-center gap-4 p-2   '>
                                    <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -738px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        <div className=''> 
                                            <p><strong>huu</strong></p>
                                            <p>Chia sẻ liên kết này để mời những người khác.</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-4 p-2 border-b-[1px] border-black '>
                                        <span>
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/Ux6-kYi8pUr.png")',backgroundPosition: "0px 0px",backgroundSize: "22px 44px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </span>
                                        <p><strong>Mời</strong></p>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -1068px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Chia sẻ</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -254px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Lưu</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/ZEGhgYEOa-Q.png")',backgroundPosition: "0px -224px",backgroundSize: "38px 418px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Thêm vào lịch</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',backgroundPosition: "0px -1002px",backgroundSize: "26px 1228px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Báo cáo sự kiện</strong></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 p-2'>
                                        <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                                            <i data-visualcompletion="css-img"className="x1b0d499 xep6ejk"style={{backgroundImage:'url("https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/--VVu6fkmiY.png")',backgroundPosition: "0px -22px",backgroundSize: "22px 88px",width: 20,height: 20,backgroundRepeat: "no-repeat",display: "inline-block"}}/>
                                        </div>
                                        <div className=''> 
                                            <p><strong>Báo cáo sự kiện với quản trị viên nhóm</strong></p>
                                        </div>
                                    </div>
                                </div> */}
        </div>
        {/* <div class="xl:hidden text-center items-center cursor-pointer px-3 sm:px-8">
                <svg id="tql-toggle-top-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tqd-icon w-[24px] h-[24px]">  
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>                          
            </div> */}
      </div>
      {/*kết thúc thanh navbar */}
    </div>
  );
};
export default Navbar;
