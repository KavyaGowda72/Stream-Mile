import React from "react";
import { countToDisplaycount } from "../utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <>
      <div className=" p-2 ml-3 w-80 shadow-sm rounded-md cursor-pointer ">
        <div>
          <img
            src={thumbnails.medium.url}
            alt="thumbnail"
            className="rounded-xl "
          />
        </div>

        <div className="">
          <ul>
            <li className="font-bold truncate-2-lines">{title}</li>
            <li className="font-normal text-gray-600">{channelTitle}</li>
            <li className=" text-gray-600">
              {countToDisplaycount(viewCount)}Views
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
