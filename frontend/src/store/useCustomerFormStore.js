import create from "zustand"

const useCustomerFormStore = create((set)=>({
  searchCustomerDBWord: "",
  setSearchCustomerDBWord: (newWord) => set(({searchCustomerDBWord: newWord.toLocaleLowerCase() })),

  customerSelectSearch: true,
  setCustomerSelectSearch: (newType) => set( (oldState)=> ({customerSelectSearch: !oldState.customerSelectSearch}))

}))

export default useCustomerFormStore
