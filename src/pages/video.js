import React from 'react'
import { Button } from "mdbreact";
import useImages from '../hooks/useImages'
import { ReactVideo } from "reactjs-media";
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
export default function Video() {
  const {images,setImages}=useImages();
  const keyval=Object.keys(images)
  const url="http://0.0.0.0:5000/media/"+keyval
  console.log(url);
    function handleemail() {
    
        alert("email sent")
        
      }
    return (
        <div style={{margin:'30%',marginTop:'5%'}}>
            <ReactVideo
                src={url}
                primaryColor="red"
                // other props
            />
            <div style={{paddingTop:30,marginLeft:'80%'}}>
        <Button id="floter" onClick={handleemail} style={{backgroundColor:'#039be5'}}>Send eMail</Button>
      </div>
        </div>
    )
}
