import React,{useEffect} from 'react'
import { Button } from "mdbreact";
import Listimage from '../components/listimage'
export default function Selectedthumbnail() {
  function handleemail() {
    
    alert("email sent")
    
  }
    return (
      <>
      <div style={{paddingTop:10,marginLeft:'90%'}}>
        <Button id="floter" onClick={handleemail}>Send eMail</Button>
      </div>
      <Listimage />
      <Listimage />
      <Listimage />
      <Listimage />
      <Listimage />
      <Listimage />
      <Listimage />
      <Listimage />
      </>
      
    )
}
