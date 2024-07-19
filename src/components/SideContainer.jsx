import React, { useEffect } from "react";
import { YOUTUBE_API_KEY } from "../secretkey";
import { useDispatch, useSelector } from "react-redux";
import { sideContainer } from "../utils/Slices/popularVideos";
import SideList from "./SideList";
import { Link } from "react-router-dom";

const SideContainer = ({ categoryId }) => {
  const dispatch = useDispatch();

  const sideContainerVideos = useSelector(
    (store) => store.popular.suggestedVideos
  );

  const getCategoryId = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&videosCategoryId=" +
        categoryId +
        "&key=" +
        YOUTUBE_API_KEY
    );
    const json = await data.json();

    const channelId = json.items.map((video) => video?.snippet?.channelId);

    const chanelDetailsPromise = channelId.map(async (id) => {
      const chanelData = await fetch(
        "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=" +
          id +
          "&key=" +
          YOUTUBE_API_KEY
      );
      const chanelJson = await chanelData.json();
      return chanelJson.items[0];
    });
    const chanelDetails = await Promise.all(chanelDetailsPromise);

    const videosWithChannelDetails = json?.items?.map((video, index) => ({
      videoInfo: video,
      channelInfo: chanelDetails[index],
    }));

    dispatch(sideContainer(videosWithChannelDetails));
  };

  useEffect(() => {
    if (!sideContainerVideos) getCategoryId();
  }, []);
  return (
    <>
      <div className=" w-full mt-7 rounded-lg cursor-pointer">
        {sideContainerVideos &&
          sideContainerVideos.map((video) => (
            <div className=" " key={video.videoInfo.id.videoId}>
              <Link
                to={
                  video.videoInfo.id.videoId
                    ? "/watch?v=" + video.videoInfo.id.videoId
                    : "/watch?v=" + video.videoInfo.id
                }
              >
                <SideList
                  videoinfo={video.videoInfo}
                  channelinfo={video.channelInfo}
                />
              </Link>
            </div>
          ))}
      </div>
      ;
    </>
  );
};

export default SideContainer;
