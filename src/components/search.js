import React from 'react'
import Folders from './folders'

export default function Search() {
  const datad=String(new Date());
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
 React.useEffect(() => {
    const results = list1.filter(person =>
      person['description'].toLowerCase().includes(searchTerm)
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
