import React from "react";
import { useLocation,useNavigate} from "react-router-dom";
import PageTransition from "../pageTransition";
import './video.css';

const Video = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoId = queryParams.get("surl"); // ✅ Get video ID from URL

  return (
    <PageTransition>
        <div className="container" id="container">
        
        <div className="container2" id="container">
            
            <div className="video-container2" id="videoContainer">
            {videoId ? (
            
                <iframe id="videoFrame2"
                src={`https://www.1024terabox.com/sharing/embed?surl=${videoId}`} 
                title="Terabox Video Player"
                allowFullScreen
                ></iframe>
                
                    
            ) : (
                <p>No video found. Please enter a valid URL.</p>
            )}
            </div>
               <div class="tv-buttons">
                        <div class="tv-button"></div>
                        <div class="tv-button"></div>
                        <div class="tv-button"></div>
                </div>
                <button className="back-button" onClick={() => navigate("/")}>
                     ← Back
                </button>
          </div>
          
    
        </div>
        
    </PageTransition>
    
  );
};

export default Video;


