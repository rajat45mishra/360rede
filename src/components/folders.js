import React from 'react'
import { IconButton } from '@material-ui/core';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

export default function Folders(props) {
    return (
        <div>
            <div class="container">
  <div class="card">
    <h3 class="subheader">Folders</h3>
    <ul class="list">
      <li class="waves-effect">
        <div class="valign-wrapper">
          <i class="material-icons left circle white-text">folder</i>
          <div class="title">
            {props.description}<br />
            <span>Jan 9, 2017</span>
          </div>
          <IconButton class="material-icons ml-auto">
              <AccessAlarm></AccessAlarm>
          </IconButton>
        </div>
      </li>
    </ul>
 
  </div>
</div>
        </div>
    )
}
