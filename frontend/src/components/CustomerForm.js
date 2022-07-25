import { useState } from "react";


const CustomerForm = ({values, handleValue, nextStep, setNextStep}) => {


  return (
    <div className="OIF" >
      <div className="title">
        Item   
      </div>

      
      <div className="content">
        <div className="form-item">
          <div className="item-details">
            <div className="input-box">
              <input type="text" 
                name="nameFirst" 
                value={values.nameFirst} 
                placeholder="First Name"
                required 
                onChange={(e) => handleValue(e)} />
            </div>
            <div className="input-box">
              <input type="text" 
                name="nameLast" 
                placeholder="Last Name" 
                required 
                value={values.nameLast}
                onChange={(e) => handleValue(e)}/>
            </div>
            <div className="input-box">
              <input type="text" 
                name="email" 
                placeholder="Email"
                value={values.email}
                onChange={(e) => handleValue(e)} />
            </div>
            <div className="input-box">
              <input type="text" 
                name="address" 
                placeholder="Address"
                value={values.address}
                onChange={(e) => handleValue(e)} />
            </div>
            <div className="input-box">
              <input type="number" 
                name="mobile" 
                placeholder="Mobile Number" 
                value={values.mobile}
                onChange={(e) => handleValue(e)} />
            </div>
          </div>
            <div className="button">
              <button type="button" onClick={setNextStep}>Next Step</button>
            </div>
          </div>
        </div>
      
    </div> 
   );
  
}
 
export default CustomerForm;