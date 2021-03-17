import React,{useState} from 'react'
import Folders from './folders'

export default function Search() {
    const list1=[
        {
            config: 112,
            description: "description text 1"
          },
          {
            config: 787,
            description: "description text 2"
          },
          {
            config: 112,
            description: "description text 1"
          },
          {
            config: 787,
            description: "description text 2"
          }
    ];
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 React.useEffect(() => {
    const results = list1.filter(person =>
      person['description'].toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
    return (
        <>
        <div style={{paddingTop:100,paddingLeft:'34%'}}>
    <div class="row">
    <div class="input-field col s6">
      <input  id="first_name2" type="text" class="validate" placeholder="Search"  value={searchTerm}
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
