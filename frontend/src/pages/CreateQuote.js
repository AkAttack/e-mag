import {useState} from "react"
import OrderItemForm from "../components/OrderItemForm";
import uuid from "uuid/v4"

const CreateQuote = () => {

  const [cartAmount, setCartAmount] = useState([1])

  const addItem = () => {
    setCartAmount((prevState) => {
      const lastItm = prevState[prevState.length - 1]
      const newItem = lastItm + 1
      return(      
        [...prevState,
        newItem
        ]
      )
  } )
}

  const removeItem = (id) => {
    console.log("remove item fired")
    setCartAmount((prevState) => {
      cartAmount.filter(itm => itm !== id)
    } )
  }
      


  return ( 
    <div className="create-quote">
      {cartAmount.map(num => {
        return <OrderItemForm key={num} itemNum={num} removeItem={removeItem} lastItemID={cartAmount.length}/>
      })  }
      <button onClick={addItem}>ADD ITEM</button>
      <button>GENERATE</button>
      <button onClick={() => console.log(cartAmount)}>Cart Item Amount</button>
      <button onClick={() => removeItem(cartAmount.length - 1)}>Remove Last Item</button>
    </div>
   );

}
 
export default CreateQuote;