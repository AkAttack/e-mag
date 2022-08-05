import { useState } from "react";
import DropSearch from "./DropSearch";

const CustomerForm = ({ values, handleValue, nextStep, setNextStep, dbCustomer }) => {
  const [CSearch, setCSearch] = useState(true)
  const [searchValues, setSearchValues] = useState({ nameSearch: "", mobileSearch: 0 })

  const dropSearchOnChange = (e) => {
    const value = e.target.value,
      name = e.target.name
    const newValue = { ...searchValues, [name]: value }
    setSearchValues(newValue)
  }


  const selectToNextStep = (e) =>{
    handleValue(e, "full")
    setNextStep()    
  }

  return (
    <div className="OIF" >

      <div className="title" onClick={() => { setCSearch(!CSearch) }}>
        {CSearch ? "- Customer Search" : "+ Customer Search"}
      </div>

      { CSearch && <div className="content">
        <div className="form-item">
          <div className="item-details">
            <div className="input-box">
              <input type="text"
                name="nameSearch"
                value={searchValues.nameSearch}
                placeholder="Search By Name"
                required
                onChange={(e) => dropSearchOnChange(e)} />

              <DropSearch
                searchWord={searchValues.nameSearch}
                selectToNextStep={selectToNextStep}
                dbCustomer={dbCustomer} />

            </div>
          </div>
        </div>
      </div>}

      <div className="customer-form-seprator"></div>

      <div className="title" onClick={() => { setCSearch(!CSearch) }}>
        {!CSearch ? "- Customer Form" : "+ Customer Form"}
      </div>
      { !CSearch && <div className="content">
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
                onChange={(e) => handleValue(e)} />
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
      </div>}

    </div>
  );

}

export default CustomerForm;