import React from 'react'
import ReactPlayer from 'react-player'
import { Button } from "mdbreact";

export default function video() {
    function handleemail() {
    
        alert("email sent")
        
      }
    return (
        <div style={{margin:'30%',marginTop:'5%'}}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            <div style={{paddingTop:30,marginLeft:'80%'}}>
        <Button id="floter" onClick={handleemail} style={{backgroundColor:'#039be5'}}>Send eMail</Button>
      </div>
        </div>
    )
}
