import { useState } from 'react';

export default function useConfig() {
  const getConfig = () => {
    const tokenString = sessionStorage.getItem('config');
    const userToken = JSON.parse(tokenString);
    console.log(userToken);
    return userToken
  };

  const [configid, setConfig] = useConfig(getConfig());

  const saveConfig = userToken => {
    sessionStorage.setItem('config', JSON.stringify(userToken));
    setConfig(userToken);
    console.log(userToken);
  };
  return {
    setConfig: saveConfig,
    configid
  }
}