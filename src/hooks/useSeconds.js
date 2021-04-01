import { useState } from 'react';

export default function useSeconds() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('seconds');
    const userSeconds = JSON.parse(tokenString);
    return userSeconds?.seconds
  };

  const [seconds, setSeconds] = useState(getToken());

  const saveSeconds = userSeconds => {
    sessionStorage.setItem('seconds', JSON.stringify(userSeconds));
    setSeconds(userSeconds.seconds);
  };
  return {
    setSeconds: saveSeconds,
    seconds
  }
}