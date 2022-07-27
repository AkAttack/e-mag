import { useEffect, useState} from "react"
import CustomerForm from "../components/CustomerForm";
import OrderItemForm from "../components/OrderItemForm";
import QuoteTemplate from "../components/QuoteTemplate";
import QUOTE_INFO from "../GlobalVars";
// import {v4 as uuid} from "uuid";

const CreateQuote = () => {
  const MAX_CART_AMOUNT = 10
  const MIN_CART_AMOUNT = 1

  const [quoteInfo, setQuoteInfo] = useState(QUOTE_INFO)
  const [activeItems, setActiveItems] = useState(MIN_CART_AMOUNT)
  const [pageVars, setPageVars] = useState({quoteStep: "step 1"})
  const [dbQuote, setDbQuote] = useState({quoteId: ""})
  const [error, setError] = useState(null)

  const fetchErrorCheck = (res) => {
    if(res.status >= 200 && res.status <= 299){
      return res.json()
    }else{throw Error(res.statusText)}
  }
  
  const removeItem = () =>{
    if(activeItems >= 2) {
      const id = activeItems - 1
      const newCart = [...quoteInfo.cart]
        newCart[id].active = false
        newCart[id].expandShow = true
        if(id >= 1){newCart[id - 1].expandShow = true}
      if(id < MAX_CART_AMOUNT && id >= MIN_CART_AMOUNT){
        const newQuote = {...quoteInfo}
        newQuote.cart = newCart
        setQuoteInfo(newQuote)
      }
      const newNum = activeItems - 1
      if(newNum >= MIN_CART_AMOUNT && newNum <= MAX_CART_AMOUNT){ 
        setActiveItems(newNum) }    
    }
  }

  const addItem = () => {
    const id = activeItems 
    if(id < MAX_CART_AMOUNT && id >= MIN_CART_AMOUNT){
      const newCart = [...quoteInfo.cart]
      newCart[id].active = true
      newCart[id].expandShow = true
      const newQuote = {...quoteInfo}
      newQuote.cart = newCart
      setQuoteInfo(newQuote)
    }
    const newNum = activeItems + 1
    if(newNum >= MIN_CART_AMOUNT && newNum <= MAX_CART_AMOUNT){ 
      setActiveItems(newNum) }    
  }

  const toggleExpand = (id) => {
    const newCart = [...quoteInfo.cart]
    newCart[id].expandShow = !quoteInfo.cart[id].expandShow
    const newQuote = {...quoteInfo}
    newQuote.cart = newCart
    setQuoteInfo(newQuote)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const urlOrderItems = "http://localhost:3001/api/orderitems"
    const urlQuote = "http://localhost:3001/api/orderitems"
    quoteInfo.cart.forEach(item => {
      if(item.active){
        const options = {method: "POST", headers: {"Content-type": "application/json"}, 
        body: JSON.stringify(item.values)}
        fetch(urlOrderItems, options)
          .then(fetchErrorCheck)
          .then(json => {
            setQuoteInfo(pq => {
              const newQuote = {...pq}
              newQuote.cart = [...pq.cart, json]
              return newQuote
            })
          })    
          .catch(err => {setError(err)})
      }
    })
    // update cart
  }

  const customerHandleValue = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuoteInfo(preState => {
      const newQuote = {...preState}
      const newCustomer = {...preState.customer, [name]: value}
      newQuote.customer = newCustomer
      return newQuote
    })
  }
  const customerSetNextStep = () => {
    setPageVars(prevState => {
      const newState = {...prevState}
      newState.quoteStep = "step 2"
      return newState
    })
  }

  const getCustomsPrice = (iPrice, searchWord) => {
    let price, vat
    vat = quoteInfo.customsInfo[searchWord]
    price = vat * iPrice
    return price
  }

  const orderItemHandleValue = (e, id) => {
    const name = e.target.name
    const value = e.target.value
    setQuoteInfo(preState => {
      const newQuote = {...preState}
      const newTarget = {...preState.cart[id].target, [name]: value}
      newQuote.cart[id].target = newTarget
      return newQuote
    })
  }

  const getWeightPrice = (newWeight) => {
    let price = 0, key="51"
    try {
      if(newWeight < 51){
        price = quoteInfo.weightInfo[newWeight].price
      }else{
        price = quoteInfo.weightInfo[key].multiplier * newWeight
      }
    } catch (error) {
      console.log("weightInfo not there, key: ", newWeight)
      price= 0
    }
    if(typeof price === "number" && !Number.isNaN(price)){
      return price
    }else{return 0}
  }
  
  useEffect(() => {
    // update itemCustoms // itemTotalCustoms // usTax // itemTotalPrice
    let newItemTotalCustoms = 0, newCart, searchWord="",
    newusTax=0, newItemTotalWeightPrice=0, newItemTotalWeight=0, newItemTotalUSTax=0, newItemTotalPrice=0
    let newQuote = {...quoteInfo}
    newCart = [...quoteInfo.cart]
    newCart.forEach((item,i) =>{    //forEach LOOP
      let iPrice= Number(item.target.itemPrice)
      searchWord = item.target.itemCategory

      if(item.active){
        let tempCustoms = getCustomsPrice(iPrice, searchWord)
        //itemTotalCustoms update
        tempCustoms = tempCustoms/ newQuote.adminInfo.usdExchange
        tempCustoms = parseInt(tempCustoms)
        if(typeof tempCustoms === "number" &&  !Number.isNaN(tempCustoms)){
          item.target.itemCustoms = tempCustoms
          newItemTotalCustoms += tempCustoms
        }
        //item usTax update && itemTotalUSTax
        newusTax = (item.target.itemPrice * newQuote.adminInfo.usTaxPercent)
        if(typeof newusTax === "number" && !Number.isNaN(newusTax)){
          item.target.usTax = newusTax
          newItemTotalUSTax += newusTax
        }
        //itemTotalWeight update
        if(typeof item.target.itemWeight === "number" && !Number.isNaN(item.target.itemWeight)){
          newItemTotalWeight += item.target.itemWeight
        }
        //itemTotalWeightPrice update
        newItemTotalWeightPrice += getWeightPrice(item.target.itemWeight)
        // itemTotalPrice
        if(typeof iPrice === "number" && !Number.isNaN(iPrice)){
          newItemTotalPrice += iPrice
        }
      }
    })
    
    newQuote.target = {...quoteInfo.target, itemTotalPrice: newItemTotalPrice, itemTotalCustoms: newItemTotalCustoms, itemTotalUSTax: newItemTotalUSTax, itemTotalWeightPrice: newItemTotalWeightPrice, itemTotalWeight: newItemTotalWeight}
    newQuote.cart = newCart
    setQuoteInfo(newQuote)
  }, [...quoteInfo.cart.map((item,i)=>{return(item.target.itemCategory)}), ...quoteInfo.cart.map((item,i)=>{return(item.target.itemPrice)}), ...quoteInfo.cart.map((item,i)=>{return(item.target.itemWeight)})])

  useEffect(() => {
    //Quote Total // Sub Grant Total // Business Charges
    let newTarget={...quoteInfo.target}, newQuote={...quoteInfo}, newusdGrandTotal=0, newgydGrandTotal=0, newBusinessCharge=0, preChargeTotal=0, tempNum=0
    
    tempNum = parseInt(newTarget.itemTotalCustoms )
    preChargeTotal += tempNum
    tempNum = parseInt(newTarget.itemTotalPrice)
    preChargeTotal +=  tempNum 
    tempNum = parseInt(newTarget.itemTotalUSTax) 
    preChargeTotal += tempNum 
    tempNum = parseInt(newTarget.itemTotalWeightPrice)
    // convert to weight price to USD
    tempNum = tempNum / newQuote.adminInfo.usdExchange
    tempNum = parseInt(tempNum)
    preChargeTotal += tempNum 
    // All price in USD
    newBusinessCharge = preChargeTotal/ newQuote.adminInfo.perBChargeAmount
    newBusinessCharge = parseInt(newBusinessCharge)
    newBusinessCharge = newBusinessCharge* newQuote.adminInfo.businessCharge
    newusdGrandTotal = newBusinessCharge + preChargeTotal
    //converted to GYD
    newgydGrandTotal = parseInt(newusdGrandTotal) * newQuote.adminInfo.usdExchange

    newTarget = {...newTarget, businessCharge: newBusinessCharge, USDgrandTotal: newusdGrandTotal, GYDgrandTotal: newgydGrandTotal}
    newQuote.target = newTarget
    setQuoteInfo(newQuote)

  }, [quoteInfo.target.businessCharge, quoteInfo.target.itemTotalCustoms, quoteInfo.target.itemTotalPrice, quoteInfo.target.itemTotalWeightPrice, quoteInfo.target.itemTotalUSTax])



  return (   
    <div className="create-quote">
      {pageVars.quoteStep === "step 1" &&
      <div>
        <CustomerForm
        values={quoteInfo.customer}
        handleValue={customerHandleValue}
        nextStep={pageVars}
        setNextStep={customerSetNextStep}
       />
       <button onClick={() => console.log(pageVars)}>pageVars</button>
      </div>
      }
      
      {pageVars.quoteStep === "step 2" &&
        <form className="create-quote" onSubmit={handleSubmit}>
          {quoteInfo.cart.map((e,i) => {
            return (<OrderItemForm 
              key={i} 
              keyId={i}
              itemNum={e.id} 
              updatequoteInfo={removeItem}
              activeItems={activeItems}
              toggleExpand={toggleExpand}
              addItem={addItem}
              removeItem={removeItem}
              setParentValues={orderItemHandleValue}
              cartInfo={quoteInfo.cart[i]}/>)
          })  }
          <div className="action-button">
            <button type="submit" className="button-submit">Generate Quote</button>
          </div>
        </form>
      }
      <button onClick={() => console.log(QUOTE_INFO)}>quoteInfo</button>

      <QuoteTemplate quoteInfo={quoteInfo} 
      itemTotalCustoms={quoteInfo.target.itemTotalCustoms}
      itemTotalPrice={quoteInfo.target.itemTotalPrice}
      itemTotalUSTax={quoteInfo.target.itemTotalUSTax}
      itemTotalWeightPrice={quoteInfo.target.itemTotalWeightPrice}
      USDgrandTotal={quoteInfo.target.USDgrandTotal}
      GYDgrandTotal={quoteInfo.target.GYDgrandTotal}  />
    </div>
   );

}
 
export default CreateQuote;