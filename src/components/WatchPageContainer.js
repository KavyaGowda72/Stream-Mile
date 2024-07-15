import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countToDisplaycount } from '../utils/constants'
import {FaThumbsUp,FaThumbsDown} from 'react-icons/fa'
import { subscribeData } from '../utils/Slices/movieSlice'

const WatchPageContainer = ({videoId,videoInfo,channelInfo}) => {
    
  const [subscribe,setSubscribe]=useState(false)
  const[like,setLike]=useState(false)
  const[unlike,setUnlike]=useState(false)
 


  

   const{snippet,statistics}=videoInfo
   const{title}=snippet

    
 
  
 
    
        
  return (
    <>
        <div className='ml-9 mt-3 p-5  '>
        <div className="   ">
        <iframe
          className="rounded-lg "
          width="800"
          height="420"
          src={
            "https://www.youtube.com/embed/" + videoId + "?si=Xaik7eEjomfnD-np"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div >
     
     
      <div className='mt-2 p-2'>
        <p className='font-bold text-2xl'>{title}</p>
      </div>
      <div className='flex justify-between items-start mt-2 shadow-lg rounded-md p-5 ' >
      <div className='ml-0 col-span-1'>
        <img src={channelInfo?.snippet?.thumbnails?.default?.url} alt='chanel-logo' className='w-11 h-11 rounded-full'/>
      </div>
      <div className='absolute ml-12'>
          <p className='font-bold'>{channelInfo?.snippet?.title}</p>
          {/* <p className='font-normal text-gray-600'>{countToDisplaycount(viewCount)}</p> */}
      </div>
     
      

      <div className='  ml-16 '>
        {subscribe ? <button  onClick={()=>setSubscribe(!subscribe)}>Subscribed</button>:
        <button onClick={()=>setSubscribe(!subscribe)}>Subscribe</button>
        }
      
      

    
 
      
      </div>
      <div className='   flex h-8 mr-8 ' >
        <button className='ml-3 ' onClick={()=>{setLike(!like);setUnlike(false)}}><FaThumbsUp  className={like ? 'text-black col-span-1 w-[40px] text-lg  ' :' text-gray-500'} /></button>
        <button className='ml-5' onClick={()=>{setUnlike(!unlike); setLike(false)}}><FaThumbsDown className={unlike?'text-black col-span-1 text-lg ' :' text-gray-500'} /> </button>
      </div>
      </div>
      <div>
        {/* Comments */}
      </div>
      </div>
      
     
      
      </>
    
  )
}

export default WatchPageContainer