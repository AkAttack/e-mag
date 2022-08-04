//assisted functions
const getCustomsPrice = (iPrice, searchWord, quoteInfo) => {
  let price=0, customs=0, usdExchange=0
  try {
    customs = +(quoteInfo.customsInfo[searchWord].total)
  } catch (error) {
    console.log("Customs Name Doesnt Exists")
  }  
  try {
    usdExchange = +(quoteInfo.adminInfo.usdExchange)
  } catch (error) {
    console.log("USD Exchange Rate doesnt exists")
  }
  if(checkIfNum(customs)){
    price = customs * iPrice
  }else{
    console.log("Error: customs is empty or NaN ", customs)
    return 0
  }
  if(checkIfNum(usdExchange)){
    price = price * usdExchange
    return price    // IN GYD
  }else{
    console.log("Error: UsdExchange is empty or NaN ", usdExchange)
    return 0
  }

}
const getWeightPrice = (newWeight, quoteInfo) => {
  let price = 0, key="51"
  try {
    if(newWeight < 51){
      price = +(quoteInfo.weightInfo[newWeight].price)
      return price
    }else {
      const multiplier = +(quoteInfo.weightInfo[key].multiplier) 
      price = newWeight * multiplier
      return price
    }
  } catch (error) {
    console.log("Weight price undefined or NaN ")
    return 0
  }
}
const checkIfNum = (num) => {
  if(typeof num === "number" && !Number.isNaN(num)){
    return true
  }else{ return false}
}


// quoteInfo.cart[i].targets Updates: usTax, weightPrice, itemCustoms
const updateCartUsTax = (quoteInfo, setQuoteInfo) => {
  
  let newQuote = {...quoteInfo}, newCart = [...quoteInfo.cart], newItemTotalUSTax=0, newItemTotalPrice=0, newItemTotalPriceGYD=0, newItemTotalUSShipping=0
  newCart.forEach((item, i) => {
    if(item.active){
      const iPrice = +(item.target.itemPrice) 
      const shipping = +(item.target.itemUSShipping)
      const quantity = +(item.target.purchaseQuantity)
      const exchange = +(newQuote.adminInfo.usdExchange)
      const multiplier = +(newQuote.adminInfo.usTaxPercent)
      if(!checkIfNum(iPrice)){
        console.log("itemPrice is NaN- CartIndex, itemPrice ", i, iPrice)
        return
      }
      if(!checkIfNum(shipping)){
        console.log("itemUSShippingis NaN- CartIndex, itemUSShipping ", i, shipping)
        return
      }
      if(!checkIfNum(multiplier)){
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
      if(!checkIfNum(newWeight)){
        console.log("itemWeight is NaN- newweight, itemPrice ", i, newWeight)
        return
      }
      const weightPrice = getWeightPrice(newWeight, quoteInfo) // is in GYD
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
      if(!checkIfNum(iPrice)){
        console.log("itemPrice is NaN- CartIndex, itemPrice ", i, iPrice)
        return
      }
      if(!checkIfNum(iShipping)){
        console.log("itemUSShipping is NaN- CartIndex, itemUSShipping ", i, iShipping)
        return
      }
      const totalPrice = iPrice + iShipping
      if(checkIfNum(totalPrice)){
        const customs = getCustomsPrice(totalPrice, search, newQuote) // returns in GYD
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

// quoteInfo.target Updates: BusinessCharge, grandTotal, itemTotalCustoms, itemTotalPrice, itemTotalUSShipping, itemTotalUSTax, itemTotalWeight, itemTotalWeightPrice
const updateTotalCustoms_GrandTotal = (quoteInfo, setQuoteInfo) => {
  let newQuote={...quoteInfo}, newGrandTotal=0, newBusinessCharge=0, multiplier=0
  const itemTotalPriceGYD = +(newQuote.target.itemTotalPriceGYD)
  const itemTotalCustoms = +(newQuote.target.itemTotalCustoms)
  const itemTotalWeightPrice = +(newQuote.target.itemTotalWeightPrice)
  const perBCharge = +(newQuote.adminInfo.perBChargeAmount)
  const BCharge = +(newQuote.adminInfo.businessCharge)
  const subTotal = itemTotalPriceGYD + itemTotalWeightPrice + itemTotalCustoms
  multiplier = Math.ceil(subTotal / perBCharge)
  newBusinessCharge = multiplier * BCharge
  newGrandTotal = newBusinessCharge + subTotal

  newQuote.target.businessCharge = newBusinessCharge
  newQuote.target.grandTotal = newGrandTotal
  setQuoteInfo(newQuote)  
}



export {updateCart, updateTotalCustoms_GrandTotal} 