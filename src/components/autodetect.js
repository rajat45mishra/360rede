import React from 'react'
import Popup from './default'
import {useState} from 'react'
export default function Autodetect() {
    const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		setIsOpen(!isOpen);
	}
	
    return (
        <div>
           <div className="autodetect-container">
				<div className="row">
					<div className="col s12 m6">
						<div className="card">
							<div className="autodetect">
								<div className="card-content">
									<p className="automade"><p style={{padding:20}}>.....................No Cameras Detected........................</p></p>
								</div>
								<div style={{ padding: '3%',marginLeft:'25%' }}>
									<button className="btn-floating btn-large waves-effect waves-light red" onClick={togglePopup}><i className="fa fa-plus"></i></button>
								</div>
								<div style={{ padding: '3%' }}>
								<a className="waves-effect waves-light btn-large" href="/start">LiveView</a>
								</div>
							</div>
							<div className="autodetect_buttons">
								<a className="waves-effect waves-light btn-large" >AutoDetect</a>
								<a className="waves-effect waves-light btn-large" style={{marginLeft:'40%'}}>Resat</a>
							</div>
							{isOpen && <div style={{ marginTop: '60%' }}><Popup
								content={<>
									<b>   Design your Popup</b>
									<div className="row">
										<form className="col s12">
											<div className="row">
												<div className="input-field col s6">
													<input placeholder="Project Name" id="first_name" type="text" className="validate" />
												</div>

											</div>
											<p style={{display:'inline-block'}}>
												<label style={{paddingRight:10}}>
													<input type="checkbox" />
													<span>Red</span>
												</label>
												<label style={{paddingRight:10}}>
													<input type="checkbox" />
													<span>Red</span>
												</label>
												<label style={{paddingRight:10}}>
													<input type="checkbox" />
													<span>Red</span>
												</label>
											</p>
											<div style={{ padding: '3%' }}>
									<button className="waves-effect waves-light btn-small" type="submit">Create Project</button>
								</div>
										</form>
									</div></>}
								handleClose={togglePopup}
							/></div>}
						</div>
					</div>
				</div>
			</div> 
        </div>
    )
}
