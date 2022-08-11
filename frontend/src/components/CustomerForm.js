import useCustomerFormStore from "../store/useCustomerFormStore";
import useCreateQuotePageStore from "../store/useCreateQuotePageStore"
import useQuoteInfoStore from "../store/useQuoteInfo";
import DropSearch from "./DropSearch";


const CustomerForm = () => {
  // const [customerInputType, setCustomerInputType] = useState("db"); //"db" || "manual"
  let searchWord = useCustomerFormStore(state=> state.searchCustomerDBWord), 
  setSearchWord = useCustomerFormStore(state=> state.setSearchCustomerDBWord),
  customerSelectSearch = useCustomerFormStore(state=> state.customerSelectSearch),
  setCustomerSelectSearch = useCustomerFormStore(state=> state.setCustomerSelectSearch),
  setShowCustomerForm = useCreateQuotePageStore(state => state.setShowCustomerForm),
  quoteInfoCustomer = useQuoteInfoStore(state=> state.quoteInfo.customer),
  setQuoteInfoCustomer = useQuoteInfoStore(state=> state.setQuoteInfoCustomer)

  function handleInputs(e){
    const value = e.target.value
    const name = e.target.name
    const newQuoteCustomer = {...quoteInfoCustomer, [name]: value }
    setQuoteInfoCustomer(newQuoteCustomer)
  }

  function setNextStep(){
    setShowCustomerForm()
  }

  return (
    <div className="OIF">
      <div
        className="title"
        onClick={() => {
          setCustomerSelectSearch();
        }}
      >
        {customerSelectSearch? "- Customer Search" : "+ Customer Search"}
      </div>

      {customerSelectSearch&& (
        <div className="content">
          <div className="form-item">
            <div className="item-details">
              <div className="input-box">
                <input
                  type="text"
                  name="nameSearch"
                  value={searchWord}
                  placeholder="Search By Name"
                  required
                  onChange={(e) => setSearchWord(e.target.value)}
                />

                <DropSearch />

              </div>
            </div>
          </div>
        </div>
      )}

      <div className="customer-form-seprator"></div>

      <div
        className="title"
        onClick={() => {
          setCustomerSelectSearch();
        }}
      >
        {!customerSelectSearch? "- Customer Form" : "+ Customer Form"}
      </div>
      {!customerSelectSearch&& (
        <div className="content">
          <div className="form-item">
            <div className="item-details">
              <div className="input-box">
                <input
                  type="text"
                  name="namefirst"
                  value={quoteInfoCustomer.namefirst}
                  placeholder="First Name"
                  required
                  onChange={(e) => handleInputs(e)}
                />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  name="namelast"
                  placeholder="Last Name"
                  required
                  value={quoteInfoCustomer.namelast}
                  onChange={(e) => handleInputs(e)}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={quoteInfoCustomer.email}
                  onChange={(e) => handleInputs(e)}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={quoteInfoCustomer.address}
                  onChange={(e) => handleInputs(e)}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="phone"
                  placeholder="Mobile Number"
                  value={quoteInfoCustomer.phone}
                  onChange={(e) => handleInputs(e)}
                />
              </div>
            </div>
            <div className="button">
              <button type="button" onClick={() => setNextStep()}>
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
