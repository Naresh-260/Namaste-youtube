import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos_data,setVideosData] = useState([])
  const youtube_videos = async()=>{
  const data = await fetch(YOUTUBE_VIDEO_API)
  const json = await data.json()
  setVideosData(json.items);
  }
  useEffect(()=>{
    youtube_videos()
  },[])
  if(!videos_data.length) return
  return (
    <div className='flex flex-wrap overflow-y-scroll'>
    {videos_data.map(video => 
    <Link to={"/watch?v=" + video.id}><VideoCard key = {video.id} video = {video}/></Link>)} 
    </div>
  )
}
export default VideoContainer
