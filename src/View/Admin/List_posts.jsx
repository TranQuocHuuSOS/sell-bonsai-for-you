import React, { Component, useEffect, useState } from "react";
import axios from "axios";
const List_posts = (url) => {
    const [data, setData]= useState([]);
    const [isLoading, setIsLoading]= useState(true);
    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((response)=>{
            setData(response.data);
            setIsLoading(false);
        })
        .catch((error)=>{
            console.error(
                "An error occurred while fetching data from the server:", error
            );
            setIsLoading(false)
        })
    }, [url]);
  return (
  <div className="w-full  inline-block">
  <div className="">
    <p className="flex items-center justify-center font-bold text-[32px]">Danh sách bài đăng</p>
    <table class="border-[2px] border-green-700 w-[100%]">
      <thead>
        <tr>
          <th className=" border-[2px] border-green-700 ">ID user</th>
          <th className=" border-[2px] border-green-700 ">Title</th>
          <th className=" border-[2px] border-green-700 ">Content</th>
          <th className=" border-[2px] border-green-700 ">Image post</th>
          <th className=" border-[2px] border-green-700 ">Create at</th>
          <th className=" border-[2px] border-green-700 ">Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((posts)=>(
        <tr key={posts.id}>
          <td className=" border-[2px] border-green-700 ">{posts.post_id}</td>
          <td className=" border-[2px] border-green-700 ">{posts.title}</td>
          <td className=" border-[2px] border-green-700 ">{posts.content}</td>
          <td className=" border-[2px] border-green-700 ">{posts.imagepost}</td>
          <td className=" border-[2px] border-green-700 ">{posts.createat}</td>
          <td className=" border-[2px] border-green-700 ">{posts.time}</td>
        </tr>
        ))}

      </tbody>
    </table>
  </div>
</div>
  );
};
export default List_posts;
