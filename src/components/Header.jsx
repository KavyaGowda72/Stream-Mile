import React, { useEffect, useState } from "react";
import hamburger_menu from "../utils/Images/hamburger_menu.png";
import app_logo from "../utils/Images/youtube_logo.png";
import notification_logo from "../utils/Images/notification.png";
import { useDispatch, useSelector } from "react-redux";
import { addSideBar, showSuggestion } from "../utils/Slices/sideBarSlice";
import { cacheResults } from "../utils/Slices/inputSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSugegestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.input);

  console.log(inputData);

  const handleSidebarClick = () => {
    dispatch(addSideBar());
  };

  useEffect(() => {
    //Debouncing
    const timer = setTimeout(() => {
      if (searchCache[inputData]) {
        setSuggestions(searchCache[inputData]);
      } else {
        getSearchApi();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [inputData]);

  const getSearchApi = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        inputData
    );

    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [inputData]: json[1],
      })
    );
  };

  return (
    <>
      <div className="grid items-center  grid-flow-col w-full justify-between  bg-white sticky top-0  py-1 z-30 ">
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

        <div className="  col-span-9 ">
          <div className="">
            <input
              type="text"
              className="w-2/3 px-3 p-2 hover:cursor-text  border border-black rounded-l-full outline-none focus:border-blue-500  "
              placeholder="Search"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className=" p-2 w-14 outline-none  border  border-black rounded-r-full bg-gray-200   ">
              🔍
            </button>
          </div>

          {showSugegestion && (
            <div className="fixed bg-white py-2 px-6 w-[35rem] rounded-md shadow-md border border-gray-100">
              <ul className="">
                {suggestions.map((sugg) => (
                  <li
                    key={sugg}
                    className="shadow-sm py-1 hover:bg-gray-100 rounded-sm cursor-pointer"
                  >
                    {sugg}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center col-span-1 mr-5">
          <img src={notification_logo} className="h-6" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
