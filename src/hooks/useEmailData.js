import { useState } from 'react';

export default function useEmailData() {
  const getEmailData = () => {
    const tokenString = sessionStorage.getItem('emaildata');
    const userToken = JSON.parse(tokenString);
    console.log(userToken);
    return userToken
  };

  const [emaildata, setEmailData] = useState(getEmailData());

  const saveEmailData = userToken => {
    sessionStorage.setItem('emaildata', JSON.stringify(userToken));
    setEmailData(userToken);
    console.log(userToken);
  };
  return {
    setEmailData: saveEmailData,
    emaildata
  }
}