import { useState } from "react";

const OrderItemForm = () => {

  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [itemCategory, setItemCategory] = useState("")
  const [itemPrice, setItemPrice] = useState("")
  const [weight, setWeight] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { description, url, color, size, itemCategory, itemPrice, weight };
    
    // const options = { 
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newItem)
    // }    
    
    // fetch('http://localhost:3001/api/orderitems', options)
    //   .then(response => {       
    //      if (response.ok) {
    //         console.log(response) 
    //         return response.json();
    //       } else {
    //         throw new Error('Something went wrong ...');
    //        }
    //   })
    //   .catch(err => setError({ err }));

    const response = await fetch("http://localhost:3001/api/orderitems", {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {'Content-Type': 'application/json'}
    })
    const json = await response.json()

    if (!response.ok) {setError(json.error)}
    if (response.ok) {
      setError(null)
      setDescription("")
      setUrl("")
      setColor("")
      setSize("")
      setItemCategory("")
      setItemPrice("")
      setWeight("")      
      console.log('new Cart Item added:', json)
    }

  }

  return ( 
    <div className="OIF">
      <div className="title"><span className="OIF-+">+</span> Item {1}</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
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
                name="weight" 
                placeholder="Item Weight (LB)" 
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)} />
            </div>
          </div>
          <div className="button">
            <button type="submit">Generate</button>
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default OrderItemForm;