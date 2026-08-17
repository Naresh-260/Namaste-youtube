import React from 'react'

const VideoCard = ({video}) => {
    const { id,snippet, statistics } = video;
    const { channelTitle, title, thumbnails } = snippet;
    const { viewCount } = statistics;
  return (
    <div className='p-2 m-4 w-60 shadow-lg'>
    <img src = {thumbnails.medium.url} alt='video_thumnail' className='rounded-lg'/>
    <ul className="list-none">
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
    </ul>
      
    </div>
  )
}

export default VideoCard
