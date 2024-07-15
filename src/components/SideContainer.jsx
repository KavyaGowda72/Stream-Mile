import React, { useEffect } from "react";
import { YOUTUBE_API_KEY } from "../secretkey";
import { useDispatch, useSelector } from "react-redux";
import { sideContainer } from "../utils/Slices/popularVideos";
import SideList from "./SideList";

const SideContainer = ({ categoryId }) => {
  const dispatch = useDispatch();

  const sideContainerVideos = useSelector(
    (store) => store.popular.suggestedVideos
  );

  //console.log("sideContainerVideos", sideContainerVideos);

  const getChategoryId = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&videosCategoryId=" +
        categoryId +
        "&key=" +
        YOUTUBE_API_KEY
    );
    const json = await data.json();
    // console.log("json", json);
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
    //console.log(chanelDetails);

    const videosWithChannelDetails = json?.items?.map((video, index) => ({
      videoInfo: video,
      channelInfo: chanelDetails[index],
    }));

    dispatch(sideContainer(videosWithChannelDetails));
  };

  useEffect(() => {
    getChategoryId();
  }, []);
  return (
    <>
      <div className=" w-full mt-7 rounded-lg">
        {sideContainerVideos &&
          sideContainerVideos.map((video) => (
            <div className="">
              <SideList
                videoinfo={video.videoInfo}
                channelinfo={video.channelInfo}
              />
            </div>
          ))}
      </div>
      ;
    </>
  );
};

export default SideContainer;
