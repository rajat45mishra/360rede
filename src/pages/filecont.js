import React from 'react'
import MediaControlCard from '../components/tumbnail'
import { Nav } from '../components/nav'
import Rajat from '../rajat.jpg'
export default function Filecont() {
    return (
        <div>
<Nav />
<div style={{display:'flex',width:'60%',margin:'10%',marginLeft:'25%'}}>
           <MediaControlCard button="View Original Images" image={Rajat} link="/Selected"/> 
           <MediaControlCard button="View Croped Images" image={Rajat} link="/Selected"/>
           <MediaControlCard button="Send Email" image={Rajat} link="/view"/>
           </div>
        </div>
    )
}
