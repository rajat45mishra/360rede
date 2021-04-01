import React,{useState} from 'react'
import useToken from '../hooks/useToken'
import useFolder from '../hooks/useFolder'
import axios from 'axios'
export  function Nav() {
	const {token,setToken}=useToken();
	const {folder,setFolder}=useFolder();
	const out='';
  const fetchData = async () => {
    const response = await axios.get(
      'http://0.0.0.0:5000/file/transformers/'
    );

    setFolder(response.data);
  };
    return (
        <div>
           <nav>
				<div className="nav-wrapper" style={{backgroundColor:'#039be5'}}>
					<a href="/" className="brand-logo"><img src="https://tymui.herokuapp.com/static/img/logo.png" alt="img" style={{marginLeft:20,marginTop:10}}></img></a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a onClick={fetchData} href="/file">FileManager</a></li>
						{token? <li><a onClick={()=>{setToken(out)}}>Signout</a></li>:<li><a href="/">SignIn</a></li>}
					</ul>
				</div>
			</nav> 
        </div>
    )
}
