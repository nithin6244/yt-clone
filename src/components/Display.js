import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { youtubeApi } from "./../apis/youtubeApi";
import ModalVideo from "react-modal-video";

function Display({ searchInput }) {
  const [videos, setVideos] = useState([]);
  const [vidId, setVidId] = useState("");
  const [isOpen, setOpen] = useState(false);

  // function that deletes a particular video
  const deleteVideo = (key) => {
    const newVids = videos.filter((video) => video.id.videoId !== key);
    setVideos(newVids);
  };

  //use effect to load search results on change of search input
  useEffect(() => {
    const getVideos = async () => {
      return youtubeApi.get("/search", {
        params: {
          q: searchInput,
        },
      });
    };
    getVideos().then((response) => {
      setVideos(response.data.items);
    });
  }, [searchInput]);

  return (
    <>
      {isOpen && <p style={{ marginBottom: "1rem" }}>Press Esc to close X</p>}
      <ModalVideo
        className="modal-video"
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={vidId}
        onClose={() => setOpen(false)}></ModalVideo>

      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard
            setOpen={setOpen}
            setVidId={setVidId}
            deleteVideo={deleteVideo}
            key={video.id.videoId}
            video={video}></VideoCard>
        ))}
      </div>
    </>
  );
}

export default Display;
