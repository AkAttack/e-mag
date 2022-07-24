import { useState } from "react";

const OrderItemForm = ({itemNum, cartInfo, addItem, toggleExpand, keyId, updateCartInfo, activeItems}) => {

  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [itemCategory, setItemCategory] = useState("")
  const [itemPrice, setItemPrice] = useState("")
  const [weightLB, setWeightLB] = useState("")
  const [weightPrice, setWeightPrice] = useState("0") // needs setup
  const [error, setError] = useState(null)

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   const workout = { description, url, color, size, itemCategory, itemPrice, weightLB, weightPrice };

  //   const response = await fetch('http://localhost:3001/api/orderitems/', {
  //     method: 'POST',
  //     body: JSON.stringify(workout),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   const json = await response.json()

  //   if (!response.ok) {
  //     setError(json.error)
  //   }
  //   if (response.ok) {
  //     setError(null)    
  //     console.log('new Cart Item added:', json)
  //   }
  
  // }


  return (cartInfo[keyId].active &&
    <div className="OIF" >
      <div className="title">
        <span className="OIF-+" onClick={() => {toggleExpand(keyId)}}>{cartInfo[keyId].expandShow ? "+" : "-"}</span> Item {itemNum}  
        {(activeItems === itemNum) && (itemNum !== 1) && <span className="itemDelet-button" onClick={updateCartInfo}>      DEL</span>} 
      </div>

      {cartInfo[keyId].expandShow &&
        <div className="content">
          <div className="form-item">
            <div className="item-details">
              <div className="input-box">
                <input type="text" 
                  name="description" 
                  value={description} 
                  placeholder="Item Description" 
                  onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="input-box">
                <input type="text" 
                  name="url" 
                  placeholder="Item Link(URL)" 
                  required 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}/>
              </div>
              <div className="input-box">
                <input type="text" 
                  name="color" 
                  placeholder="Color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)} />
              </div>
              <div className="input-box">
                <input type="text" 
                  name="size" 
                  placeholder="Size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)} />
              </div>
              <div className="input-box">
                <input type="text" 
                  name="itemCategory" 
                  placeholder="Category(eg. laptop, clothes, tv, jewelery, car parts)" 
                  required
                  value={itemCategory}
                  onChange={(e) => setItemCategory(e.target.value)} />
              </div>
              <div className="input-box">
                <input type="number" 
                  name="itemPrice" 
                  placeholder="Item Price" 
                  required
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)} />
              </div>
              <div className="input-box">
                <input type="number" 
                  name="weightLB" 
                  placeholder="Item Weight (LB)" 
                  required
                  value={weightLB}
                  onChange={(e) => setWeightLB(e.target.value)} />
              </div>
            </div>
            <div className="button">
              <button onClick={addItem}>Add Item</button>
            </div>
          </div>
        </div>
      }
    </div> 
   );
}
 
export default OrderItemForm;