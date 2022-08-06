module.exports = (quoteInfo, StyleSheet) => {
   let Logo = "https://lh3.googleusercontent.com/pw/AL9nZEXiodVtMuFJlSavykkUTH4pPu7Slv-PdApVq3ypIxWMG4f3jPQyCemE1NU3W-znyB6vxbytTw8zx0V6a-0CRm0-aGqlcf28ffq8um9GjsOqN7PKI1eiWH6fslgOR7ICJGtD2ewzPYz5l00d39alVo2IPw=w284-h195-no"
   const today = new Date();
   const itemTotalPrice = quoteInfo.target.itemTotalPrice , 
   itemTotalPriceGYD = quoteInfo.target.itemTotalPriceGYD, 
   itemTotalUSTax = quoteInfo.target.itemTotalUSTax, 
   itemTotalCustoms = quoteInfo.target.itemTotalCustoms, 
   itemTotalWeightPrice = quoteInfo.target.itemTotalWeightPrice, 
   businessCharges = quoteInfo.target.businessCharges, 
   grandTotal = quoteInfo.target.grandTotal, 
   itemTotalUSShipping = quoteInfo.target.itemTotalUSShipping,
   quoteID = quoteInfo.quoteID,
   quoteDate = quoteInfo.createdAt.slice(0,10)
   
   const itemRowsData = quoteInfo.cart.map((cart,i) =>{
      if(cart.active){
      return(`
      <tbody>
         <tr class="item">
            <td class="invoice-prevent-overflow  column1-width">${cart.target.description?
            `<a href=${cart.target.url} target="_blank" rel="noreferrer" >${cart.target.description}</a>` : `<a href=${cart.target.url} target="_blank" rel="noreferrer" >${cart.target.url}</a>`}
            </td>
            <td>${cart.target.itemPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
         </tr>
      </tbody>  `
      );
      }
   })
   let itemRows = ""
   itemRowsData.forEach(item => {
      if(item !== undefined){
         itemRows += item
      }
   })
    
   return `
      <!doctype html>
      <html>
         <head>
         <meta charset="utf-8">
         <title>PDF Result Template</title>
         ${StyleSheet}
         </head>
         <body>
            <div class="invoice-page">
               <div class="invoice-box">
                  <table>
                     <thead>
                        <tr>
                           <td class="column1-width></td>
                           <td class="column2-width></td>
                        </tr>
                     </thead>
                     <tbody>
                        <tr class="top">
                           <td colSpan="2">
                           <table>
                              <tr>
                                 <td class="title">
                                 <img src=${Logo} alt="Company logo" class="invoice-company-logo" />
                                 </td>

                                 <td>
                                 Quote#: ${quoteID}<br />
                                 Created: ${quoteDate}<br />
                                 </td>
                              </tr>
                           </table>
                           </td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="information">
                           <td colSpan="2">
                           <table>
                              <tr>
                                 <td class="logo-text">
                                 E-Mag <br />
                                 Online Shopping<br />
                                 </td>

                                 <td>
                                 ${quoteInfo.customer.namefirst} ${quoteInfo.customer.namelast}<br />
                                 ${quoteInfo.customer.phone}<br />
                                 ${quoteInfo.customer.email}
                                 </td>
                              </tr>
                           </table>
                           </td>
                        </tr>
                     </tbody>
                     <tbody>
                        <tr class="heading">
                           <td>Item</td>
                           <td>Price</td>
                        </tr>
                     </tbody>

                     ${itemRows}

                     <tbody>
                        <tr class="item">
                           <td>US Taxes</td>
                           <td>${itemTotalUSTax.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                           </td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td>Shipping</td>
                           <td>${itemTotalUSShipping.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td>Total Item Cost(USD)</td>
                           <td>${itemTotalPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                           </td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td>-</td>
                           <td>-</td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td>Total Item Cost(GYD) @ ${quoteInfo.adminInfo.usdExchange}</td>
                           <td>${itemTotalPriceGYD.toLocaleString("en-US", {style:"currency",currency:"USD"})}</td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td>Freight Cost</td>
                           <td>${itemTotalWeightPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td>Local Fees (Customs)</td>
                           <td>${itemTotalCustoms.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                           </td>
                        </tr>
                     </tbody>


                     <tbody>
                        <tr class="item last">
                           <td>Business Charges</td>
                           <td>${businessCharges.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                           </td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="total">
                           <td></td>
                           <td>Total(GYD): ${grandTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                        </tr>
                     </tbody>
                  </table>
                  <footer class="footer"> 
                     <p>By confirming this quotation and paying, you agree that: </p>
                     <p>1. This quotation is accurate and contains exact description of items you require. </p>
                     <p>2. This is an estimate and is subject to change based on any adjustments by the vendor or the actual shipping or additional charges incurred in getting the items to you. </p>
                     <p>If you have any questions conserning this invoice, use the following contact information: </p>
                     <p>Ansa: 592-6638816, adeolafrance@yahoo.com </p>
                  </footer>
               </div>
            </div>
         </body>
      </html>
   `;
 };