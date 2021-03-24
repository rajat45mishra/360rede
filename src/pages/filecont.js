import React from 'react'
import MediaControlCard from '../components/tumbnail'
import { Nav } from '../components/nav'
export default function Filecont() {
    return (
        <div>
<Nav />
<div style={{display:'flex',width:'60%',margin:'10%',marginLeft:'25%'}}>
           <MediaControlCard button="View Original Images" image="https://www.computerhope.com/jargon/f/folder.png" link="/Selected"/> 
           <MediaControlCard button="View Croped Images" image="https://www.computerhope.com/jargon/f/folder.png" link="/Selected"/>
           <MediaControlCard button="Send Email" image="https://www.computerhope.com/jargon/f/folder.png" link="/view"/>
           </div>
        </div>
    )
}
