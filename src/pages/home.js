import React from 'react'
import Sidebar from '../components/sidebar'
import { Nav } from '../components/nav'
import Demo from '../components/cropper'
import Form from '../components/form'
import Popup from '../components/default'
import {useState} from 'react'
import CircularStatic from '../components/progress'
export function Home() {
    const [isOpen, setIsOpen] = useState(false);
    function showpopup() {
        setIsOpen(!isOpen);
        
    }
    return (
        <div>
            <Nav />
            <Sidebar />
            <div style={{ marginLeft: 200, marginTop: 40 }}>
            <div style={{display:'flex'}}>
                <Demo />
                <div style={{justifyContent:'space-between',flex:1,marginLeft:400}}>
                  <div style={{width:'90%',padding:13}}>
                <Form />
                </div>
                <div style={{width:'90%',padding:13}}>
                <Form />
                </div>
                <div style={{width:'90%',padding:13}}>
                <Form />
                </div>
                <div style={{width:'90%',padding:13}}>
                <Form />
                </div>
                </div>
            </div>
            {isOpen && <Popup content={<div><CircularStatic></CircularStatic></div>} handleClose={showpopup}></Popup>}
                <div style={{ padding: '4%', display: 'flex',width:'50%' }}>
                    <button className="waves-effect waves-light btn-small" type="submit" onClick={showpopup}>Start</button>
                    <button className="waves-effect waves-light btn-small" type="submit">Snapshot</button>
                   
                </div>
            </div>
        </div>
    )
}
