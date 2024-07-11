import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const toggleSideBar = useSelector((store) => store.sidebar.isMenuOpen);

  return (
    <>
      {toggleSideBar && (
        <div className="shadow-2xl px-3  text-center mt-5  w-52  min-w-[240px]   h-screen overflow-y-auto   ">
          {/* w-2/12 text-center p-2   shadow-lg min-w-[240px] h-screen overflow-y-auto hide-scrollbar */}
          <ul className="space-y-2 ">
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
          </ul>
          <hr className="mt-4" />
          <h1 className="font-bold mt-2">Explore</h1>
          <ul className="space-y-2 mt-2">
            <li>Trending</li>
            <li>Music</li>
            <li>Movies</li>
            <li>News</li>
            <li>ports</li>
          </ul>
          <hr className="mt-4" />
          <h1 className="font-bold mt-2">You</h1>
          <ul className="space-y-2 mt-2">
            <li>History</li>
            <li>Playlist</li>
            <li>Your Videos</li>
            <li>Watch later</li>
            <li>ports</li>
          </ul>
          <hr className="mt-4" />
          <h1 className="font-bold mt-2">Setting</h1>
          <ul className="space-y-2 mt-2">
            <li>Help</li>
            <li>Send feedback</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
