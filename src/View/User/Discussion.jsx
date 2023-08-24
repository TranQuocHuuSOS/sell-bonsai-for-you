import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../components/Account/AuthContext";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../../components/style/output.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import Discuss from './Discuss';
library.add(fas);

const Discussion = (url) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imagepost, setImagepost] = useState("");
  const [userID, setUserID] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { isLoggedIn, userData, login } = useAuth(); // Use the useAuth hook
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(
          "An error occurred while fetching data from the server:",
          error
        );
        setIsLoading(false);
      });
  }, [url]);
  useEffect(() => {
    // lấy thông tin người dùng liên quan
    const usersId = data.map((post) => post.user_id);
    const uniqueUserIds = Array.from(new Set(usersId));
    axios
      .get("http://localhost:3000/users", {
        params: {
          id: uniqueUserIds.join(","),
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching user data:", error);
      });
  }, [data]);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      login(parsedUserData);
    }
  }, [login]);
  const showProfileAndLogout = isLoggedIn || userData;

  function post() {
    const data = {
      title: title,
      content: content,
      imagepost: imagepost,
      userID: userID,
    };
    axios
      .post("http://localhost:3000/posts", data)
      .then((response) => {
        if (response.status > 0) {
          setShowSuccessMessage(true);
          alert("Posted successfully!");
        } else {
          console.error("Post failed!");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }
  return (
    <div className="w-full  inline-block">
      {/* start contennt */}
      {showProfileAndLogout && (
        <div className="flex px-0 sm:px-12 md:px-20 gap-4 lg:px-36 xl:px-48 p-8 bg-[#f8d59e]">
          <div className="xl:basis-3/5 md:w-full">
            {showSuccessMessage ? (
              (window.location.href = "/Discussion")
            ) : (
              <div className="rounded-lg shadow-sm border-[1px] bg-white">
                <div className="flex p-4">
                  <a className="   ">
                    <img
                      className="rounded-full xl:w-[60px] xl:h-[50px] lg:w-[60px] lg:h-[50px]  md:w-[60px] md:h-[50px] sm:w-[60px] sm:h-[50px] w-[60px] h-[50px]"
                      src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                      alt=""
                    ></img>
                  </a>
                  <button
                    onClick={() => window.my_modal_post.showModal()}
                    className="flex hover:bg-gray-400 items-center cursor-pointer xl:mx-8 lg:mx-8 md:mx-6 sm:mx-4 mx-2 shadow font-light text-[16px] flex appearance-none bg-gray-200  rounded-[50px] w-full hover:border-gray-500  text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="button"
                  >
                    Bạn hãy viết gì đi...
                  </button>

                  {/*Bắt đầu modal post */}
                  <dialog
                    id="my_modal_post"
                    className="modal w-[100%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[50%] rounded-xl"
                  >
                    <form method="dialog" className="modal-box">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                      <form className="w-[95%] p-4  ">
                        <div className="relative text-[20px] flex items-center justify-center font-bold">
                          Tạo bài viết
                        </div>
                        <div className="p-0 sm:p-2 md:p-4 lg:p-4 xl:p-4">
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
                                <div className="hidden">
                                  {isLoggedIn && userData
                                    ? userData.id
                                    : "Guest"}
                                </div>
                                {isLoggedIn && userData
                                  ? userData.username
                                  : "Guest"}
                              </p>
                              <div className="gap-4 mx-2 grid sm:flex md:flex lg:flex xl:flex">
                                <button className="hover:bg-gray-400 flex items-center justify-center bg-gray-300 rounded p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                                  </svg>
                                  Nhóm công khai
                                </button>
                                <button className="hover:bg-gray-400 flex items-center justify-center bg-gray-300 rounded p-1">
                                  <i
                                    data-visualcompletion="css-img"
                                    className="x1b0d499 xep6ejk"
                                    aria-label="Quy tắc"
                                    role="img"
                                    style={{
                                      backgroundImage:
                                        'url("https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/8gTfEscoFW8.png")',
                                      backgroundPosition: "-74px -98px",
                                      backgroundSize: "98px 142px",
                                      width: 16,
                                      height: 16,
                                      backgroundRepeat: "no-repeat",
                                      display: "inline-block",
                                    }}
                                  />
                                  Quy tắc
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          type="text"
                          className="cursor-pointer w-[100%] h-[100px] mx-4 hover:border-[1px] hover:border-black"
                          placeholder="Tạo bài viết công khai..."
                        ></input>
                        <div className="border-[2px] rounded hover:border-black p-4 grid sm:flex md:flex lg:flex xl:flex w-[100%] items-center justify-center sm:justify-between md:justify-between lg:justify-between xl:justify-between mx-4">
                          <div className="cursor-pointer">
                            Thêm vào bài viết của bạn
                          </div>
                          <div className="flex gap-4">
                            <label className="inline-flex  text-blue-700 w-auto h-[40px] text-center rounded-md items-center justify-center hover:bg-gray-300">
                              <span className="cursor-pointer">
                                <img
                                  className="x1b0d499 xl1xv1r"
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
                                  alt=""
                                  style={{ height: 24, width: 24 }}
                                />
                                <input
                                  value={imagepost}
                                  onChange={(e) => setImagepost(e.target.value)}
                                  className="flex items-center justify-center"
                                  type="file"
                                  style={{ display: "none" }}
                                />
                              </span>
                            </label>
                            <label className="inline-flex  text-blue-700 w-auto h-[40px] text-center rounded-md items-center justify-center hover:bg-gray-300">
                            <span className="flex items-center cursor-pointer ">
                              <img
                                className="x1b0d499 xl1xv1r"
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/MqTJr_DM3Jg.png"
                                alt=""
                                style={{ height: 24, width: 24 }}
                              />
                              <input
                                className="flex items-center justify-center"
                                type="file"
                                style={{ display: "none" }}
                              />
                            </span>
                            </label>
                            <label className="inline-flex  text-blue-700 w-auto h-[40px] text-center rounded-md items-center justify-center hover:bg-gray-300">
                            <span className="flex items-center cursor-pointer">
                              <img
                                className="x1b0d499 xl1xv1r"
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/uywzfiZad5N.png"
                                alt=""
                                style={{ height: 24, width: 24 }}
                              />
                              <input
                                className="flex items-center justify-center"
                                type="file"
                                style={{ display: "none" }}
                              />
                            </span>
                            </label>
                            <label className="inline-flex  text-blue-700 w-auto h-[40px] text-center rounded-md items-center justify-center hover:bg-gray-300">
                            <span
                              onClick={() => window.my_modal_icon.showModal()}
                              className="flex items-center cursor-pointer"
                            >
                              <img
                                className="x1b0d499 xl1xv1r"
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"
                                alt=""
                                style={{ height: 24, width: 24 }}
                              />
                              <input
                                className="flex items-center justify-center"
                                
                                style={{ display: "none" }}
                              />
                            </span>
                            </label>
                            {/* bắt đầu 1 cái modal để mình chọn icon cảm xúc cho các bài đăng*/}
                            <dialog
                              id="my_modal_icon"
                              className="modal w-[100%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[50%] rounded-xl"
                            >
                              <form method="dialog" className="modal-box">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                  ✕
                                </button>
                                <form className="w-[95%] p-4  ">
                                  <div className="relative text-[20px] flex items-center justify-center font-bold">
                                    Bạn đang cảm thấy thế nào?
                                  </div>
                                  <div className="p-0 sm:p-2 md:p-4 lg:p-4 xl:p-4">
                                    <div className="grid sm:flex md:flex lg:flex xl:flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 justify-center md:justify-start lg:justify-start xl:justify-start">
                                      <p className="text-green-700 font-bold p-2 flex items-center justify-center hover:bg-gray-400 cursor-pointer rounded w-[100px] lg:w-[100px] xl:w-[100px]">
                                        Cảm xúc
                                      </p>
                                      <p className="text-green-700 font-bold p-2 flex items-center justify-center hover:bg-gray-400 cursor-pointer rounded w-[100px] lg:w-[100px] xl:w-[100px]">
                                        Hoạt động
                                      </p>
                                    </div>
                                    <div className="">
                                      <input
                                        type="search"
                                        id="default-search"
                                        className="cursor-pointer block w-[100%] p-4 pl-10 text-sm text-gray-900 border bg-gray-300 border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Tìm kiếm hội nhóm, bạn bè,..."
                                        required=""
                                      />
                                    </div>
                                    <div className="overscroll-y-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                                      <div className="">
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/2T8CKph5g-l.png"
                                          />
                                          Hạnh phúc
                                          <input
                                            className="flex items-center justify-center"
                                            type="file"
                                            style={{ display: "none" }}
                                          />
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/6uxKmbIP8GH.png"
                                          />
                                          Được yêu
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/6uxKmbIP8GH.png"
                                          />
                                          Đáng yêu
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height="20"
                                            width="20"
                                            alt=""
                                            referrerpolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/1HpO3vuPieX.png"
                                          />
                                          Hào hứng
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/66a8gSiDW1a.png"
                                          />
                                          Điên
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/8co0V8Vlpb5.png"
                                          />
                                          Có phúc
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/Qmhf7JHw_Ht.png"
                                          />
                                          Buồn
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/KlUlzF0jf_B.png"
                                          />
                                          Biết ơn
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/6uxKmbIP8GH.png"
                                          />
                                          Đang yêu
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/0DfJywXMapU.png"
                                          />
                                          Sung sướng
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xO5gTNyuse0.png"
                                          />
                                          Khờ khạo
                                        </div>
                                      </div>
                                      <div className="">
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xO5gTNyuse0.png"
                                          />
                                          Thư giãn
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/Wh8KupBh0Py.png"
                                          />
                                          Vui vẻ
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/ScTevBl-xyd.png"
                                          />
                                          Thoải mái
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/0DfJywXMapU.png"
                                          />
                                          Hân hoan
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/C8Of21bdJ1C.png"
                                          />
                                          Có động lực
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            height={20}
                                            width={20}
                                            alt=""
                                            referrerPolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/cyuCzxUQ3ex.png"
                                          />
                                          Giận dữ
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </form>
                            </dialog>
                            {/* kết thúc modal chọn icon cảm xúc cho bài đăng*/}
                            <p
                              onClick={() => window.my_modal_file.showModal()}
                              className="flex items-center cursor-pointer rounded-full hover:bg-gray-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 448 512"
                              >
                                <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                              </svg>
                            </p>
                            {/* bắt đầu 1 cái modal để mình chọn file ảnh các thứ liên quan*/}
                            <dialog
                              id="my_modal_file"
                              className="modal w-[100%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[50%] rounded-xl"
                            >
                              <form method="dialog" className="modal-box">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                  ✕
                                </button>
                                <form className="w-[95%] p-4  ">
                                  <div className="relative text-[20px] flex items-center justify-center font-bold">
                                    Thêm vào bài viết của bạn
                                  </div>
                                  <div className="p-0 sm:p-2 md:p-4 lg:p-4 xl:p-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                                      <div className="">
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            className="x1b0d499 xl1xv1r"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
                                            alt=""
                                            style={{ height: 24, width: 24 }}
                                          />
                                          Ảnh/video
                                          <input
                                            className="flex items-center justify-center"
                                            type="file"
                                            style={{ display: "none" }}
                                          />
                                        </div>

                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            className="x1b0d499 xl1xv1r"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/uywzfiZad5N.png"
                                            alt=""
                                            style={{ height: 24, width: 24 }}
                                          />
                                          Check in
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            className="x1b0d499 xl1xv1r"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/j0Jp-GpONWx.png"
                                            alt=""
                                            style={{ height: 24, width: 24 }}
                                          />
                                          File GIF
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            className="x1b0d499 xl1xv1r"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/9GrkIIXcz_9.png"
                                            alt=""
                                            style={{ height: 24, width: 24 }}
                                          />
                                          Gắn thẻ sự kiện
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            className="x1b0d499 xl1xv1r"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/GNB0Xu7GKO5.png"
                                            alt=""
                                            style={{ height: 24, width: 24 }}
                                          />
                                          File
                                        </div>
                                      </div>
                                      <div className="">
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            className="x1b0d499 xl1xv1r"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/MqTJr_DM3Jg.png"
                                            alt=""
                                            style={{ height: 24, width: 24 }}
                                          />
                                          Gắn thẻ người khác
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            className="x1b0d499 xl1xv1r"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"
                                            alt=""
                                            style={{ height: 24, width: 24 }}
                                          />
                                          Cảm xúc/ Hoạt động
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            className="x1b0d499 xl1xv1r"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/JlS35MWIk0L.png"
                                            alt=""
                                            style={{ height: 24, width: 24 }}
                                          />
                                          Thăm dò ý kiến
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            className="x1b0d499 xl1xv1r"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
                                            alt=""
                                            style={{ height: 24, width: 24 }}
                                          />
                                          Video trực tiếp
                                        </div>
                                        <div className="cursor-pointer p-2 flex items-center gap-2 hover:bg-gray-300 rounded">
                                          <img
                                            className="x1b0d499 xl1xv1r"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/9GrkIIXcz_9.png"
                                            alt=""
                                            style={{ height: 24, width: 24 }}
                                          />
                                          Tạo sự kiện
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </form>
                            </dialog>
                            {/* kết thúc modal chọn file ảnh các file liên quan*/}
                          </div>
                        </div>
                        <button
                          onClick={post}
                          className="bg-gray-300 shadow mx-4 my-8 hover:bg-gray-400 text-[16px] text-black font-bold h-[40px] w-[100%] rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Tạo sự kiện
                        </button>
                      </form>
                    </form>
                  </dialog>
                </div>
                <div className="p-4 items-center justify-center grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 border-t-[1px]">
                  <div className="cursor-pointer flex items-center hover:bg-gray-300 rounded">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/WpZH_PxfuYV.png"
                      alt=""
                    ></img>
                    <h4 className="font-semibold text-gray-400 mx-4">
                      Anonymous Post
                    </h4>
                  </div>
                  <div className="cursor-pointer flex items-center hover:bg-gray-300 rounded">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
                      alt=""
                    ></img>
                    <h4 className="font-semibold text-gray-400 mx-4">
                      Ảnh/Video
                    </h4>
                  </div>
                  <div className="cursor-pointer flex items-center hover:bg-gray-300 rounded">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/JlS35MWIk0L.png"
                      alt=""
                    ></img>
                    <h4 className="font-semibold text-gray-400 mx-4">
                      Thăm dò ý kiến
                    </h4>
                  </div>
                </div>
              </div>
            )}
            <div className="flex rounded-lg justify-between items-center shadow-sm border-[1px] bg-white my-4">
              <p className="cursor-pointer flex p-4 items-center ">
                Đáng chú ý
                <span className="cursor-pointer mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 64 512"
                  >
                    <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                  </svg>
                </span>
              </p>
              <span className="cursor-pointer p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </span>
            </div>

            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="bg-[#f8d59e]">
                {data.map((post) => (
                  <div
                    key={post.id}
                    className="rounded-lg  shadow-sm border-[1px] bg-white my-6"
                  >
                    <div className="flex  justify-between items-center">
                      <div className="flex  items-center p-4">
                        <div className="cursor-pointer">
                          <a className="">
                            <img
                              className="rounded-full w-[30px] sm:w-[40px] md:w-[50px] lg:w-[50px] xl:w-[50px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[50px] xl:h-[50px]"
                              src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                              alt=""
                            ></img>
                          </a>
                        </div>
                        <div className="cursor-pointer mx-4">
                          <p className="font-medium text-[16px] hover:underline">
                            {users.find((user) => user.id === post.user_id)
                              ?.username || "Unknown"}
                          </p>
                          <span className="hover:underline">
                            {post.time} giờ trước
                          </span>
                        </div>
                      </div>
                      <div className="cursor-pointer flex  mx-4">
                        <div onClick={handleNav} className="block hover:bg-gray-300">
                          {nav ? (
                            <AiOutlineClose
                              size={20}
                              className="text-black mx-2 hover:bg-gray-300"
                            />
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 448 512"
                            >
                              <path
                                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                className="mx-2"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div
                        className={
                          nav
                            ? "rounded-lg mx-[1%] p-2  sm:mx-[12%] md:mx-[20%] lg:mx-[25%] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] w-[250px] absolute shadow-lg bg-green-200 text-black top-[900px] sm:top-[1000px] md:top-[1050px] lg:top-[1200px] xl:top-[1200px] left-0 justify-center "
                            : "absolute left-[-400%] sm:left-[-200%] md:left-[-100%] lg:left-[-100%] xl:left-[-100%]"
                        }
                      >
                        <div className="cursor-pointer flex items-center gap-4 p-2 border-b-[1px] border-black">
                          <i
                            data-visualcompletion="css-img"
                            className="x1b0d499 xep6ejk"
                            style={{
                              backgroundImage:
                                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/2sWMgO9b01D.png")',
                              backgroundPosition: "0px -254px",
                              backgroundSize: "26px 1228px",
                              width: 20,
                              height: 20,
                              backgroundRepeat: "no-repeat",
                              display: "inline-block",
                            }}
                          />
                          <div className="">
                            <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                              <strong>Lưu bài viết</strong>
                            </p>
                            <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                              Thêm vào danh sách mục đã lưu.
                            </p>
                          </div>
                        </div>
                        <div className="cursor-pointer flex items-center gap-4 p-2 border-b-[1px] border-black">
                          <i
                            data-visualcompletion="css-img"
                            className="x1b0d499 xep6ejk"
                            style={{
                              backgroundImage:
                                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/FSxdjzLYyYU.png")',
                              backgroundPosition: "0px -282px",
                              backgroundSize: "38px 838px",
                              width: 20,
                              height: 20,
                              backgroundRepeat: "no-repeat",
                              display: "inline-block",
                            }}
                          />
                          <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                            <strong>Bật thông báo về bài viết này</strong>
                          </p>
                        </div>
                        <div className="cursor-pointer flex items-center gap-4 p-2">
                          <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                            <img
                              className="x1b0d499 xep6ejk"
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/h15jrhghvUR.png"
                              alt=""
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="">
                            <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                              <strong>
                                Tạm ẩn Diệu Nhi Cho Thuê Đăng Kí Duyệt Tự Động
                                trong 30 ngày
                              </strong>
                            </p>
                            <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                              Tạm thời không nhìn thấy bài viết nữa.
                            </p>
                          </div>
                        </div>
                        <div className="cursor-pointer flex items-center gap-4 p-2">
                          <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                            <img
                              className="x1b0d499 xep6ejk"
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/KHqkjYOwBTc.png"
                              alt=""
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="">
                            <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                              <strong>
                                {" "}
                                Ẩn tất cả từ Diệu Nhi Cho Thuê Đăng Kí Duyệt Tự
                                Động
                              </strong>
                            </p>
                            <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                              Không xem bài viết của trang này nữa.
                            </p>
                          </div>
                        </div>
                        <div className="cursor-pointer flex items-center gap-4 p-2">
                          <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                            <img
                              className="x1b0d499 xep6ejk"
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/KHqkjYOwBTc.png"
                              alt=""
                              height={25}
                              width={25}
                            />
                          </div>
                          <div className="">
                            <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                              <strong>
                                {" "}
                                Bỏ theo dõi Hội BONSAI - CÂY CẢNH
                              </strong>
                            </p>
                            <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                              Không xem bài viết nữa nhưng vẫn ở trong nhóm.
                            </p>
                          </div>
                        </div>
                        <div className="cursor-pointer flex items-center gap-4 p-2">
                          <div className="x6s0dn4 xoi2r2e x78zum5 xl56j7k xq8finb">
                            <img
                              className="x1b0d499 xep6ejk"
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/BNdV7yOMsDU.png"
                              alt=""
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="">
                            <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                              <strong>Báo cáo bài viết</strong>
                            </p>
                            <p className="text-[14px] lg:text-[16px] xl:text-[16px]">
                              Chúng tôi sẽ không cho Diệu Nhi Cho Thuê Đăng Kí
                              Duyệt Tự Động biết ai đã báo cáo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="content px-4"> {post.title}</p>
                    <div className="my-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols- gap-1 items-center justify-center">
                      <div className="cursor-pointer">
                        <img src={post.imagepost} alt=""></img>
                      </div>
                      <div className="cursor-pointer">
                        <img
                          src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                          alt=""
                        ></img>
                      </div>
                      <div className="cursor-pointer">
                        <img
                          src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                          alt=""
                        ></img>
                      </div>
                      <div className="cursor-pointer">
                        <img
                          src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                          alt=""
                        ></img>
                      </div>
                    </div>
                    <div className="p-2 xl:mx-16 lg:mx-16 md:mx-12 sm:mx-6 mx-2 grid gap-2  grid-cols-3 border-t-[1px]">
                      <div className="cursor-pointer flex items-center hover:bg-gray-300 rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.1s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z" />
                        </svg>
                        <h4 className=" font-semibold text-gray-400 xl:mx-4 lg:mx-4 md:mx-4 sm:mx-4 mx-1">
                          Thích
                        </h4>
                      </div>
                      <div className="cursor-pointer flex items-center hover:bg-gray-300 rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                        </svg>
                        <h4 className="font-semibold text-gray-400 xl:mx-4 lg:mx-4 md:mx-4 sm:mx-4 mx-1">
                          Bình luận
                        </h4>
                      </div>
                      <div className="cursor-pointer flex items-center hover:bg-gray-300 rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 576 512"
                        >
                          <path d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z" />
                        </svg>
                        <h4 className="font-semibold text-gray-400 xl:mx-4 lg:mx-4 md:mx-4 sm:mx-4 mx-1">
                          Chia sẻ
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center justify-center my-4 p-4 mx-1 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4 border-t-[1px]">
                      <a className="cursor-pointer">
                        <img
                          className="rounded-full w-[30px] sm:w-[40px] md:w-[50px] lg:w-[50px] xl:w-[50px] h-[25px] sm:h-[35px] md:h-[45px] lg:h-[45px] xl:h-[45px]"
                          src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                          alt=""
                        ></img>
                      </a>
                      <input
                        className="cursor-pointer xl:mx-4 lg:mx-4 md:mx-4 sm:mx-4 mx-2 h-[50px] bg-gray-200 shadow font-light text-[16px] flex  appearance-none border  rounded-[50px] w-full hover:border-gray-500  text-black  leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="text"
                        placeholder=" Viết bình luận công khai..."
                      />
                      <button className="hover:bg-gray-300 rounded-full w-12 h-10 flex items-center justify-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="xl:basis-2/5 xl:block hidden">
            <div className="rounded-lg shadow-sm border-[1px] bg-white">
              <p className="text-[20px] p-4">Giới thiệu</p>
              <p className="mx-4 top-[-10px]">
                Hội nhằm giúp anh, chị, em giao lưu, học hỏi kinh nghiệm chăm
                sóc bonsai cây cảnh. Giúp chia sẽ những giống cây, mô hình và
                những tác phẩm bonsai, cây cảnh. Giao lưu, mua bán những tác
                phẩm bonsai, cây cảnh dựa trên tinh thần thiện chí. Cấm tuyêt
                đối những hành vi gian lận. Lừa lọc. Tuyệt đối không đăng tải,
                chia sẽ những nội dung không liên quan đến bonsai, cây cảnh. (gỡ
                bài viết 1 lần trước khi bị ban khỏi nhóm) Chúc ace có được
                những tác phẩm đẹp như ý. Ẩn bớt
              </p>
              <div className="p-4 ">
                <div className="cursor-pointer flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                  </svg>
                  <h4 className="cursor-pointer text-[20px] mx-2">Công khai</h4>
                </div>
                <div className="">
                  <p className="px-6">
                    Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và
                    những gì họ đăng.
                  </p>
                </div>
              </div>
              <div className="px-4 ">
                <div className="cursor-pointer flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                  </svg>
                  <h4 className="cursor-pointer text-[20px] mx-2">Hiển thị</h4>
                </div>
                <div className="">
                  <p className="px-6">Ai cũng có thể tìm thấy nhóm này.</p>
                </div>
              </div>
              <div className="p-4">
                <button className="rounded-lg w-full bg-gray-300 hover:bg-gray-400 py-2">
                  <Link to="/References" className="py-2">
                    Tìm hiểu thêm
                  </Link>
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-sm border-[1px] bg-white my-4">
              <p className="text-[20px] p-4">File phương tiện mới chia sẻ</p>
              <a className="cursor-pointer grid grid-cols-2 px-4 gap-2">
                <img
                  src="https://bcolohouse.com.vn/wp-content/uploads/2022/04/trong-cay-bonsai-mini-1.jpg"
                  alt=""
                ></img>
                <img
                  src="https://pgdphurieng.edu.vn/wp-content/uploads/2023/04/top-20-cay-bonsai-mini-de-ban-dep-nhat-hop-phong-thuy-202207081607066956.jpg"
                  alt=""
                ></img>
                <img
                  src="https://hoala.vn/img_news/news_1492849941.jpg"
                  alt=""
                ></img>
                <img
                  src="https://webcaycanh.com/wp-content/uploads/2018/05/can-thanh-bonsai-mini-de-ban-1.jpg"
                  alt=""
                ></img>
              </a>
              <div className="p-4">
                <button className="rounded-lg w-full bg-gray-300 hover:bg-gray-400 py-2">
                  <Link to="/Media_files" className="py-2">
                    Xem tất cả
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <Discuss/> */}
    </div>
  );
};
export default Discussion;
