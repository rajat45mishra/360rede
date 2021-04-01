import React,{useState,useEffect} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function Form({options,setSeconds,title}) {
    const defaultOption = options[0];
    const [state, setstate] = useState();
function handleSeconds(e,title) {
    if(title==="seconds"){
        setSeconds(e.value)
    }else{
        let valued=JSON.stringify(state)
        let dictg={};
        dictg[valued]=[e.value]
        let df=[dictg];
        setSeconds(df);
    }
}
useEffect(() => {
    setstate(title)
}, [state])
    return (
        <div>    
<Dropdown options={options} onChange={e=>handleSeconds(e,title)}   placeholder={title} />
        </div>
    )
}
