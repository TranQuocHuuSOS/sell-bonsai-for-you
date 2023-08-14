import React, { Component } from "react";
import { Link } from "react-router-dom";
const Page_main = () => {
  return (
    <div className="py-24">
      <div className="grid grid-cols-5 border-[5px] p-4 border-green-700">
        <div class="border-[2px] border-green-700 flex items-center justify-center p-2 font-bold">
          <button type="button">
            <Link to="/List_users">Danh sách người dùng</Link>
          </button>
        </div>
        <div class="border-[2px] border-green-700 flex items-center justify-center p-2 font-bold">
          <button type="button">
            <Link to="/List_posts">Danh sách bài đăng</Link>
          </button>
        </div>
        <div class="border-[2px] border-green-700 flex items-center justify-center p-2 font-bold">
          <button type="button">
            <Link to="/List_posts">Danh sách sự kiện</Link>
          </button>
        </div>
        <div class="border-[2px] border-green-700 flex items-center justify-center p-2 font-bold">
          <button type="button">
            <Link to="/List_posts">Danh sách hình ảnh</Link>
          </button>
        </div>
        <div class="border-[2px] border-green-700 flex items-center justify-center p-2 font-bold">
          <button type="button">
            <Link to="/List_posts">Danh sách video, album</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Page_main;
