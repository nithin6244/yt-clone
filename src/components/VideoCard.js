import React, { useState } from "react";
import DeleteIcon from "./DeleteIcon";

function VideoCard({ video, deleteVideo, setOpen, setVidId }) {
  return (
    <div className="video-card">
      <div
        onClick={() => {
          setOpen(true);
          setVidId(video.id.videoId);
        }}>
        <img src={video.snippet.thumbnails.medium.url} />
        <p>{video.snippet.title}</p>
      </div>
      <button
        className="deleteButton"
        onClick={() => deleteVideo(video.id.videoId)}>
        <DeleteIcon />
      </button>
      <div className="clear"></div>
    </div>
  );
}

export default VideoCard;
