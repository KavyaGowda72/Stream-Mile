import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const toggleSideBar = useSelector((store) => store.sidebar.isMenuOpen);

  return (
    <>
      {toggleSideBar && (
        <div className="shadow-2xl p-5 w-44   ">
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
