import { useEffect, useState} from "react"
import CustomerForm from "../components/CustomerForm";
import OrderItemForm from "../components/OrderItemForm";
import QuoteTemplate from "../components/QuoteTemplate";
// import {v4 as uuid} from "uuid";

const CreateQuote = () => {
  const MAX_CART_AMOUNT = 10
  const MIN_CART_AMOUNT = 1

  const [quoteInfo, setQuoteInfo] = useState({customer: {nameFirst: "", nameLast: "", mobile: "", address: "", email: ""}, cart: [], details: {}})
  const [cartInfo, setCartInfo] = useState([{id: 1, active: true, expandShow: true, values: {}}, {id: 2, active:false, expandShow: false},{id: 3, active:false, expandShow: false},{id: 4, active:false, expandShow: false},{id: 5, active:false, expandShow: false},{id: 6, active:false, expandShow: false},{id: 7, active:false, expandShow: false},{id: 8, active:false, expandShow: false},{id: 9, active:false, expandShow: false},{id: 10, active:false, expandShow: false},{id: 11, active: false, expandShow: true}, {id: 12, active:false, expandShow: false},{id: 13, active:false, expandShow: false},{id: 14, active:false, expandShow: false},{id: 15, active:false, expandShow: false},{id: 16, active:false, expandShow: false},{id: 17, active:false, expandShow: false},{id: 18, active:false, expandShow: false},{id: 19, active:false, expandShow: false},{id: 20, active:false, expandShow: false} ])
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
      const newArr = [...cartInfo]
        newArr[id].active = false
        newArr[id].expandShow = true
        if(id >= 1){newArr[id - 1].expandShow = true}
      if(id < MAX_CART_AMOUNT && id >= MIN_CART_AMOUNT){
        setCartInfo(newArr)
      }
      const newNum = activeItems - 1
      if(newNum >= MIN_CART_AMOUNT && newNum <= MAX_CART_AMOUNT){ 
        setActiveItems(newNum) }    
    }
  }

  const addItem = () => {
    const id = activeItems 
    if(id < MAX_CART_AMOUNT && id >= MIN_CART_AMOUNT){
      const newArr = [...cartInfo]
      newArr[id].active = true
      newArr[id].expandShow = true
      setCartInfo(newArr)
    }
    const newNum = activeItems + 1
    if(newNum >= MIN_CART_AMOUNT && newNum <= MAX_CART_AMOUNT){ 
      setActiveItems(newNum) }    
  }

  const toggleExpand = (id) => {
    const newArr = [...cartInfo]
    newArr[id].expandShow = !cartInfo[id].expandShow
    setCartInfo(newArr)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const urlOrderItems = "http://localhost:3001/api/orderitems"
    cartInfo.forEach(item => {
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
          {cartInfo.map((e,i) => {
            return (<OrderItemForm 
              key={i} 
              keyId={i}
              itemNum={e.id} 
              updateCartInfo={removeItem}
              activeItems={activeItems}
              toggleExpand={toggleExpand}
              addItem={addItem}
              removeItem={removeItem}
              setParentValue={setCartInfo}
              cartInfo={cartInfo[i]}/>)
          })  }
          <div className="action-button">
            <button type="submit" className="button-submit">Generate Quote</button>
          </div>
        </form>
      }
      <button onClick={() => console.log(quoteInfo)}>quoteInfo</button>

      <QuoteTemplate />
    </div>
   );

}
 
export default CreateQuote;