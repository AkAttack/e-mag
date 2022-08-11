import useQuoteInfoStore from "../store/useQuoteInfo";
import useCreateQuotePageStore from "../store/useCreateQuotePageStore";

const OrderItemForm = ({ keyId, itemNum}) => {
  const cartInfo = useQuoteInfoStore(state=> state.quoteInfo.cartInfo), 
  setQuoteInfoCartInfo = useQuoteInfoStore(state=> state.quoteInfo.cartInfo), 
  addItem = useQuoteInfoStore(state=> state.addCartInfo), 
  removeItem = useQuoteInfoStore(state=> state.removeCartInfo), 
  toggleExpand = useQuoteInfoStore(state=> state.quoteInfo.cart[keyId].expandShow), 
  activeItems = useQuoteInfoStore(state=> state.activeCartItem), 
  itemCategoryList = useQuoteInfoStore(state=> state.quoteInfo.customInfo), 
  maxCartAmount = 20, // TODO - create .env file 
  setShowCustomerForm = useCreateQuotePageStore(state=> state.setShowCustomerForm)  

  function setParentValues(e,id){
    const value = e.target.value
    const name = e.target.name 
    const newCart = [...cartInfo]
    const newCartItem = {...cartInfo[id]}
    newCartItem[name] = value
    newCart[id] = newCartItem
    setQuoteInfoCartInfo(newCartItem)
  }
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
        {itemNum === 1? <button type="button" onClick={()=> setShowCustomerForm("prev")} className="form-return-button">Change Customer</button> : null }
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