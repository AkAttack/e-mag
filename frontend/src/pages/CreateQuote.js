import { useState} from "react"
import OrderItemForm from "../components/OrderItemForm";
// import {v4 as uuid} from "uuid";

const CreateQuote = () => {
  const MAX_CART_AMOUNT = 8
  const MIN_CART_AMOUNT = 1

  const [cartInfo, setCartInfo] = useState([{id: 1, active: true, expandShow: true}, {id: 2, active:false, expandShow: false},{id: 3, active:false, expandShow: false},{id: 4, active:false, expandShow: false},{id: 5, active:false, expandShow: false},{id: 6, active:false, expandShow: false},{id: 7, active:false, expandShow: false},{id: 8, active:false, expandShow: false}])
  let [activeItems, setActiveItems] = useState(MIN_CART_AMOUNT)
  
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
      newArr[id - 1].expandShow = false
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:3001/api/orderitems/', {
      method: 'POST',
      body: JSON.stringify({test: "wwwww"}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      console.log("ERROR Encountered")
    }
    if (response.ok) {
      console.log('new Cart Item added:', json)
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
          cartInfo={cartInfo}/>)
      })  }
      <button onClick={addItem}>ADD ITEM</button>
      <button onClick={() => console.log(activeItems)}>Cart Item Amount</button>
      <button onClick={removeItem}>Remove Last Item</button>
    </form>
   );

}
 
export default CreateQuote;