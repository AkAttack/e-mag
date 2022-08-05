import { useState } from "react";

const OrderItemForm = ({itemNum, setParentValues, cartInfo, addItem, toggleExpand, removeItem, keyId, updateCartInfo, activeItems, itemCategoryList, maxCartAmount, setNextStep}) => {
  const optList = []
  for(let key in itemCategoryList){
    optList.push(key)
  }

  return (cartInfo.active &&
    <div className="OIF" >
      <div className="title">
        <div>
          <span  onClick={() => {toggleExpand(keyId)}}>{cartInfo.expandShow ? "+" : "-"}</span> Item{itemNum}  
        </div>
        {itemNum === 1? <button type="button" onClick={()=> setNextStep("prev")} className="form-return-button">Change Customer</button> : null }
      </div>
      

      {cartInfo.expandShow &&
        <div className="content">
          <div className="form-item">
            <div className="item-details">
              <div className="input-box">
                <label className="form-item-labels">Item Description</label>
                <input type="text" 
                  name="description" 
                  value={cartInfo.target.description} 
                  placeholder="Item Description" 
                  onChange={(e) => setParentValues(e, keyId, "s")} />
              </div>
              <div className="input-box">
              <label className="form-item-labels">Item Url</label>
                <input type="text" 
                  name="url" 
                  placeholder="Item Link(URL)" 
                  required 
                  value={cartInfo.target.url}
                  onChange={(e) => setParentValues(e, keyId, "s")}/>
              </div>
              <div className="input-box">
              <label className="form-item-labels">Item Color</label>
                <input type="text" 
                  name="color" 
                  placeholder="Color"
                  value={cartInfo.target.color}
                  onChange={(e) => setParentValues(e, keyId, "s")} />
              </div>
              <div className="input-box">
                <label className="form-item-labels">Item Size</label>
                <input type="text" 
                  name="size" 
                  placeholder="Size"
                  value={cartInfo.target.size}
                  onChange={(e) => setParentValues(e, keyId, "s")} />
              </div>

              <div className="input-box">
              <label className="form-item-labels">Item Category</label>
                <select
                  required
                  className="input-box-select"
                  name="itemCategory"
                  value={cartInfo.target.itemCategory}
                  onChange={(e) => setParentValues(e, keyId, "s")}>
                    <option value="" >Please Select Category...</option>
                    {optList.map((itm,i)=>{
                      return <option value={itm} key={200 + i} >{itm}</option>
                    })}
                </select>
              </div>

              <div className="input-box">
              <label className="form-item-labels">Item Price</label>
                <input type="text" 
                  name="itemPrice" 
                  placeholder="Item Price" 
                  required
                  value={cartInfo.target.itemPrice}
                  onChange={(e) => setParentValues(e, keyId, "n")} />
              </div>
              <div className="input-box">
              <label className="form-item-labels">Item Shipping</label>
                <input type="text" 
                  name="itemUSShipping" 
                  placeholder="Shipping" 
                  value={cartInfo.target.itemUSShipping}
                  onChange={(e) => setParentValues(e, keyId, "n")} />
              </div>
              <div className="input-box">
              <label className="form-item-labels">Item Weight</label>
                <input type="text" 
                  name="itemWeight" 
                  placeholder="Item Weight (LB)" 
                  required
                  value={cartInfo.target.itemWeight}
                  onChange={(e) => setParentValues(e, keyId, "n")} />
              </div>
              {/* <div className="input-box">
                <label className="form-item-labels">Quantity of Item</label>
                <input type="text" 
                  name="purchaseQuantity" 
                  placeholder="Purchase Quantity" 
                  value={cartInfo.target.purchaseQuantity}
                  onChange={(e) => setParentValues(e, keyId, "n")} />
              </div> */}
            </div>
            <div className="button">
              {(activeItems === itemNum) && (itemNum !== 1) && <button type="button" onClick={removeItem}>Remove Item</button>}
              {(activeItems === itemNum) && (maxCartAmount !== itemNum) && <button type="button" onClick={addItem}>Add Item</button>}
            </div>     
          </div>
        </div>
      }
    </div> 
   );
}
 
export default OrderItemForm;