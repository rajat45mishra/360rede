import React from 'react'
import { Button } from "mdbreact";
import Listimage from '../components/listimage'
import useEmailData from '../hooks/useEmailData'
import useToken from '../hooks/useToken'
async function SendEmailTo(credentials,token) {
  return fetch('http://0.0.0.0:5000/file/EmailApi/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : token
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
export default function Selectedthumbnail() {
  const {emaildata,setEmailData}=useEmailData();
  const {token,setToken}=useToken();
  const data={
    "data":emaildata,
    "user":token
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const tokeny = await SendEmailTo(data,token);
    console.log(tokeny)
    alert("done")
  }
    return (
      <>
      <div style={{paddingTop:10,marginLeft:'90%'}}>
        <Button id="floter" onClick={handleSubmit} style={{backgroundColor:'#039be5'}}>Send eMail</Button>
      </div>
      <Listimage />
      </>
      
    )
}
