import { useState } from "react";

const OrderItemForm = ({itemNum, setParentValue, cartInfo, addItem, toggleExpand, keyId, updateCartInfo, activeItems}) => {

  const [values, setValues] = useState({description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", weightLB: "", weightPrice: "" })
  

  const handleValue = (e) => {
    setValues(preValues => ({
      ...preValues,
      [e.target.name] : e.target.value
      })  )
    setParentValue(preState => {
      const newValue = [...preState]
      newValue[keyId].values = {...values}
      return newValue
    })
  }

  return (cartInfo.active &&
    <div className="OIF" >
      <div className="title">
        <span className="OIF-+" onClick={() => {toggleExpand(keyId)}}>{cartInfo.expandShow ? "+" : "-"}</span> Item {itemNum}  
        {(activeItems === itemNum) && (itemNum !== 1) && <span className="itemDelet-button" onClick={updateCartInfo}>      DEL</span>} 
      </div>

      {cartInfo.expandShow &&
        <div className="content">
          <div className="form-item">
            <div className="item-details">
              <div className="input-box">
                <input type="text" 
                  name="description" 
                  value={values.description} 
                  placeholder="Item Description" 
                  onChange={(e) => handleValue(e)} />
              </div>
              <div className="input-box">
                <input type="text" 
                  name="url" 
                  placeholder="Item Link(URL)" 
                  required 
                  value={values.url}
                  onChange={(e) => handleValue(e)}/>
              </div>
              <div className="input-box">
                <input type="text" 
                  name="color" 
                  placeholder="Color"
                  value={values.color}
                  onChange={(e) => handleValue(e)} />
              </div>
              <div className="input-box">
                <input type="text" 
                  name="size" 
                  placeholder="Size"
                  value={values.size}
                  onChange={(e) => handleValue(e)} />
              </div>
              <div className="input-box">
                <input type="text" 
                  name="itemCategory" 
                  placeholder="Category(eg. laptop, clothes, tv, jewelery, car parts)" 
                  value={values.itemCategory}
                  onChange={(e) => handleValue(e)} />
              </div>
              <div className="input-box">
                <input type="number" 
                  name="itemPrice" 
                  placeholder="Item Price" 
                  required
                  value={values.itemPrice}
                  onChange={(e) => handleValue(e)} />
              </div>
              <div className="input-box">
                <input type="number" 
                  name="weightLB" 
                  placeholder="Item Weight (LB)" 
                  required
                  value={values.weightLB}
                  onChange={(e) => handleValue(e)} />
              </div>
              <div className="input-box">
                <input type="number" 
                  name="weightPrice" 
                  placeholder="Weight Price TEMP" 
                  required
                  value={values.weightPrice}
                  onChange={(e) => handleValue(e)} />
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