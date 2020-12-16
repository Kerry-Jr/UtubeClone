import React from 'react'
import VideoItem from "./VideoItem";


//props.videos
const VideoList = ({videos}) => {
  const renderedList = videos.map((video) => {
    return <VideoItem
       video={video}
       title
    />
  })
  return (
     <div className="ui relaxed divided list">
       {renderedList}
     </div>
  )
}

export default VideoList
