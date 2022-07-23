import { useState} from "react"
import OrderItemForm from "../components/OrderItemForm";
// import {v4 as uuid} from "uuid";

const CreateQuote = () => {

  const [cartAmount, setCartAmount] = useState([{id: 1, active: true}, {id: 2, active:false},{id: 3, active:false},{id: 4, active:false},{id: 5, active:false},{id: 6, active:false},{id: 7, active:false},{id: 8, active:false}])
  let activeItems = 1

  
  const removeItem = (id) => {
    setCartAmount(prevState => {
      const newArr = [...prevState]
      newArr[id - 1] = !newArr[id - 1].active
      return newArr
    })
  }

  const addItem = () => {
    setCartAmount(prevState => {
      const newArr = [...prevState]
      newArr[activeItems - 1] = !newArr[activeItems - 1].active
      activeItems += 1
      return newArr
    })
  }


  return ( 
    <div className="create-quote">
      {cartAmount.map((e,i) => {
        return (e.active && <OrderItemForm key={e.id} itemNum={e.id} activeItems={activeItems}  active={e.active} removeItem={removeItem}/>)
      })  }
      <button onClick={() => addItem(activeItems + 1)}>ADD ITEM</button>
      <button onClick={() => console.log(cartAmount)}>Cart Item Amount</button>
      <button onClick={() => removeItem(activeItems - 1)}>Remove Last Item</button>
    </div>
   );

}
 
export default CreateQuote;