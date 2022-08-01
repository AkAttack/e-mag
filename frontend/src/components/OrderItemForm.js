import { useState } from "react";

const OrderItemForm = ({itemNum, setParentValues, cartInfo, addItem, toggleExpand, removeItem, keyId, updateCartInfo, activeItems, customsOptions}) => {

  return (cartInfo.active &&
    <div className="OIF" >
      <div className="title">
        <span className="OIF-+" onClick={() => {toggleExpand(keyId)}}>{cartInfo.expandShow ? "+" : "-"}</span> Item {itemNum}  
        {(activeItems === itemNum) && (itemNum !== 1) && <span className="itemDelet-button" onClick={removeItem}>      DEL</span>} 
      </div>

      {cartInfo.expandShow &&
        <div className="content">
          <div className="form-item">
            <div className="item-details">
              <div className="input-box">
                <input type="text" 
                  name="description" 
                  value={cartInfo.target.description} 
                  placeholder="Item Description" 
                  onChange={(e) => setParentValues(e, keyId, "s")} />
              </div>
              <div className="input-box">
                <input type="text" 
                  name="url" 
                  placeholder="Item Link(URL)" 
                  required 
                  value={cartInfo.target.url}
                  onChange={(e) => setParentValues(e, keyId, "s")}/>
              </div>
              <div className="input-box">
                <input type="text" 
                  name="color" 
                  placeholder="Color"
                  value={cartInfo.target.color}
                  onChange={(e) => setParentValues(e, keyId, "s")} />
              </div>
              <div className="input-box">
                <input type="text" 
                  name="size" 
                  placeholder="Size"
                  value={cartInfo.target.size}
                  onChange={(e) => setParentValues(e, keyId, "s")} />
              </div>

              <div className="input-box">
                <input type="text" 
                  name="itemCategory" 
                  placeholder="Category(eg. laptop, clothes, tv, jewelery, car parts)" 
                  value={cartInfo.target.itemCategory}
                  onChange={(e) => setParentValues(e, keyId, "s")} />
              </div>

              {}

              <div className="input-box">
                <input type="number" 
                  name="itemPrice" 
                  placeholder="Item Price" 
                  required
                  value={cartInfo.target.itemPrice}
                  onChange={(e) => setParentValues(e, keyId, "n")} />
              </div>
              <div className="input-box">
                <input type="number" 
                  name="itemUSShipping" 
                  placeholder="Shipping" 
                  value={cartInfo.target.itemUSShipping}
                  onChange={(e) => setParentValues(e, keyId, "n")} />
              </div>
              <div className="input-box">
                <input type="number" 
                  name="itemWeight" 
                  placeholder="Item Weight (LB)" 
                  required
                  value={cartInfo.target.itemWeight}
                  onChange={(e) => setParentValues(e, keyId, "n")} />
              </div>
            </div>
            <div className="button">
              {(activeItems === itemNum) && (itemNum !== 1) && <button type="button" onClick={removeItem}>Delete Item</button>}
            </div>
            <div className="button">
              {(activeItems === itemNum) && <button type="button" onClick={addItem}>Add Item</button>}
            </div>
          </div>
        </div>
      }
    </div> 
   );
}
 
export default OrderItemForm;