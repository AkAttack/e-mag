import create from "zustand"

const useCustomerFormStore = create((set)=>({
  showCustomerForm: true,
  setShowCustomerForm:()=> set( (oldState) => 
      ({showCustomerForm: !oldState.showCustomerForm}) 
    )
  

}))

export default useCustomerFormStore