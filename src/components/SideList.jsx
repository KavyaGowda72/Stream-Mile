import React from "react";
import { countToDisplaycount } from "../utils/constants";

const SideList = ({ videoinfo, channelinfo }) => {
  const { snippet } = videoinfo;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCount = channelinfo?.statistics?.viewCount;

  return (
    <div className="flex space-y-2  ">
      <div className=" ">
        <img alt="img" className="rounded-xl p-2" src={thumbnails.medium.url} />
      </div>

      <div className="w-56  ">
        <p className="font-bold text-sm truncate-2-lines  ">{title}</p>
        <p className="text-xs mt-2 text-gray-600">{channelTitle}</p>
        <p className="text-gray-600 text-xs">
          {countToDisplaycount(viewCount)} views
        </p>
      </div>
    </div>
  );
};

export default SideList;
