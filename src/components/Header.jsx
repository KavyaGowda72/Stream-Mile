import React, { useState } from "react";
import hamburger_menu from "../utils/Images/hamburger_menu.png";
import app_logo from "../utils/Images/youtube_logo.png";
import notification_logo from "../utils/Images/notification.png";
import { useDispatch } from "react-redux";
import { addSideBar } from "../utils/Slices/sideBarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleSidebarClick = () => {
    dispatch(addSideBar());
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

          <img src={app_logo} className="h-14" alt="app_logo" />
        </div>

        <div className=" flex items-center col-span-9 ">
          <input
            type="text"
            className="w-2/3  p-2 border border-black rounded-l-full outline-none focus:border-blue-600 "
            placeholder="Search"
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
