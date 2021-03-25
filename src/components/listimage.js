import React from 'react'
import { MDBRow, MDBCol } from "mdbreact";

export default function Listimage() {
  const list1=[
    {
        config: 112,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      },
      {
        config: 78,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      },
      {
        config: 11,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      },
      {
        config: 788,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      },
      {
        config: 789,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      },
      {
        config: 790,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      },
      {
        config: 778,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      },
      {
        config: 775,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      },
      {
        config: 7,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      },
      {
        config: 797,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      },
      {
        config: 785,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      },
      {
        config: 723,
        description: "http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
      }
];
const listItems = list1.map((number) =>
<div>
<MDBRow>
<MDBCol>
  <input type="checkbox" id={number.config} />
  <label htmlFor={number.config}><img src={number.description} alt="img"/></label>
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
