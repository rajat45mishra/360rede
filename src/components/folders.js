import React from 'react'
export default function Folders(props) {
    return (
        <div>
            <div className="container">
  <div className="card">
    <h3 className="subheader">Project</h3>
    <ul className="list">
      <li className="waves-effect">

        <a href="/filec"><div className="valign-wrapper">
        <i className="fas fa-folder-open fa-5x"></i>
          <div className="title" style={{marginLeft:20}}>
            {props.description}<br />
            <span>{props.dateNow}</span>
          </div>
          <a className="material-icons ml-auto" href="/">
          <i className="fas fa-trash fa-2x"></i>
          </a>
        </div>
        </a>
      </li>
    </ul>
 
  </div>
</div>
        </div>
    )
}
