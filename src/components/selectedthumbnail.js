import React from 'react'
import { MDBContainer, MDBRow, MDBCol,Button } from "mdbreact";

export default function Selectedthumbnail() {
    return (
      <>
      <div style={{paddingTop:10,marginLeft:'90%'}}>
<Button>Sand eMail</Button>
      </div>
      <div style={{ margin: '5%' }}>
        <div style={{ display: 'flex' }}>
          <MDBRow>
            <MDBCol>
              <input type="checkbox" id="myCheckbox1" />
              <label htmlFor="myCheckbox1"><img src="http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png" /></label>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <input type="checkbox" id="myCheckbox2" />
              <label htmlFor="myCheckbox2"><img src="http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png" /></label>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <input type="checkbox" id="myCheckbox3" />
              <label htmlFor="myCheckbox3"><img src="http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png" /></label>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <input type="checkbox" id="myCheckbox4" />
              <label htmlFor="myCheckbox4"><img src="http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png" /></label>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
      </>
    )
}
