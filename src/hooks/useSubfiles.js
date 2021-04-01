import { useState } from 'react';

export default function useSubfiles() {
  const getSubfiles = () => {
    const tokenString = sessionStorage.getItem('subfiles');
    const userToken = JSON.parse(tokenString);
    console.log(userToken);
    return userToken
  };

  const [subfiles, setSubfiles] = useState(getSubfiles());

  const saveSubfiles = userToken => {
    sessionStorage.setItem('subfiles', JSON.stringify(userToken));
    setSubfiles(userToken);
    console.log(userToken);
  };
  return {
    setSubfiles: saveSubfiles,
    subfiles
  }
}