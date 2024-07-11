import { useDispatch } from "react-redux";
import { YOUTUBE_API_KEY } from "../constants";
import { addPopularVideos } from "../Slices/popularVideos";
import { useEffect } from "react";

const usePopularVideos =()=>{
    const dispatch = useDispatch();

    const getPopularVideos = async () => {
        const data = await fetch(YOUTUBE_API_KEY);
        const json = await data.json();
    
        dispatch(addPopularVideos(json.items));
      };
    
      useEffect(() => {
        getPopularVideos();
      }, []);

}

export default usePopularVideos