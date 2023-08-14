import React, { Component } from "react";
const List_posts = () => {
  return (
  <div className="flex items-center justify-center">
  <div className="">
    <p className="flex items-center justify-center font-bold text-[32px]">Danh sách bài đăng</p>
    <table class="border-[2px] border-green-700 w-full mx-4">
      <thead>
        <tr >
          <th className=" border-[2px] border-green-700 w-full">Song</th>
          <th className=" border-[2px] border-green-700 w-full">Artist</th>
          <th className=" border-[2px] border-green-700 w-full">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className=" border-[2px] border-green-700 w-full">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td className=" border-[2px] border-green-700 w-full">Malcolm Lockyer</td>
          <td className=" border-[2px] border-green-700 w-full">1961</td>
        </tr>
        <tr>
          <td className=" border-[2px] border-green-700 w-full" >Witchy Woman</td>
          <td className=" border-[2px] border-green-700 w-full">The Eagles</td>
          <td className=" border-[2px] border-green-700 w-full">1972</td>
        </tr>
        <tr>
          <td className=" border-[2px] border-green-700 w-full">Shining Star</td>
          <td className=" border-[2px] border-green-700 w-full">Earth, Wind, and Fire</td>
          <td className=" border-[2px] border-green-700 w-full">1975</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  );
};
export default List_posts;
