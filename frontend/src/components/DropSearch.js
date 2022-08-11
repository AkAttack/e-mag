import useCustomerFormStore from "../store/useCustomerFormStore";
import useCreateQuotePageStore from "../store/useCreateQuotePageStore"
import useDBCustomer from "../store/useDBCustomer";
import useQuoteInfoStore from "../store/useQuoteInfo";

const DropSearch = () => {
  let dbCustomer = useDBCustomer(state => state.customers),
  searchWord = useCustomerFormStore(state=> state.searchCustomerDBWord), 
  setShowCustomerForm = useCreateQuotePageStore(state=> state.setShowCustomerForm),
  setQuoteInfoCustomer = useQuoteInfoStore(state=> state.setQuoteInfoCustomer)

  function handleSelectedCustomer(customer){
    setQuoteInfoCustomer(customer)
    setShowCustomerForm()
  }

  return (
    <div className="dropdown">
      {searchWord && dbCustomer
        .filter((item) => {
          const searchTerm = searchWord.toLowerCase();
          const dbnamefirst = item.namefirst.toLowerCase();
          const dbnamelast = item.namelast.toLowerCase();
          const dbphone = item.phone
          if(dbphone.startsWith(searchTerm) || dbnamefirst.startsWith(searchTerm) || dbnamelast.startsWith(searchTerm) ){
            return true
          };

        })
        .slice(0,9)
        .map((item) => (
          <div onClick={() => handleSelectedCustomer(item)}
            customer={item}
            value={item.namefirst}
            className="dropdown-row"
            key={item.namefirst} >
            <p className="name" value={item.namefirst}>{item.namefirst}  {item.namelast}</p>
            <p className="phone">{item.phone} | {item.address}</p>
          </div>
      ))}
    </div>
  );
}

export default DropSearch;