import React from 'react'
import Sidebar from '../components/sidebar'
import { Nav } from '../components/nav'
import Demo from '../components/cropper'
import Form from '../components/form'
export function Home() {
    return (
        <div>
            <Nav />
            <Sidebar />
            <div style={{ marginLeft: 200, marginTop: 40 }}>
            <div style={{display:'flex'}}>
                <Demo />
                <div style={{justifyContent:'space-between',flex:1,marginLeft:400}}>
                  <div style={{width:'90%'}}>
                <Form />
                </div>
                </div>
            </div>
                <div style={{ padding: '3%', display: 'flex' }}>
                    <button className="waves-effect waves-light btn-small" type="submit">Create Project</button>
                    <button className="waves-effect waves-light btn-small" type="submit">Create Project</button>
                    <button className="waves-effect waves-light btn-small" type="submit">Create Project</button>
                    <button className="waves-effect waves-light btn-small" type="submit">Create Project</button>
                    <button className="waves-effect waves-light btn-small" type="submit">Create Project</button>
                    <button className="waves-effect waves-light btn-small" type="submit">Create Project</button>
                </div>
            </div>
        </div>
    )
}
