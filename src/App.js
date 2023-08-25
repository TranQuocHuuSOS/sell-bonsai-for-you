import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header";
// import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import Discussion from "./View/User/Discussion";
import Important from "./View/User/Important";
import Utilities from "./View/User/Utilities";
import Event from "./View/User/Event";
import Collaborators from "./View/User/Collaborators";
import Multimedia from "./View/User/Multimedia";
import References from "./View/User/References";
import Video from "./View/User/Video";
import Album_media from "./View/User/Album_media";
import Signin from "./components/Account/Signin";
import Signup from "./components/Account/Signup";
import ResetPassword from "./components/Account/ResetPassword";
import ConnectMe from "./View/User/ConnectMe";
import { useState } from "react";
import { useAuth } from "./components/Account/AuthContext";
import Page_main from "./View/Admin/Page_main";
import List_posts from "./View/Admin/List_posts";
import List_users from "./View/Admin/List_users";
function App() {
  const { isLoggedIn, userData } = useAuth();
  return (
    <div className="bg-[#f8e8ce]">
      <Header />
      {/* <div className="container"> */}

      {isLoggedIn && userData.role === "Người dùng" | userData.role === "Người bán" && <Navbar />}
      {isLoggedIn && userData.role === "Quản lý" && <Page_main />}
      <Routes>
        {!isLoggedIn && <Route path="/" element={<ConnectMe />} />}
        <Route path="/Discussion" element={<Discussion />} />
        <Route path="/Important" element={<Important />} />
        <Route path="/Utilities" element={<Utilities />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Collaborators" element={<Collaborators />} />
        <Route path="/Multimedia" element={<Multimedia />} />
        <Route path="/References" element={<References />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Album_media" element={<Album_media />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/List_posts" element={<List_posts />} />
        <Route path="/List_users" element={<List_users />} />
      </Routes>
      {/* </div> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Common/Header";
// import Navbar from "./components/Common/Navbar";
// import { routes } from './routes';

// function App() {
//   const pathInFile = (ways) =>
//     ways.map((way) => (
//       <Route key={way.path} path={way.path} element={way.element} index={way.index} />
//     ));

//   return (
//     <div className="bg-[#f8e8ce]">
//       <Header />
//       <Navbar />
//       <Router>
//         <Routes>{pathInFile(routes)}</Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
