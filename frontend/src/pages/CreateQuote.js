import {useState} from "react"
import OrderItemForm from "../components/OrderItemForm";

const CreateQuote = () => {

const [cartAmount, setCartAmount] = useState(1)

  return ( 
    <div className="create-quote">
      <OrderItemForm />
    </div>
   );
}
 
export default CreateQuote;