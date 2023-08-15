import React, { Component, useState, useEffect } from "react";
import axios from "axios";
const List_users = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
        setIsLoading(false);
      });
  }, [url]);
  return (
    <div className="w-full  inline-block">
      <div className="">
        <p className="flex items-center justify-center font-bold text-[32px]">
          Danh sách người dùng
        </p>
        <table class="border-[2px] border-green-700 w-full">
          <thead>
            <tr>
              <th className=" border-[2px] border-green-700 ">ID</th>
              <th className=" border-[2px] border-green-700 ">Username</th>
              <th className=" border-[2px] border-green-700 ">Email</th>
              <th className=" border-[2px] border-green-700 ">Role</th>
              <th className=" border-[2px] border-green-700 ">Location</th>
              <th className=" border-[2px] border-green-700 ">Phone Number</th>
              <th className=" border-[2px] border-green-700 ">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((users) => (
              <tr key={users.id}>
                <td className=" border-[2px] border-green-700 ">
                  {users.id}
                </td>
                <td className=" border-[2px] border-green-700 ">
                  {users.username}
                </td>
                <td className=" border-[2px] border-green-700 ">
                  {users.email}
                </td>
                <td className=" border-[2px] border-green-700 ">
                  {users.role}
                </td>
                <td className=" border-[2px] border-green-700 ">
                  {users.location}
                </td>
                <td className=" border-[2px] border-green-700 ">
                  {users.numberphone}
                </td>
                <td className=" border-[2px] border-green-700 ">
                  {users.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default List_users;
