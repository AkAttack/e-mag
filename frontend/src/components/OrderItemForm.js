const OrderItemForm = () => {

  return ( 
    <div class="OIF">
      <div class="title"><span className="OIF-+">+</span> Item {1}</div>
      <div class="content">
        <form>
          <div class="item-details">
            <div class="input-box">
              <input type="text" name="description" placeholder="Item Description" />
            </div>
            <div class="input-box">
              <input type="text" name="url" placeholder="Item Link(URL)" required />
            </div>
            <div class="input-box">
              <input type="text" name="color" placeholder="Color" />
            </div>
            <div class="input-box">
              <input type="text" name="size" placeholder="Size" />
            </div>
            <div class="input-box">
              <input type="text" name="itemCategory" placeholder="Category(eg. laptop, clothes, tv, jewelery, car parts)" required />
            </div>
            <div class="input-box">
              <input type="number" name="itemPrice" placeholder="Item Price" required />
            </div>
            <div class="input-box">
              <input type="number" name="weight" placeholder="Item Weight (LB)" required />
            </div>
          </div>
          <div class="button">
            <button>Generate</button>
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default OrderItemForm;