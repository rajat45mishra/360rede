import React,{useEffect} from 'react'
import { MDBRow, MDBCol } from "mdbreact";
import useImages from '../hooks/useImages'
import useEmailData from '../hooks/useEmailData'



export default function Listimage() {
  const {images,setImages}=useImages();
  const {emaildata,setEmailData}=useEmailData();
  function myFunction(images) {
    var keyval=String(Object.keys(images))
    var n = keyval.endsWith("crop");
    console.log(n);
    if (n){
      var res = keyval.slice(0, -4);
      return res
    }else{
      return keyval
    }
  }
  const keyval=Object.keys(images)
  const keyval2=myFunction(images);
  const valval=Object.values(images)
  console.log(valval);

const url="http://0.0.0.0:5000/media/"+keyval2+"/"+keyval+"/"
function listloop(valval,url) {
  var i;
  var li=[];
  for (i = 0; i < valval[0].length; i++) {
    var em={};
    console.log(valval[0][i])
    var newurl=url+valval[0][i];
    em['id']=i
    em['url']=newurl
    li.push(em);
  }
  return li
}
let lis=[];
function handleChange(e,g) {
  let isChecked = e.target.checked;
  console.log(isChecked)
  if (isChecked) {
    lis.push(g)
  }
  console.log("wswsw",lis)
}
const setdata= (lis) =>{
  setEmailData(lis);
}
useEffect(() => {
  if(lis){
    setdata(lis);
  }
}, [emaildata])
const list1=listloop(valval,url);
const listItems = list1.map((number) =>
<div>
<MDBRow>
<MDBCol>
  <input type="checkbox" id={number.id} onChange={e=>handleChange(e,number.url)} />
  <label htmlFor={number.id}><img src={number.url} alt="img"/></label>
</MDBCol>
</MDBRow>
</div>
);
    return (
        <div style={{ margin: '5%' }} className="grid-container">
          {listItems}
        </div>
    )
}
