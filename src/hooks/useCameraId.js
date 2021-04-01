import { useState } from 'react';

export default function useCameraId() {
  const getCameraId = () => {
    const tokenString = sessionStorage.getItem('cameraid');
    const userToken = JSON.parse(tokenString);
    console.log(userToken);
    return userToken
  };

  const [cameraid, setCameraId] = useState(getCameraId());

  const saveCameraId = userToken => {
    sessionStorage.setItem('cameraid', JSON.stringify(userToken));
    setCameraId(userToken);
    console.log(userToken);
  };
  return {
    setCameraId: saveCameraId,
    cameraid
  }
}