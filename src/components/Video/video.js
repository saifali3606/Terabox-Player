import React from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../pageTransition";
import './video.css';

const Video = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoId = queryParams.get("surl"); // ✅ Get video ID from URL

  return (
    <PageTransition>
        <div className="container" id="container">
        <div className="container2" id="container">
            <div className="video-container2" id="videoContainer">
            {videoId ? (
                <div className="video-wrapper">
                    <iframe id="videoFrame2"
                    src={`https://www.1024terabox.com/sharing/embed?surl=${videoId}&hide_logo=1`} 
                    title="Terabox Video Player"
                    allowFullScreen
                    ></iframe>
                    <div className="watermark-cover"></div>
                </div>
                    
            ) : (
                <p>No video found. Please enter a valid URL.</p>
            )}
            </div>
            <div class="tv-buttons">
                        <div class="tv-button"></div>
                        <div class="tv-button"></div>
                        <div class="tv-button"></div>
                    </div>
          </div>
    
        </div>
        
    </PageTransition>
    
  );
};

export default Video;


