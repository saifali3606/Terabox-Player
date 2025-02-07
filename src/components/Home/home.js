import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import './home.css';
import pasteSign from '../../assets/clipboard.png';

const Home = () => {
    const [videoUrl, setVideoUrl] = useState("");

  // Function to extract video ID from Terabox URL
  const extractVideoId = (url) => {
    const match = url.match(/\/s\/(.+?)(?:\?|$)/);
    if (match && match[1]) return match[1].substring(1);

    const urlMatch = url.match(/surl=([^&]+)/);
    if (urlMatch && urlMatch[1]) return urlMatch[1];

    return null;
  };

  

  // Handle paste from clipboard
  const pasteLink = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setVideoUrl(text);
    } catch (err) {
      alert("Clipboard access denied!");
    }
  };

  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const videoId = extractVideoId(videoUrl);
    
    if (videoId) {
        navigate(`/video?surl=${videoId}`); // ✅ Pass the videoId to /video page
    } else {
        alert("Invalid Terabox Video URL");
    }
};



  return (
    
        <div className="container" > 
        <h1>TeraBox Video player</h1>
        
        <form id="videoForm" onSubmit={handleSubmit}>
            <label htmlFor="videoUrl">Enter Terabox Video URL:</label>
            <input type="url" id="videoUrl" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="https://www.1024terabox.com/video" required/>
            <button className="paste-btn" onClick={pasteLink} type='button'> <img id="paste-sign" src={pasteSign} alt="Paste"/>  </button>
            <button className="submit" type="submit">Submit</button>

        </form>
        
      </div>
  
    
    
  )
}

export default Home;