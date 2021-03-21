import React from 'react'
import { IconButton } from '@material-ui/core';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

export default function Folders(props) {
    return (
        <div>
            <div class="container">
  <div class="card">
    <h3 class="subheader">Project</h3>
    <ul class="list">
      <li class="waves-effect">

        <a href="/filec"><div class="valign-wrapper">
        <i class="fas fa-folder-open fa-5x"></i>
          <div class="title" style={{marginLeft:20}}>
            {props.description}<br />
            <span>Jan 9, 2017</span>
          </div>
          <a class="material-icons ml-auto" href="#">
          <i class="fas fa-trash fa-2x"></i>
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
