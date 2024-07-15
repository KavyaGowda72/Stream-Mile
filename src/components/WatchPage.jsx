import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuClose } from "../utils/Slices/sideBarSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../secretkey";
import WatchPageContainer from "./WatchPageContainer";
import { movieData } from "../utils/Slices/movieSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const watchPageMovie = useSelector((store) => store.movies.movie);
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  const getVideoById = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        videoId +
        "&key=" +
        YOUTUBE_API_KEY
    );

    const json = await data.json();
    const videodetails = json.items[0];
    const channelIds = json.items[0]?.snippet?.channelId;

    const channelDetailsProm = async () => {
      const data = await fetch(
        "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=" +
          channelIds +
          "&key=" +
          YOUTUBE_API_KEY
      );
      const json = await data.json();

      return json.items[0];
    };
    const channelDetails = await channelDetailsProm();
    const videosWithChannelDetails = {
      videoInfo: videodetails && videodetails,
      channelInfo: channelDetails,
    };

    dispatch(movieData(videosWithChannelDetails));
  };

  useEffect(() => {
    getVideoById();
    dispatch(menuClose());
  }, []);

  return (
    <>
      {watchPageMovie && (
        <WatchPageContainer
          videoId={videoId}
          videoInfo={watchPageMovie.videoInfo}
          channelInfo={watchPageMovie.channelInfo}
        />
      )}
    </>
  );
};

export default WatchPage;
