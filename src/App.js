import {Route, Routes} from "react-router-dom";
import Header from "./components/Common/Header";
// import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import Home from "./View/User/Home";
import Remarkable from "./View/User/Remarkable";
import File from "./View/User/File";
import Event from "./View/User/Event";
import Everyone from "./View/User/Everyone";
import Media_files from "./View/User/Media_files";
import Specific_page from "./View/User/Specific_page";
import Video from "./View/User/Video";
import Album_media from "./View/User/Album_media";
import Signin from "./components/Account/Signin";
import Signup from "./components/Account/Signup";
import ResetPassword from "./components/Account/ResetPassword";
import { routes } from './Route';

function App() {
  
  return (
    <div className="bg-[#f8e8ce]">
      <Header/>
      {/* <div className="container"> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Remarkable' element={<Remarkable/>}/>
        <Route path='/File' element={<File/>}/>
        <Route path='/Event' element={<Event/>}/>
        <Route path='/Everyone' element={<Everyone/>}/>
        <Route path='/Media_files' element={<Media_files/>}/>
        <Route path='/Specific_page' element={<Specific_page/>}/>
        <Route path='/Video' element={<Video/>}/>
        <Route path='/Album_media' element={<Album_media/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/ResetPassword' element={<ResetPassword/>}/>
      </Routes>
      {/* </div> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
