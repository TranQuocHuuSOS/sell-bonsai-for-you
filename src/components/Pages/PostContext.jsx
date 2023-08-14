// PostContext.js
import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export const usePostContext = () => {
  return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  const setPostAndUser = (postData, userData) => {
    setPost(postData);
    setUser(userData);
  };
  return (
    <PostContext.Provider value={{ post, user, setPostAndUser }}>
      {children}
    </PostContext.Provider>
  );
};
