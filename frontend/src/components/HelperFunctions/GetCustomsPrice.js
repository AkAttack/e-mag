import CheckIfNumber from "./CheckIfNumber"

export default function GetCustomsPrice (iPrice, searchWord, quoteInfo) {
  let price=0, customs=0, USDRates=0
  try {
    customs = +(quoteInfo.customsInfo[searchWord].total)
  } catch (error) {
    console.log("Customs Name Doesnt Exists")
  }  
  try {
    USDRates = +(quoteInfo.adminInfo.USDRates)
  } catch (error) {
    console.log("USD Exchange Rate doesnt exists")
  }
  if(CheckIfNumber(customs)){
    price = customs * iPrice
  }else{
    console.log("Error: customs is empty or NaN ", customs)
    return 0
  }
  if(CheckIfNumber(USDRates)){
    price = price * USDRates
    return price    // IN GYD
  }else{
    console.log("Error: USDRates is empty or NaN ", USDRates)
    return 0
  }

}