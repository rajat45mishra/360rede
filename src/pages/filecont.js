import React from 'react'
import MediaControlCard from '../components/tumbnail'
import { Nav } from '../components/nav'
import Rajat from '../rajat.jpg'
import useSubfiles from '../hooks/useSubfiles'
export default function Filecont() {
    const {subfiles, setSubfiles}=useSubfiles();
    return (
        <div>
<Nav />
<div style={{display:'flex',width:'60%',margin:'10%',marginLeft:'25%'}}>
          {subfiles.map(name =>{
              if(Object.keys(name)[0].includes("project.mp4")){
                  console.log(Object.keys(name))
                  return <MediaControlCard button={Object.keys(name)} image={Rajat} child={Object(name)} link="/view"/> 
              }else{
                console.log(Object.keys(name))
                return <MediaControlCard button={Object.keys(name)} image={Rajat} child={Object(name)} link="/Selected"/>
              }
               
          } 
            )}
           </div>
        </div>
    )
}
