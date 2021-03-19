import React from 'react'
import MediaControlCard from '../components/tumbnail'
import { Nav } from '../components/nav'
export default function Filecont() {
    return (
        <div>
<Nav />
<div style={{display:'flex',width:'60%',margin:'10%',marginLeft:'25%'}}>
           <MediaControlCard button="View Original Images"/> 
           <MediaControlCard button="View Croped Images" />
           <MediaControlCard button="Send Email"/>
           </div>
        </div>
    )
}
