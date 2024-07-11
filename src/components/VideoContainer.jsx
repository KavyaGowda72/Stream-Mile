import React from "react";

import VideoCard from "../components/VideoCard";

import usePopularVideos from "../utils/Custom Hooks/usePopularVideos";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  usePopularVideos();

  const popularVideos = useSelector((store) => store.popular.popularVideos);

  if (!popularVideos) return;

  return (
    <div className=" flex  w-full flex-wrap justify-start m-10 ">
      {popularVideos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
