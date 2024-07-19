import { YOUTUBE_API_KEY } from "../secretkey";


export const YOUTUBE_API=" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY



export   const countToDisplaycount=(viewCount)=>
    {
      if(viewCount>=1000 && viewCount<=999999)
      {
          let value= viewCount/1000;
          let out=value.toFixed(1);
          return out+"k";
      }
      else if(viewCount>=1000000 && viewCount<=999999999 )
      {
          let value= viewCount/1000000;
          let out=value.toFixed(1);
          return out+"M";  
      }
      else if(viewCount>=1000000000)
      {
          let value= viewCount/1000000000;
          let out=value.toFixed(1);
          return out+"B";  
      }
      else{
          return viewCount
      }
    }