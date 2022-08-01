import { useEffect, useState} from "react"
import CustomerForm from "../components/CustomerForm";
import OrderItemForm from "../components/OrderItemForm";
import QuoteTemplate from "../components/QuoteTemplate";
import {QUOTE_INFO} from "../GlobalVars";
import {updateCart, updateTotalCustoms_GrandTotal}  from "./functions/QuoteCalculations";
// import {v4 as uuid} from "uuid";

const CreateQuote = () => {
  const MAX_CART_AMOUNT = 10
  const MIN_CART_AMOUNT = 1
  let QI = {...QUOTE_INFO}
  let QT = {...QUOTE_INFO.target}

  const [quoteInfo, setQuoteInfo] = useState(QI)
  const [quoteTarget, setQuoteTarget] = useState(QT)
  const [activeItems, setActiveItems] = useState(MIN_CART_AMOUNT)
  const [pageVars, setPageVars] = useState({quoteStep: "step 1"})
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

  const orderItemHandleValue = (e, id,vT) => {
    const name = e.target.name
    let value = (vT === "n") ? +(e.target.value) : e.target.value
    setQuoteInfo(preState => {
      const newQuote = {...preState}
      const newTarget = {...preState.cart[id].target, [name]: value}
      newQuote.cart[id].target = newTarget
      return newQuote
    })
  }
  
  
  //update itemTPrice && itemCustoms && itemWeightChange &&  itemWeightChange
  useEffect(() => {
    updateCart(quoteInfo, setQuoteInfo, setQuoteTarget)
  }, [...quoteInfo.cart.map((item,i)=>{return item.target})])

  //update itemTPrice && itemCustoms && itemWeightChange &&  itemWeightChange
  useEffect(() => {
    updateTotalCustoms_GrandTotal(quoteInfo, setQuoteInfo, setQuoteTarget)
  }, [quoteInfo.updateSteps.step1])



  

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
      <button onClick={() => console.log(quoteInfo)}>quoteInfo</button>
      <button onClick={() => console.log(quoteTarget)}>QUOTE_TARGET</button>

      <QuoteTemplate quoteInfo={quoteInfo} 
      itemTotalCustoms={quoteInfo.target.itemTotalCustoms}
      itemTotalPrice={quoteInfo.target.itemTotalPrice}
      itemTotalPriceGYD={quoteInfo.target.itemTotalPriceGYD}
      itemTotalUSTax={quoteInfo.target.itemTotalUSTax}
      itemTotalWeightPrice={quoteInfo.target.itemTotalWeightPrice}
      itemTotalUSShipping={quoteInfo.target.itemTotalUSShipping}
      businessCharge={quoteInfo.target.businessCharge}
      grandTotal={quoteInfo.target.grandTotal}  />
    </div>
   );

}
 
export default CreateQuote;