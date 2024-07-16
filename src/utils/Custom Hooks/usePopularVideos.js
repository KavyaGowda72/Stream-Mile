import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API } from "../constants";
import { addPopularVideos } from "../Slices/popularVideos";
import { useEffect } from "react";
import { YOUTUBE_API_KEY } from "../../secretkey";

const usePopularVideos =()=>{
    const dispatch = useDispatch();
    const popularVideos=useSelector((store)=>store.popular.popularVideos)

    console.log("yOUTUBE_API_KEY"+YOUTUBE_API_KEY)

    const getPopularVideos = async () => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        console.log(json.items)
    
        dispatch(addPopularVideos(json.items));
      };
    
      useEffect(() => {
        //Memoization
        getPopularVideos();
      }, []);

}

export default usePopularVideos