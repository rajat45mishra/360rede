import React from 'react'
export  function Nav() {
    return (
        <div>
           <nav>
				<div className="nav-wrapper">
					<a href="/" className="brand-logo">ZeroOneTechs</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a href="/file">FileManager</a></li>
						<li><a href="#">Signout</a></li>
					</ul>
				</div>
			</nav> 
        </div>
    )
}
