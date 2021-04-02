import React from 'react'
import Sidebar from '../components/sidebar'
import { Nav } from '../components/nav'
import Demo from '../components/cropper'
import Form from '../components/form'
import SimpleDialog from '../components/popupfor'
import useCameraId from '../hooks/useCameraId'
const daforfa={
	method: 'GET',
	headers: {
	  'Content-Type': 'application/json'
	}
  };

async function CameraAutoD(url) {
    return fetch(url,daforfa);
   }
async function CameraAutoDP(url,config) {
    return fetch(url,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(config)
          }
        ).then(data => data.json())
   }
export function Home() {
    const [open, setOpen] = React.useState(false);
    const {cameraid, setCameraId} = useCameraId();
const [ConfigTo, setConfigTo] = React.useState();
    const handleClickOpen = () => {
        setOpen(true);
      };
    console.log(ConfigTo)
      const handleClose = () => {
        setOpen(false);
      };
      
    const selectedValue=55;
      const handleCapture = async e => {
		const urlgj='http://0.0.0.0:5000/camera_ctrl/api/camera_capture_img_and_download/'+cameraid;
		const toke = await CameraAutoD(urlgj);
	  }
      const handleConfig = async e => {
		const urlgj='http://0.0.0.0:5000/camera_ctrl/api/CameraConfigForApi/'+cameraid;
		const toke = await CameraAutoDP(urlgj,ConfigTo);
        console.log(toke)
	  }
      React.useEffect(() => {
        if(ConfigTo){
            handleConfig();
            console.log(ConfigTo);
        }
        
    })
    function oprions(texty) {
        const data = localStorage.getItem("congfigdata");
        const iso=JSON.parse(data);
        let isodata=iso
        return isodata[texty]
        }
    const iso=oprions("iso")
    const shutterspeed=oprions("shutterspeed")
    const colortemperature=oprions("colortemperature")
    const aperture=oprions("aperture")
    const whitebalance=oprions("whitebalance")

    return (
        <div>
            <Nav />
            <Sidebar />
            <div style={{ marginLeft: 200, marginTop: 40 }}>
                <div style={{ display: 'flex' }}>
                    <Demo />
                    <div style={{ justifyContent: 'space-between', flex: 1, marginLeft: 400 }}>
                        <div style={{ width: '90%', padding: 13 }}>ISO:<br></br>
                            <Form options={iso} setSeconds={setConfigTo} title="ISO" />
                        </div>
                        <div style={{ width: '90%', padding: 13 }} >shutterspeed:<br></br>
                            <Form options={shutterspeed} setSeconds={setConfigTo} title="shutterspeed"/>
                        </div>
                        <div style={{ width: '90%', padding: 13 }} >aperture:<br></br>
                            <Form options={aperture} setSeconds={setConfigTo} title="aperture"/>
                        </div>
                        <div style={{ width: '90%', padding: 13 }} >whitebalance:<br></br>
                            <Form options={whitebalance} setSeconds={setConfigTo} title="whitebalance"/>
                        </div>
                        <div style={{ width: '90%', padding: 13 }} >colortemperature:<br></br>
                            <Form options={colortemperature} setSeconds={setConfigTo} title="colortemperature" />
                        </div>
                    </div>
                </div>
                <div style={{ padding: '4%', display: 'flex', width: '50%' }}>
                    <button className="waves-effect waves-light btn-large" type="submit" onClick={handleClickOpen} style={{backgroundColor:'#039be5'}}>Start</button>
                    <button className="waves-effect waves-light btn-large" type="submit" style={{ marginLeft: '20%',backgroundColor:'#039be5' }} onClick={handleCapture}>Snapshot</button>
                </div>
                <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            </div>
        </div>
    )
}
