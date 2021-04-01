import axios from 'axios';
import React,{useState} from 'react'
import AlertDialogSlide from './signupdialog'
import useFolder from '../hooks/useFolder'
import useSubfiles from '../hooks/useSubfiles'
export default function Folders(props) {
  const [state, setState] = useState();
  const [open, setOpen] = useState(false);
  const {folder,setFolder}=useFolder();
  const {subfiles, setSubfiles}=useSubfiles();
  const fetchData = async () => {
    const response = await axios.get(
      'http://0.0.0.0:5000/file/transformers/'
    );

    setFolder(response.data);
  };
  const deleteFolders = async () => {
    const response = await axios.delete(
      'http://0.0.0.0:5000/file/transformers/'+state
    );
    fetchData();
  };
  function opento(e) {
    setOpen(true);
    setState(e);
  }
  function close() {
		setOpen(false);
	  }
    const name="are you sure you want to delete it";
    return (
      <div>
        <div className="container">
          <div className="card">
            <h3 className="subheader">Project</h3>
            <ul className="list">
              <li className="waves-effect">
                <a href="/filec" onClick={e=>setSubfiles(props.child)} ><div className="valign-wrapper">
                  <i className="fas fa-folder-open fa-5x"></i>
                  <div className="title" style={{ marginLeft: 20 }}>
                    {props.projectname}<br />
                    <span>{props.time}</span>
                  </div>
                  <a className="material-icons ml-auto" href="#" onClick={e=>opento(props.projectname)}>
                    <i className="fas fa-trash fa-2x"></i>
                  </a>
                </div>
                </a>
              </li>
              <AlertDialogSlide open={open} close={close} content={name} title="Warnning" url="/" del={deleteFolders} urltext="Delete"></AlertDialogSlide>
            </ul>
          </div>
        </div>
      </div>
    )
}
