import useQuoteInfoStore from "../store/useQuoteInfo";
import useCreateQuotePageStore from "../store/useCreateQuotePageStore";
import inputConversion from "./HelperFunctions/InputConversion"

const OrderItemForm = ({ keyId, itemNum}) => {
  const cartInfoItem = useQuoteInfoStore(state=> state.quoteInfo.cart[keyId]), 
  setQuoteInfoCartItem = useQuoteInfoStore(state=> state.setQuoteInfoCartItem), 
  toggleExpand = useQuoteInfoStore(state=> state.setQuoteInfoCartItemExpand), 
  activeItems = useQuoteInfoStore(state=> state.activeCartItems), 
  setActiveItems = useQuoteInfoStore(state=> state.setActiveCartItems),
  setCartItemActive = useQuoteInfoStore(state=> state.setQuoteInfoCartItemActive), 
  itemCategoryList = useQuoteInfoStore(state=> state.quoteInfo.customsInfo), 
  maxCartAmount = 20, // TODO - create .env file 
  setShowCustomerForm = useCreateQuotePageStore(state=> state.setShowCustomerForm)  

  function setParentValues(e, keyId){
    const value = inputConversion(e, "")
    const name = e.target.name 
    const newCartInfoItem = {...cartInfoItem}
    newCartInfoItem.target[name] = value
    setQuoteInfoCartItem(newCartInfoItem, keyId)
  }

  function setCartAmount(i, action){
    if(action === "add"){
      setActiveItems(action)
      setCartItemActive(i + 1)
    } else if(action === "remove"){
      setActiveItems(action)
      setCartItemActive(i)
    }
  }

  const optList = []
  for(let key in itemCategoryList){
    optList.push(key)
  }

  return (cartInfoItem.active &&
    <div className="OIF" >
      <div className="title">
        <div>
          <span  onClick={() => {toggleExpand(keyId)}}>{cartInfoItem.expandShow ? "+" : "-"}</span> Item{itemNum}  
        </div>
        {itemNum === 1? <button type="button" onClick={()=> setShowCustomerForm("prev")} className="form-return-button">Change Customer</button> : null }
      </div>
      

      {cartInfoItem.expandShow &&
        <div className="content">
          <div className="form-item">
            <div className="item-details">
              <div className="input-box">
                <label className="form-item-labels">Item Description</label>
                <input type="text" 
                  inputtype="text"
                  name="description" 
                  value={cartInfoItem.target.description} 
                  placeholder="Item Description" 
                  onChange={(e) => setParentValues(e, keyId, "s")} />
              </div>
              <div className="input-box">
              <label className="form-item-labels">Item Url</label>
                <input type="text" 
                  inputtype="text"
                  name="url" 
                  placeholder="Item Link(URL)" 
                  required 
                  value={cartInfoItem.target.url}
                  onChange={(e) => setParentValues(e, keyId, "s")}/>
              </div>
              <div className="input-box">
              <label className="form-item-labels">Item Color</label>
                <input type="text" 
                  inputtype="text"
                  name="color" 
                  placeholder="Color"
                  value={cartInfoItem.target.color}
                  onChange={(e) => setParentValues(e, keyId, "s")} />
              </div>
              <div className="input-box">
                <label className="form-item-labels">Item Size</label>
                <input type="text" 
                  inputtype="text"
                  name="size" 
                  placeholder="Size"
                  value={cartInfoItem.target.size}
                  onChange={(e) => setParentValues(e, keyId, "s")} />
              </div>

              <div className="input-box">
              <label className="form-item-labels">Item Category</label>
                <select
                  required
                  className="input-box-select"
                  inputtype="text"
                  name="itemCategory"
                  value={cartInfoItem.target.itemCategory}
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
                  inputtype="text"
                  name="itemPrice" 
                  placeholder="Item Price" 
                  required
                  value={cartInfoItem.target.itemPrice}
                  onChange={(e) => setParentValues(e, keyId, "n")} />
              </div>
              <div className="input-box">
              <label className="form-item-labels">Item Shipping</label>
                <input type="text" 
                  inputtype="number"
                  name="itemUSShipping" 
                  placeholder="Shipping" 
                  value={cartInfoItem.target.itemUSShipping}
                  onChange={(e) => setParentValues(e, keyId, "n")} />
              </div>
              <div className="input-box">
              <label className="form-item-labels">Item Weight</label>
                <input type="text" 
                  inputtype="number"
                  name="itemWeight" 
                  placeholder="Item Weight (LB)" 
                  required
                  value={cartInfoItem.target.itemWeight}
                  onChange={(e) => setParentValues(e, keyId, "n")} />
              </div>
              {/* <div className="input-box">
                <label className="form-item-labels">Quantity of Item</label>
                <input type="text" 
                  inputtype="number"
                  name="purchaseQuantity" 
                  placeholder="Purchase Quantity" 
                  value={cartInfo.target.purchaseQuantity}
                  onChange={(e) => setParentValues(e, keyId, "n")} />
              </div> */}
            </div>
            <div className="button">
              {(activeItems === itemNum) && (itemNum !== 1) && <button type="button" onClick={()=> setCartAmount(keyId,"remove")}>Remove Item</button>}
              {(activeItems === itemNum) && (maxCartAmount !== itemNum) && <button type="button" onClick={()=> setCartAmount(keyId,"add")}>Add Item</button>}
            </div>     
          </div>
        </div>
      }
    </div> 
   );
}
 
export default OrderItemForm;