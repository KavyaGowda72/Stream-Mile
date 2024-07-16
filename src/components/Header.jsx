import React, { useEffect, useState } from "react";
import hamburger_menu from "../utils/Images/hamburger_menu.png";
import app_logo from "../utils/Images/youtube_logo.png";
import notification_logo from "../utils/Images/notification.png";
import { useDispatch } from "react-redux";
import { addSideBar } from "../utils/Slices/sideBarSlice";
import useSearchApi from "../utils/Custom Hooks/useSearchApi";
import { YOUTUBE_API_KEY } from "../secretkey";

const Header = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");

  console.log(inputData);

  const handleSidebarClick = () => {
    dispatch(addSideBar());
  };

  useEffect(() => {
    //Debouncing
    const timer = setTimeout(() => getSearchApi(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [inputData]);

  const getSearchApi = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        inputData +
        "&key=" +
        YOUTUBE_API_KEY
    );

    const json = await data.json();
    console.log(json.items);
  };

  return (
    <>
      <div className="grid  grid-flow-col w-full justify-between bg-white sticky top-0  py-1 z-30 ">
        <div className=" flex items-center col-span-2 space-x-3 ">
          <img
            src={hamburger_menu}
            className="h-10 ml-2 cursor-pointer"
            alt="hamburger_logo"
            onClick={handleSidebarClick}
          />

          <a href="/">
            <img
              src={app_logo}
              className="h-14 cursor-pointer"
              alt="app_logo"
            />
          </a>
        </div>

        <div className=" flex items-center col-span-9 ">
          <input
            type="text"
            className="w-2/3  p-2 border border-black rounded-l-full outline-none focus:border-blue-600 "
            placeholder="Search"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className=" p-2 w-14 outline-none  border  border-black rounded-r-full bg-gray-200   ">
            🔍
          </button>
        </div>
        <div className="flex items-center col-span-1 mr-5">
          <img src={notification_logo} className="h-6" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
