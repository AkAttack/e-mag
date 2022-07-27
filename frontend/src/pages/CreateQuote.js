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

  const findWeightPrice = (weight) => {
    console.log("findWeightPrice Fired")
    let price = 0
    if(weight < 51){
      price = quoteInfo.weightInfo[weight].price
    }else{
      price = quoteInfo.weightInfo["51"]
    }
    return price
  }
  const getCustomsPrice = (iPrice, searchWord) => {
    console.log("getCustomsPrice Fired")
    let price = 0
    const multiplier = quoteInfo.customsInfo[searchWord]
    price = iPrice * multiplier
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
  
  useEffect(() => {
    //update items usTax, itemTotalPrice, 
    const newQuote = {...quoteInfo}
    const newCart = [...quoteInfo.cart]
    let newItemTotalUSTax = 0
    newCart.forEach((item,i)=>{
      item.target.usTax = (item.target.itemPrice * newQuote.adminInfo.usTaxPercent)
    })
    for(let i of newCart){
      
      newItemTotalUSTax += (i.target.itemPrice * newQuote.adminInfo.usTaxPercent)
    }
    newQuote.cart = newCart
    newQuote.target = {...newQuote.target, itemTotalUSTax: newItemTotalUSTax}
    setQuoteInfo(newQuote)

  }, [...quoteInfo.cart.map((item,i)=>{return(item.target.itemPrice)})])

  useEffect(() => {
    // update itemCustoms and itemTotalCustoms
    let newItemTotalCustoms, newCart
    let newQuote = {...quoteInfo}
    newCart = [...quoteInfo.cart]
    newCart.forEach((item,i) =>{
      item.target.itemCustoms = getCustomsPrice(item.target.itemPrice, item.target.itemCategory)
    })
    for(let i of quoteInfo.cart){
      newItemTotalCustoms += i.itemCustoms
    }
    newQuote.target = {...newCart.target, itemTotalCustoms: newItemTotalCustoms}
    newQuote.cart = newCart
    setQuoteInfo(newQuote)
  }, [...quoteInfo.cart.map((item,i)=>{return(item.target.itemCategory)}), ...quoteInfo.cart.map((item,i)=>{return(item.target.itemWeight)})])



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

      <QuoteTemplate quoteInfo={quoteInfo} />
    </div>
   );

}
 
export default CreateQuote;