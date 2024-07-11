import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className=" flex flex-col mt-3  overflow-y-auto h-screen  scrollbar scrollbar-hide items-center overflow-hidden ">
      <div className="bg-white  w-full md:pb-2">
        <ButtonList />
      </div>

      <VideoContainer />
    </div>
  );
};

export default MainContainer;
