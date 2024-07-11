const GOOGLE_API_KEY="AIzaSyBG1z-rYbGfyGkCuF9C4rzTYYrIJw4mc4Q"

export const YOUTUBE_API_KEY="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=52&regionCode=IN&key="+GOOGLE_API_KEY


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