import create from "zustand"
import {QUOTE_INFO} from "../GlobalVars"

const useQuoteInfoStore = create((set)=>({
  quoteInfo: QUOTE_INFO,
  setQuoteInfo: (newQuote)=> set( ({quoteInfo: newQuote}) ),
  setQuoteInfoCustomer:(newCustomer)=> set( (oldState)=> 
    ( {quoteInfo: {...oldState.quoteInfo, customer: newCustomer}} ) 
  ),
  setQuoteInfoCart:(newCart)=> set( (oldState)=> 
    ( {quoteInfo: {...oldState.quoteInfo, cart: newCart}} ) 
  ), //TODO - figureout how to update nested object-> arrays
  setQuoteInfoTarget:(newTarget)=> set( (oldState)=> 
    ( {quoteInfo: {...oldState.quoteInfo, target: newTarget}} ) 
  ),
  setQuoteInfoQuoteID:(newQuoteID)=> set( (oldState)=> 
    ( {quoteInfo: {...oldState.quoteInfo, quoteID: newQuoteID}} ) 
  ),
  setQuoteInfoAdminInfo:(newAdminInfo)=> set( (oldState)=> 
    ( {quoteInfo: {...oldState.quoteInfo, adminInfo: newAdminInfo}} ) 
  ),
  setQuoteInfoCustomsInfo:(customsInfo)=> set( (oldState)=> 
    ( {quoteInfo: {...oldState.quoteInfo, customsInfo: customsInfo}} ) 
  )


}))


export default useQuoteInfoStore

