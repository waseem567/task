"use client";
import React from "react";
import YouTube from "react-youtube";

const Video = () => {
  return (
    <div className="relative h-[200px] md:h-[700px] max-w-screen overflow-x-hidden">
      <div>
        <video
          className="scale-125 object-cover w-full h-max"
          src="/videos/marquee_vid.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline
        />
      </div>
    </div>
  );
};

export default Video;
