module.exports = (quoteInfo, StyleSheet) => {
   let Logo = "https://lh3.googleusercontent.com/pw/AL9nZEXiodVtMuFJlSavykkUTH4pPu7Slv-PdApVq3ypIxWMG4f3jPQyCemE1NU3W-znyB6vxbytTw8zx0V6a-0CRm0-aGqlcf28ffq8um9GjsOqN7PKI1eiWH6fslgOR7ICJGtD2ewzPYz5l00d39alVo2IPw=w284-h195-no"
   const today = new Date();
   const itemTotalPrice = quoteInfo.target.itemTotalPrice , 
   itemTotalPriceGYD = quoteInfo.target.itemTotalPriceGYD, 
   itemTotalUSTax = quoteInfo.target.itemTotalUSTax, 
   itemTotalCustoms = quoteInfo.target.itemTotalCustoms, 
   itemTotalWeightPrice = quoteInfo.target.itemTotalWeightPrice, 
   businessCharge = quoteInfo.target.businessCharge, 
   grandTotal = quoteInfo.target.grandTotal, 
   itemTotalUSShipping = quoteInfo.target.itemTotalUSShipping
   
   const itemRowsData = quoteInfo.cart.map((cart,i) =>{
      if(cart.active){
      return(`
      <tbody>
         <tr class="item">
            <td class="invoice-prevent-overflow  column1-width">${cart.target.description?
            cart.target.description : cart.target.url}
            </td>
            <td class="column2-width">${cart.target.itemPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
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
                     <tbody>
                        <tr class="top">
                           <td colSpan="2">
                           <table>
                              <tr>
                                 <td class="title">
                                 <img src=${Logo} alt="Company logo" class="invoice-company-logo" />
                                 </td>

                                 <td>
                                 QuoteInfo #: 123<br />
                                 Created: January 1, 2015<br />
                                 Due: February 1, 2015
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
                                 ${quoteInfo.customer.nameFirst} ${quoteInfo.customer.nameLast}<br />
                                 ${quoteInfo.customer.mobile}<br />
                                 ${quoteInfo.customer.email}
                                 </td>
                              </tr>
                           </table>
                           </td>
                        </tr>
                     </tbody>
                     <tbody>
                        <tr class="heading">
                           <td class="column1-width">Item</td>
                           <td class="column2-width">Price</td>
                        </tr>
                     </tbody>

                     ${itemRows}

                     <tbody>
                        <tr class="item">
                           <td class="column1-width">US Taxes</td>
                           <td class="column2-width">${itemTotalUSTax.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                           </td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td class="column1-width">Shipping</td>
                           <td class="column2-width">${itemTotalUSShipping.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td class="column1-width">Total Item Cost(USD)</td>
                           <td class="column2-width">${itemTotalPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                           </td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td class="column1-width">-</td>
                           <td class="column2-width">-</td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td class="column1-width">Total Item Cost(GYD) @ ${quoteInfo.adminInfo.usdExchange}</td>
                           <td class="column2-width">${itemTotalPriceGYD.toLocaleString("en-US", {style:"currency",currency:"USD"})}</td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td class="column1-width">Freight Cost</td>
                           <td class="column2-width">${itemTotalWeightPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="item">
                           <td class="column1-width">Local Fees (Customs)</td>
                           <td class="column2-width">${itemTotalCustoms.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                           </td>
                        </tr>
                     </tbody>


                     <tbody>
                        <tr class="item last">
                           <td class="column1-width">Business Charges</td>
                           <td class="column2-width">${businessCharge.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                           </td>
                        </tr>
                     </tbody>

                     <tbody>
                        <tr class="total">
                           <td class="column1-width"></td>
                           <td class="column2-width">Total(GYD): ${grandTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </body>
      </html>
   `;
 };