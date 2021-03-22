import React from 'react'
import Sidebar from '../components/sidebar'
import { Nav } from '../components/nav'
import Demo from '../components/cropper'
import Form from '../components/form'
import SimpleDialog from '../components/popupfor'
export function Home() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const selectedValue=55;
    return (
        <div>
            <Nav />
            <Sidebar />
            <div style={{ marginLeft: 200, marginTop: 40 }}>
                <div style={{ display: 'flex' }}>
                    <Demo />
                    <div style={{ justifyContent: 'space-between', flex: 1, marginLeft: 400 }}>
                        <div style={{ width: '90%', padding: 13 }}>
                            <Form />
                        </div>
                        <div style={{ width: '90%', padding: 13 }}>
                            <Form />
                        </div>
                        <div style={{ width: '90%', padding: 13 }}>
                            <Form />
                        </div>
                        <div style={{ width: '90%', padding: 13 }}>
                            <Form />
                        </div>
                    </div>
                </div>
                <div style={{ padding: '4%', display: 'flex', width: '50%' }}>
                    <button className="waves-effect waves-light btn-large" type="submit" onClick={handleClickOpen} style={{backgroundColor:'#039be5'}}>Start</button>
                    <button className="waves-effect waves-light btn-large" type="submit" style={{ marginLeft: '20%',backgroundColor:'#039be5' }}>Snapshot</button>
                </div>
                <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            </div>
        </div>
    )
}
