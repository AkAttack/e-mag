import {create} from "zustand"

const useCustomerFormStore = create((set)=>({
  inputTypeSearch: true,
  setInputTypeSearch:() => set((oldState) => (!oldState.inputTypeSearch)) ,
  searchValue: "",
  setSearchValue: (newValue) => set((oldValue) => (newValue) )
}))

