import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import './home.css';
import pasteSign from '../../assets/clipboard.png';

const Home = () => {
  function _0x11a7(){const _0x3c6e88=['Invalid\x20Terabox\x20Video\x20URL','208WeAocQ','165aLFbcE','87703ECaZve','4545099yeDJlo','preventDefault','/video?surl=','4830120KemEwU','match','396OVeZtE','5379rVNCpL','804xPMYWo','639419JLoGek','68802qhVTTT','108yefAkT','3591uJauXY','clipboard'];_0x11a7=function(){return _0x3c6e88;};return _0x11a7();}function _0x506c(_0x340f25,_0x188dfb){const _0x11a7f7=_0x11a7();return _0x506c=function(_0x506cf6,_0x317d88){_0x506cf6=_0x506cf6-0x19f;let _0x9d7312=_0x11a7f7[_0x506cf6];return _0x9d7312;},_0x506c(_0x340f25,_0x188dfb);}(function(_0x580cb5,_0x471ebd){const _0x15ff60=_0x506c,_0x2be8fa=_0x580cb5();while(!![]){try{const _0x368601=-parseInt(_0x15ff60(0x1a6))/0x1*(parseInt(_0x15ff60(0x1a5))/0x2)+-parseInt(_0x15ff60(0x1a1))/0x3*(parseInt(_0x15ff60(0x1a2))/0x4)+parseInt(_0x15ff60(0x1aa))/0x5*(-parseInt(_0x15ff60(0x1a4))/0x6)+-parseInt(_0x15ff60(0x1ab))/0x7*(-parseInt(_0x15ff60(0x1a9))/0x8)+-parseInt(_0x15ff60(0x1ac))/0x9+-parseInt(_0x15ff60(0x1af))/0xa+parseInt(_0x15ff60(0x1a3))/0xb*(parseInt(_0x15ff60(0x1a0))/0xc);if(_0x368601===_0x471ebd)break;else _0x2be8fa['push'](_0x2be8fa['shift']());}catch(_0x22db4b){_0x2be8fa['push'](_0x2be8fa['shift']());}}}(_0x11a7,0x4eec6));const [videoUrl,setVideoUrl]=useState(''),extractVideoId=_0x18301e=>{const _0x28d57b=_0x506c,_0x213add=_0x18301e['match'](/\/s\/(.+?)(?:\?|$)/);if(_0x213add&&_0x213add[0x1])return _0x213add[0x1]['substring'](0x1);const _0x32fa59=_0x18301e[_0x28d57b(0x19f)](/surl=([^&]+)/);if(_0x32fa59&&_0x32fa59[0x1])return _0x32fa59[0x1];return null;},pasteLink=async()=>{const _0x254348=_0x506c;try{const _0x2163c2=await navigator[_0x254348(0x1a7)]['readText']();setVideoUrl(_0x2163c2);}catch(_0x3b3ddf){alert('Clipboard\x20access\x20denied!');}},navigate=useNavigate(),handleSubmit=_0x35099f=>{const _0x402be9=_0x506c;_0x35099f[_0x402be9(0x1ad)]();const _0x589305=extractVideoId(videoUrl);_0x589305?navigate(_0x402be9(0x1ae)+_0x589305):alert(_0x402be9(0x1a8));};
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