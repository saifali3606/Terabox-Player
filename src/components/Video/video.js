import React from "react";
import { useLocation,useNavigate} from "react-router-dom";
import './video.css';

const Video = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoId = queryParams.get("surl"); // ✅ Get video ID from URL

  return (
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

          <div className="extra-links">
            <p className="instruction-text">Follow these easy steps to watch the video without ads(8-ads):</p>
            <div className="link-row">
              <a href="https://kiwi-browser-fast-quiet.en.softonic.com/android" target="_blank" rel="noopener noreferrer" className="button-link">
                Kiwi Browser (for mobile only)
              </a>
              <span className="plus-sign">+</span>
              <a href="https://chromewebstore.google.com/detail/2025-%E2%96%B7-terabox-video-link/dmmpmfnpmfdamkcijepcjkdnpjoakieo" target="_blank" rel="noopener noreferrer" className="button-link">
                Extension to remove ads (for mobile and desktop)
              </a>
            </div>
          </div>
          
    
        </div>
        
    
  );
};

export default Video;


