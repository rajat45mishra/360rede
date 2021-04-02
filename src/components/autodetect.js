import React from 'react'
import Popup from './default'
import {useState} from 'react'
import Form from './form'
import useToken from '../hooks/useToken'
import AlertDialogSlide from './signupdialog'
import useProject from '../hooks/useProject'
import useCameraId from '../hooks/useCameraId'
async function Project(credentials,token) {
	console.log(token);
    return fetch('http://0.0.0.0:5000/project/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
		'Authorization' : token
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   const daforfa={
	method: 'GET',
	headers: {
	  'Content-Type': 'application/json'
	}
  };
   async function CameraAuto(url) {
    return fetch(url,daforfa).then(data => data.json())
   }
   async function CameraAutoR(url) {
    return fetch(url,daforfa).then(data => data)
   }
   async function CameraAutoRP(url) {
    return fetch(url,daforfa)
   }
export default function Autodetect() {
    const [isOpen, setIsOpen] = useState(false);
	const [name, setName] = useState();
	const [seconds,setSeconds]=useState();
	const {token,setToken}=useToken();
	const [open, setOpen] = useState(false);
	const {project,setProject}=useProject();
	const [camera, setcamera] = useState();
	const {cameraid, setCameraId} = useCameraId();
	const [url, seturl] = useState();
	const togglePopup = () => {
		setIsOpen(!isOpen);	
	}
	function close() {
		setOpen(false);
	  }
	const options = [
        '8 Seconds', '12 Seconds', '16 Seconds'
      ];
	  const handleSubmit = async e => {
		e.preventDefault();
		console.log(seconds)
		const token1 = await Project({
			"name": name,
			"time": seconds,
			"details": null
		},token);
		setProject(token1);
		console.log(project);
		togglePopup();
		setOpen(true);
	  }
	  const handleDetect = async e => {
		e.preventDefault();
		seturl('http://0.0.0.0:5000/camera_ctrl/api/cameras_autodetect');
		const tokene = await CameraAuto(url);
		setcamera(tokene);
		console.log(camera);
	  }
	  const handleResat = async e => {
		e.preventDefault();
		const urlg='http://0.0.0.0:5000/camera_ctrl/api/cameras_hard_reset_all';
		const toke = await CameraAutoR(urlg);
		console.log(urlg);
	  }
	  const handlePreview = async e => {
		setCameraId(camera?.data[0])
		const urlgj='http://0.0.0.0:5000/camera_ctrl/api/camera_preview_source/'+camera?.data[0];
		const toke = await CameraAutoRP(urlgj);
	  }
    return (
        <div>
           <div className="autodetect-container">
				<div className="row">
					<div className="col s12 m6">
						<div className="card">
							<div className="autodetect">
								<div className="card-content">
									<p className="automade"><p style={{padding:20,minWidth:500}}>{camera?camera.data[0] +" " +camera.data[1]:"No camera Deteted"}</p></p>
								</div>
								<div style={{ padding: '3%',marginLeft:'5%' }}>
									<button className="btn-floating btn-large waves-effect waves-light red" onClick={togglePopup}><i className="fa fa-plus"></i></button>
								</div>
								<div style={{ padding: '3%' }}>
								<a className="waves-effect waves-light btn-large" href="/start" style={{backgroundColor:'#039be5'}}onClick={handlePreview} >LiveView</a>
								</div>
							</div>
							<div className="autodetect_buttons">
								<a className="waves-effect waves-light btn-large" style={{backgroundColor:'#039be5'}} href="#" onClick={handleDetect}>AutoDetect</a>
								<a className="waves-effect waves-light btn-large" style={{marginLeft:'40%',backgroundColor:'#039be5'}} href="#" onClick={handleResat} >Resat</a>
							</div>
							{isOpen && <div style={{ marginTop: '60%' }}><Popup
								content={<>
									<b> Create Project</b>
									<div className="row">
										<form className="col s12" onSubmit={handleSubmit}>
											<div className="row">
												<div className="input-field col s6">
													<input placeholder="Project Name" id="first_name" type="text" className="validate" onChange={e=>setName(e.target.value)} />
												</div>

											</div>
											<p style={{display:'flex',alignItems:'center'}}>
												<h1 style={{fontSize:20,textAlign:'center'}}>Select Duration:</h1>
												<label style={{paddingRight:5}}>
													<Form options={options} setSeconds={setSeconds} title="seconds" />
												</label>
											</p>
											<div style={{ padding: '3%' }}>
									<button className="waves-effect waves-light btn-large" style={{backgroundColor:'#039be5',width:250}} type="submit">Create Project</button>
								</div>
										</form>
									</div></>}
								handleClose={togglePopup}
							/></div>}
							<AlertDialogSlide open={open} close={close} content={name} title="Project Created" url="/start" urltext="Go to Project"></AlertDialogSlide>
						</div>
					</div>
				</div>
			</div> 
        </div>
    )
}
