import React from 'react'
export  function Nav() {
    return (
        <div>
           <nav>
				<div className="nav-wrapper" style={{backgroundColor:'#039be5'}}>
					<a href="/" className="brand-logo"><img src="https://tymui.herokuapp.com/static/img/logo.png" alt="img" style={{marginLeft:20,marginTop:10}}></img></a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a href="/file">FileManager</a></li>
						<li><a href="/">Signout</a></li>
					</ul>
				</div>
			</nav> 
        </div>
    )
}
