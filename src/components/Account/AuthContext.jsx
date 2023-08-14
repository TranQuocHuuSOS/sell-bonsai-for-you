// AuthContext.js
import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const isLoggedIn = userData !== null;
  const login = (user) => {
    setUserData(user);
  };
  const logout = () => {
    // Xóa thông tin người dùng khỏi local storage
    localStorage.removeItem("userData");
    // Đăng xuất bằng cách xóa userData
    setUserData(null);
  };
  return (
    <AuthContext.Provider value={{ userData, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
