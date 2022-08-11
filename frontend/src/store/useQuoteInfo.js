import create from "zustand"
import {QUOTE_INFO} from "../GlobalVars"

const useQuoteInfoStore = create((set)=>({
  quoteInfo: QUOTE_INFO,
  activeCartItems: 1,
  
  setActiveCartItems: (action)=> set((oldState)=>{
    if(action === "add"){
      return {activeCartItems: oldState.activeCartItems + 1}
    } else if(action === "remove"){
      return {activeCartItems: oldState.activeCartItems - 1}
    }
  }),
  setQuoteInfo: (newQuote)=> set( ({quoteInfo: newQuote}) ),
  setQuoteInfoCustomer: (newCustomer)=> set( (oldState)=> 
    ( {quoteInfo: {...oldState.quoteInfo, customer: newCustomer}} ) 
  ),
  setQuoteInfoCartItemExpand: (i)=> set( (oldState)=> { 
    const newCart = oldState.quoteInfo.cart
    newCart[i] = {...newCart[i], expandShow: !newCart[i].expandShow}
   return  {quoteInfo: {...oldState.quoteInfo, cart: newCart}} 
  } ),

  setQuoteInfoCartItem:(newCartItem, i)=> set( (oldState)=> { 
    const newCart = oldState.quoteInfo.cart
    newCart[i] = {...newCart[i], ...newCartItem}
   return  {quoteInfo: {...oldState.quoteInfo, cart: newCart}} 
  } ), 

  setQuoteInfoCartItemActive:(i)=> set( (oldState)=> { 
    const newCart = oldState.quoteInfo.cart
    newCart[i] = {...newCart[i], active: !newCart[i].active}
   return  {quoteInfo: {...oldState.quoteInfo, cart: newCart}} 
  } ), 

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

    //TODO - figureout how to update nested object-> arrays

}))


export default useQuoteInfoStore

