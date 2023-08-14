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
    <div className="flex items-center justify-center">
      <div className="">
        <p className="flex items-center justify-center font-bold text-[32px]">
          Danh sách người dùng
        </p>
        <table class="border-[2px] border-green-700 w-full mx-4">
          <thead>
            <tr>
              <th className=" border-[2px] border-green-700 w-full">ID</th>
              <th className=" border-[2px] border-green-700 w-full">
                Username
              </th>
              <th className=" border-[2px] border-green-700 w-full">Email</th>
              <th className=" border-[2px] border-green-700 w-full">Role</th>
              <th className=" border-[2px] border-green-700 w-full">
                Location
              </th>
              <th className=" border-[2px] border-green-700 w-full">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className=" border-[2px] border-green-700 w-full">
                  {item.id}
                </td>
                <td className=" border-[2px] border-green-700 w-full">
                  {item.username}
                </td>
                <td className=" border-[2px] border-green-700 w-full">
                  {item.email}
                </td>
                <td className=" border-[2px] border-green-700 w-full">
                  {item.role}
                </td>
                <td className=" border-[2px] border-green-700 w-full">
                  {item.location}
                </td>
                <td className=" border-[2px] border-green-700 w-full">
                  {item.numberphone}
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
