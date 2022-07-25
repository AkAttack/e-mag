import { useEffect, useState} from "react"
import OrderItemForm from "../components/OrderItemForm";
// import {v4 as uuid} from "uuid";

const CreateQuote = () => {
  const MAX_CART_AMOUNT = 10
  const MIN_CART_AMOUNT = 1

  const [quoteInfo, setQuoteInfo] = useState({customer: {}, cart: [], details: {}})
  const [cartInfo, setCartInfo] = useState([{id: 1, active: true, expandShow: true, values: {}}, {id: 2, active:false, expandShow: false},{id: 3, active:false, expandShow: false},{id: 4, active:false, expandShow: false},{id: 5, active:false, expandShow: false},{id: 6, active:false, expandShow: false},{id: 7, active:false, expandShow: false},{id: 8, active:false, expandShow: false},{id: 9, active:false, expandShow: false},{id: 10, active:false, expandShow: false},{id: 11, active: false, expandShow: true}, {id: 12, active:false, expandShow: false},{id: 13, active:false, expandShow: false},{id: 14, active:false, expandShow: false},{id: 15, active:false, expandShow: false},{id: 16, active:false, expandShow: false},{id: 17, active:false, expandShow: false},{id: 18, active:false, expandShow: false},{id: 19, active:false, expandShow: false},{id: 20, active:false, expandShow: false} ])
  const [activeItems, setActiveItems] = useState(MIN_CART_AMOUNT)
  const [error, setError] = useState(null)

  
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
          .then(res => res.json())
          .then(json => {
            setQuoteInfo(pd => {
              const newCart = {...pd}
              newCart.cart = [...pd.cart, json]
              return newCart
            })

        })    //save item ID
          .catch(err => {setError(err)})
      }
    })

    if(quoteInfo.cart){
      console.log("go and create cart")
    }
  }

  

  return (   
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
          setParentValue={setCartInfo}
          cartInfo={cartInfo[i]}/>)
      })  }
      <button type="button" onClick={addItem}>ADD ITEM</button>
      <button type="button" onClick={() => console.log(quoteInfo)}>Cart Values</button>
      <button type="button" onClick={removeItem}>Remove Last Item</button>
      <button type="submit">SUBMIT SUBMIT</button>
    </form>
   );

}
 
export default CreateQuote;