import create from "zustand"

const useDBCustomer = create((set)=>({
  // quoteInfo: {testData: 100},
  // setQuoteInfo: (newValue) => set((oldState)=> ( {quoteInfo: {testData: oldState.quoteInfo.testData + 100} } ) )
  customers: [],
  initCustomers: (newCustArr) => set( ([...newCustArr]) )

}))

export default useDBCustomer
