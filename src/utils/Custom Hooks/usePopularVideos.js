import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API } from "../constants";
import { addPopularVideos } from "../Slices/popularVideos";
import { useEffect } from "react";


const usePopularVideos =()=>{
    const dispatch = useDispatch();
    const popularVideos=useSelector((store)=>store.popular.popularVideos)


    const getPopularVideos = async () => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        
        dispatch(addPopularVideos(json.items));
      };
    
      useEffect(() => {
        //Memoization
       getPopularVideos();
      }, []);

}

export default usePopularVideos