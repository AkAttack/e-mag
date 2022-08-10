export default function getWeightPrice (newWeight, quoteInfo) {

  let price = 0, 
  weightInfo = {...quoteInfo.weightInfo},
  weightLength = Object.keys(quoteInfo.weightInfo).length
  
  if(newWeight < weightLength){
    [...Array(weightLength)].forEach((item,i)=>{
      if(newWeight > weightInfo[i].min && newWeight <= weightInfo[i].max){
        price = weightInfo[i].price
      }
    })
    return price
  }else if(newWeight >= weightLength){
    [...Array(weightLength)].forEach((item,i)=>{
      if(newWeight > weightInfo[i].min && newWeight <= weightInfo[i].max){
        const priceUsd = +(newWeight * weightInfo[i].multiplier)
        price = +(quoteInfo.adminInfo.USDRates) * priceUsd
      }else if(newWeight > 9999){
        console.log("Weight Too Much, should not exceed 9999lb")
      }
    })
    return price
  }
}
