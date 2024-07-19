import React from "react";
import { Link } from "react-router-dom";
import { countToDisplaycount } from "../utils/constants";

const SearchList = ({ videoinfo, channelinfo }) => {
  const { snippet } = videoinfo;
  const { statistics } = channelinfo;
  const { viewCount } = statistics;

  return (
    <>
      <div className="mt-4 pl-10 ">
        <div className="flex">
          <img
            className="h-64 w-[ 37.333333%] rounded-lg my-2 mx-2 "
            src={snippet.thumbnails.medium.url}
            alt="chanel-logo"
          />

          <div className="mt-3">
            <p className="text-xl font-bold">{snippet.title}</p>
            <p>{countToDisplaycount(viewCount)} views</p>
            <div className="flex mt-1">
              <img
                className="w-10 h-10 rounded-full "
                src={channelinfo?.snippet?.thumbnails?.default?.url}
                alt="channel-logo"
              />

              <p className=" mt-2 pl-1">
                {videoinfo.snippet.channelTitle.substring(0, 15)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchList;
