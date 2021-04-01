import { useState } from 'react';

export default function useImages() {
  const getImages = () => {
    const tokenString = sessionStorage.getItem('images');
    const userToken = JSON.parse(tokenString);
    console.log(userToken);
    return userToken
  };

  const [images, setImages] = useState(getImages());

  const saveImages = userToken => {
    sessionStorage.setItem('images', JSON.stringify(userToken));
    setImages(userToken);
    console.log(userToken);
  };
  return {
    setImages: saveImages,
    images
  }
}