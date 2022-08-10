import {create} from "zustand"

const useQuoteInfoStore = create((set)=>({
  quoteInfo: {baseState: 0, state1: {statwa: 0}, state2: {statea: {stateb:0}}
  },
  setQuoteInfo: (newValue) => set((oldState) => ({
    ...oldState, newValue1
      }
    )
  )
}))

