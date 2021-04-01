import {Nav} from '../components/nav'
import Autodetect from '../components/autodetect'
import useConfig from '../hooks/useConfig'
import useCameraId from '../hooks/useCameraId'
import React,{useEffect,useState} from 'react'

async function ConfigFatch(cameraid) {
    return fetch('http://0.0.0.0:5000/camera_ctrl/api/CameraConfigForApi/'+cameraid, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
   }
export  function Start() {
  const [state, setstate] = useState(true);
  const {cameraid, setCameraId} = useCameraId();

  const handleSubmitee = async e => {
    const token = await ConfigFatch(cameraid);
    console.log(token)
    localStorage.setItem("congfigdata", JSON.stringify(token));
  }
  console.log(cameraid);
  
  useEffect(() => {
    if(state && cameraid){
        handleSubmitee();
        setstate(false);
        console.log(cameraid);
      }else{
        console.log("buy")
      }
  })
    
    return (
        <div>
        <Nav />
        <Autodetect />
        </div>
    )
}
