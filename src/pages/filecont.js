import React from 'react'
import MediaControlCard from '../components/tumbnail'
import { Nav } from '../components/nav'
export default function Filecont() {
    return (
        <div>
<Nav />
<div style={{display:'flex',width:'60%',margin:'10%',marginLeft:'25%'}}>
           <MediaControlCard /> 
           <MediaControlCard />
           <MediaControlCard />
           </div>
        </div>
    )
}
