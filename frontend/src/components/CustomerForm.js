
import { useState } from "react";
import DropSearch from "./DropSearch";

const CustomerForm = ({ values, handleValue, setNextStep, dbCustomer }) => {
  // const [customerInputType, setCustomerInputType] = useState("db"); //"db" || "manual"
  // const [searchValue, setSearchValues] = useState("");



  const dropSearchOnChange = (e) => {
    const newValue = e.target.value
    customerFormStore.setSearchValue(newValue);
  };

  const dropSearchSelectToNextStep = (item) => {
    handleValue(item, "full");
    setNextStep("next");
  };

  return (
    <div className="OIF">
      <div
        className="title"
        onClick={() => {
          setCustomerInputType(!customerInputType);
        }}
      >
        {customerInputType ? "- Customer Search" : "+ Customer Search"}
      </div>

      {customerInputType && (
        <div className="content">
          <div className="form-item">
            <div className="item-details">
              <div className="input-box">
                <input
                  type="text"
                  name="nameSearch"
                  value={searchValue}
                  placeholder="Search By Name"
                  required
                  onChange={(e) => dropSearchOnChange(e)}
                />

                <DropSearch
                  searchWord={searchValue}
                  selectToNextStep={dropSearchSelectToNextStep}
                  dbCustomer={dbCustomer}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="customer-form-seprator"></div>

      <div
        className="title"
        onClick={() => {
          setCustomerInputType(!customerInputType);
        }}
      >
        {!customerInputType ? "- Customer Form" : "+ Customer Form"}
      </div>
      {!customerInputType && (
        <div className="content">
          <div className="form-item">
            <div className="item-details">
              <div className="input-box">
                <input
                  type="text"
                  name="namefirst"
                  value={values.namefirst}
                  placeholder="First Name"
                  required
                  onChange={(e) => handleValue(e)}
                />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  name="namelast"
                  placeholder="Last Name"
                  required
                  value={values.namelast}
                  onChange={(e) => handleValue(e)}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={(e) => handleValue(e)}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={values.address}
                  onChange={(e) => handleValue(e)}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="phone"
                  placeholder="Mobile Number"
                  value={values.phone}
                  onChange={(e) => handleValue(e)}
                />
              </div>
            </div>
            <div className="button">
              <button type="button" onClick={() => setNextStep("next")}>
                Next Step
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerForm;
