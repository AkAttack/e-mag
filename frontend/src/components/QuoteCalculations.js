//assisted functions
import CheckIfNumber from "./HelperFunctions/CheckIfNumber"
import GetWeightPrice from "./HelperFunctions/GetWeightPrice"
import GetCustomsPrice from "./HelperFunctions/GetCustomsPrice"




// quoteInfo.cart[i].targets Updates: usTax, weightPrice, itemCustoms
const updateCartUsTax = (quoteInfo, setQuoteInfo) => {
  
  let newQuote = {...quoteInfo}, newCart = [...quoteInfo.cart], newItemTotalUSTax=0, newItemTotalPrice=0, newItemTotalPriceGYD=0, newItemTotalUSShipping=0
  newCart.forEach((item, i) => {
    if(item.active){
      const iPrice = +(item.target.itemPrice) 
      const shipping = +(item.target.itemUSShipping)
      const quantity = +(item.target.purchaseQuantity)
      const exchange = +(newQuote.adminInfo.USDRates)
      const multiplier = +(newQuote.adminInfo.usTaxPercent)
      if(!CheckIfNumber(iPrice)){
        console.log("itemPrice is NaN- CartIndex, itemPrice ", i, iPrice)
        return
      }
      if(!CheckIfNumber(shipping)){
        console.log("itemUSShippingis NaN- CartIndex, itemUSShipping ", i, shipping)
        return
      }
      if(!CheckIfNumber(multiplier)){
        console.log("quoteInfo.adminInfo.usTaxPercent is NaN- CartIndex, usTaxPercent ", i, multiplier)
        return
      }
      const usTax = (iPrice + shipping) * multiplier
      item.target.usTax = usTax
      newItemTotalUSTax += usTax
      newItemTotalPrice += usTax + shipping + iPrice
      newItemTotalPriceGYD = +(newItemTotalPrice * exchange)
      newItemTotalUSShipping += shipping
      
      // const tempnewItemTotalUSTax = usTax
      // const tempnewItemTotalPrice = usTax + shipping + iPrice
      // const tempnewItemTotalPriceGYD = +(newItemTotalPrice * exchange)
      // const tempnewItemTotalUSShipping = shipping

      // newItemTotalUSTax += tempnewItemTotalUSTax * quantity
      // newItemTotalPrice += tempnewItemTotalPrice * quantity
      // newItemTotalPriceGYD += tempnewItemTotalPriceGYD * quantity
      // newItemTotalUSShipping += tempnewItemTotalUSShipping * quantity
    }
  })
  newQuote.target.itemTotalUSTax = newItemTotalUSTax
  newQuote.target.itemTotalPrice = newItemTotalPrice
  newQuote.target.itemTotalPriceGYD = newItemTotalPriceGYD
  newQuote.target.itemTotalUSShipping = newItemTotalUSShipping
  newQuote.cart = newCart
  setQuoteInfo(newQuote)
}
const updateCartWeightPrice = (quoteInfo, setQuoteInfo) => {
  let newQuote = {...quoteInfo}, newCart = [...quoteInfo.cart], newItemTotalWeightPrice=0, newItemTotalWeight=0
  newCart.forEach((item, i) => {
    if(item.active){
      const newWeight = +(item.target.itemWeight)
      if(!CheckIfNumber(newWeight)){
        console.log("itemWeight is NaN- newweight, itemPrice ", i, newWeight)
        return
      }
      const weightPrice = GetWeightPrice(newWeight, quoteInfo) // is in GYD
      item.target.weightPrice = weightPrice
      newItemTotalWeightPrice += weightPrice
      newItemTotalWeight += newWeight
      
    }
  })
  newQuote.target.itemTotalWeightPrice = newItemTotalWeightPrice
  newQuote.target.itemTotalWeight = newItemTotalWeight
  newQuote.cart = newCart
  setQuoteInfo(newQuote)
}
const updateCartCustoms = (quoteInfo, setQuoteInfo) => {
  let newQuote = {...quoteInfo}, newCart = [...quoteInfo.cart], newItemTotalCustoms=0
  newCart.forEach((item, i) => {
    if(item.active){
      const search = item.target.itemCategory
      let iPrice = +(item.target.itemPrice), iShipping = +(item.target.itemUSShipping)
      if(!CheckIfNumber(iPrice)){
        console.log("itemPrice is NaN- CartIndex, itemPrice ", i, iPrice)
        return
      }
      if(!CheckIfNumber(iShipping)){
        console.log("itemUSShipping is NaN- CartIndex, itemUSShipping ", i, iShipping)
        return
      }
      const totalPrice = iPrice + iShipping
      if(CheckIfNumber(totalPrice)){
        const customs = GetCustomsPrice(totalPrice, search, newQuote) // returns in GYD
        item.target.itemCustoms = customs
        newItemTotalCustoms += customs
      }
    }
  })
  const newDate = new Date()
  const newVar = newDate.getFullYear()+"/"+newDate.getMonth()+"/"+newDate.getDay()+"/"+newDate.getHours()+"/"+newDate.getMinutes()+"/"+newDate.getMilliseconds()
  newQuote.target.itemTotalCustoms = newItemTotalCustoms
  newQuote.updateSteps.step1 = newVar
  newQuote.cart = newCart
  setQuoteInfo(newQuote)
}
//Update All Cart details
const updateCart = (quoteInfo, setQuoteInfo, setQuoteTarget) => {
  updateCartUsTax(quoteInfo, setQuoteInfo);
  updateCartWeightPrice(quoteInfo, setQuoteInfo);
  updateCartCustoms(quoteInfo, setQuoteInfo);
}

// quoteInfo.target Updates: BusinessCharges, grandTotal, itemTotalCustoms, itemTotalPrice, itemTotalUSShipping, itemTotalUSTax, itemTotalWeight, itemTotalWeightPrice
const updateTotalCustoms_GrandTotal = (quoteInfo, setQuoteInfo) => {
  let newQuote={...quoteInfo}, newGrandTotal=0, newBusinessCharges=0, multiplier=0
  const itemTotalPriceGYD = +(newQuote.target.itemTotalPriceGYD)
  const itemTotalCustoms = +(newQuote.target.itemTotalCustoms)
  const itemTotalWeightPrice = +(newQuote.target.itemTotalWeightPrice)
  const perBCharge = +(newQuote.adminInfo.thresholdBAmount)
  const BCharge = +(newQuote.adminInfo.businessCharges)
  const subTotal = itemTotalPriceGYD + itemTotalWeightPrice + itemTotalCustoms
  multiplier = Math.ceil(subTotal / perBCharge)
  newBusinessCharges = multiplier * BCharge
  newGrandTotal = newBusinessCharges + subTotal

  newQuote.target.businessCharges = newBusinessCharges
  newQuote.target.grandTotal = newGrandTotal
  setQuoteInfo(newQuote)  
}



export {updateCart, updateTotalCustoms_GrandTotal} 