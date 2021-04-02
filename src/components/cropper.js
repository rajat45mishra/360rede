import React, { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Rajat from '../rajat.jpg'
import useCameraId from '../hooks/useCameraId'
async function CameraAutoDP(url,config) {
  return fetch(url,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(config)
        }
      ).then(data => data.json())
 }
const Demo = () => {
  const cropperRef = useRef(null);
  const {cameraid, setCameraId} = useCameraId();
  
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    let x=cropper.getData()["x"]
    let y=cropper.getData()["y"]
    let x2=cropper.getData()["x"]+cropper.getData()["width"]
    let y2=cropper.getData()["y"]+cropper.getData()["height"]
    let mainx = (x+x2)/2
    let mainy = (y+y2)/2
    let mapx=(mainx/960)*100
    let mapy=(mainy/640)*100
    let eosx=Math.round((mapx/100)*4538);
    let eosy=Math.round((mapy/100)*3000);
    console.log(eosx,eosy);
    const handleConfig = async e => {
      const urlgj='http://0.0.0.0:5000/camera_ctrl/api/CameraConfigForApiEos/'+cameraid;
      const toke = await CameraAutoDP(urlgj,{"eoszoomposition":[''+String(eosx)+','+String(eosy)]});
          console.log(toke)
      }
    handleConfig();
  };
  return (
    <Cropper
      src={'http://0.0.0.0:5000/camera_ctrl/api/camera_preview_source/'+cameraid}
      style={{ height: 640, width: 960}}
      initialAspectRatio={16 / 9}
      guides={false}
      crop={onCrop}
      ref={cropperRef}
    />
  );
};
export default Demo;