module.exports = `
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
                  <td class="column1-width"> </td>
                  <td class="column2-width"> </td>
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
`