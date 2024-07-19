import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../secretkey";
import { useDispatch, useSelector } from "react-redux";

import SearchList from "./SearchList";
import ButtonList from "./ButtonList";
import { searchResults } from "../utils/Slices/popularVideos";

const SearchResults = () => {
  const [searchParam] = useSearchParams();
  const serachQuery = searchParam.get("search_query");

  const dispatch = useDispatch();
  const searchRes = useSelector((store) => store.popular.searchVideos);

  const getSearchResults = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        serachQuery +
        "&key=" +
        YOUTUBE_API_KEY
    );
    const json = await data.json();
    const channelIds = json.items.map((video) => video?.snippet?.channelId);
    const channelDetailsProm = channelIds.map(async (channelId) => {
      const data = await fetch(
        "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=" +
          channelId +
          "&key=" +
          YOUTUBE_API_KEY
      );
      const json = await data.json();
      return json.items[0];
    });
    const channelDetails = await Promise.all(channelDetailsProm);

    const videosWithChannelDetails = json?.items?.map((video, index) => ({
      videoInfo: video,
      channelInfo: channelDetails[index],
    }));
    dispatch(searchResults(videosWithChannelDetails));
  };

  useEffect(() => {
    if (!searchRes) getSearchResults();
  }, [serachQuery]);
  return (
    searchRes && (
      <div className=" overflow-x-scroll scrollbar scrollbar-hide">
        <div className=" pl-10">
          <ButtonList />
        </div>
        <div className="pl-12">
          <p className="">
            Showing Results for{" "}
            <span className="font-bold underline ">{serachQuery}</span>
          </p>
        </div>

        {searchRes &&
          searchRes.map((video) => (
            <div>
              <Link
                to={
                  video.videoInfo.id.videoId
                    ? "/watch?v=" + video.videoInfo.id.videoId
                    : "/watch?v=" + video.videoInfo.id
                }
              >
                <SearchList
                  videoinfo={video.videoInfo}
                  channelinfo={video.channelInfo}
                />
              </Link>
            </div>
          ))}
      </div>
    )
  );
};

export default SearchResults;
