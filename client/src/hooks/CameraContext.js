import React from 'react';
import mobileCheck from 'utils/mobileCheck';
import { getImageBlocks, getImageDataByBlocks } from 'utils/camera';

const CameraContext = React.createContext({});

const CameraProvider = (props)=> {
  const { children } = props;

  const ref = {canvas: React.useRef()};

  const getUserMedia = ()=> {
    return new Promise(async (resolve, _)=> {
      const mediaStream = await window.navigator
      .mediaDevices.getUserMedia({
        video: {
          facingMode: {exact: mobileCheck() ? 
            "environment" : "user"}
        }
      });
  
      resolve({ mediaStream });
    });
  }

  const loadMediaStream = (mediaStream, video)=> {
    return new Promise((resolve, _)=> {
      const canvas = ref.canvas.current;
  
      video.srcObject = mediaStream;
  
      video.addEventListener("loadeddata", ()=> {
        const videoRect = video.getBoundingClientRect();
        const ctx = canvas.getContext("2d");
        
        canvas.width = videoRect.width;
        canvas.height = videoRect.height;

        const takePhoto = ({returnImageBlocks})=> {
          ctx.drawImage(video, 0, 0);

          if(returnImageBlocks)
            return getImageBlocks(canvas, 4, 4);
          return ctx.getImageData(0, 0, canvas.width, canvas.height);
        }

        resolve({ takePhoto });
      });
    });
  }

  return (
    <CameraContext.Provider 
      value={{ 
        getUserMedia, 
        loadMediaStream 
      }}>
      {children}
      <canvas 
        ref={ref.canvas} 
        style={{display: "none"}}/>
      <video 
        autoPlay 
        ref={ref.video}
        style={{display: "none"}}/>
    </CameraContext.Provider>
  )
}

const useCamera = ()=> {
  return React.useContext(CameraContext);
}

export { CameraProvider, useCamera };