import React from 'react'
import Folders from './folders'
import useFolder from '../hooks/useFolder'
export default function Search() {
  const datad=String(new Date());
  const{folder,setFolder}=useFolder();
    const list1=[
        {
            config: 112,
            description: "Om Namah Shivaay",
            dateNow:datad
          },
          {
            config: 787,
            description: "Om Hari Vishnu",
            dateNow:datad
          },
          {
            config: 112,
            description: "Om Namo Narayna",
            dateNow:datad
          },
          {
            config: 787,
            description: "Shree Ganeshay Namah",
            dateNow:datad
          }
    ];
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
    setSearchTerm(event.target.value);
  };
const datafordata=folder.projecttree
 React.useEffect(() => {
    const results = datafordata.filter(person =>
      person['projectname'].toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
    return (
        <>
        <div style={{paddingTop:100,paddingLeft:'34%'}}>
    <div className="row">
    <div className="input-field col s6">
      <input  id="first_name2" type="text" className="validate" placeholder="Search"  value={searchTerm}
        onChange={handleChange} />
    </div>
  </div> 
        </div>
        { 
        searchResults.map((figure, key) => {
          return <Folders key={key} {...figure}/>
        })
      }
        </>
    )
}
