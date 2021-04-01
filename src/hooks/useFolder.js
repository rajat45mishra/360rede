import { useState } from 'react';

export default function useFolder() {
  const getFolder = () => {
    const tokenString = sessionStorage.getItem('folder');
    const userToken = JSON.parse(tokenString);
    console.log(userToken);
    return userToken
  };

  const [folder, setFolder] = useState(getFolder());

  const saveFolder = userToken => {
    sessionStorage.setItem('folder', JSON.stringify(userToken));
    setFolder(userToken);
    console.log(userToken);
  };
  return {
    setFolder: saveFolder,
    folder
  }
}