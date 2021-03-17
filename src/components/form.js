import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function form() {
    const options = [
        'one', 'two', 'three'
      ];
    const defaultOption = options[0];
    function onSelect() {
        console.log(defaultOption);
    }
    return (
        <div>    
<Dropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
        </div>
    )
}
