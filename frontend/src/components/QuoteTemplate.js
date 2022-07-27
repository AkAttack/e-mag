import Logo from "../images/AnsaLogo.png"

const QuoteTemplate = ({quoteInfo}) => {

  return ( 
    <div className="invoice-page">
      <div className="invoice-box">
			<table>
				<tbody>
				<tr className="top">
					<td colSpan="2">
						<table>
							<tr>
								<td className="title">
									<img src={Logo} alt="Company logo" className="invoice-company-logo"/>
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
				<tr className="information">
					<td colSpan="2">
						<table>
							<tr>
								<td className="logo-text">
									E-Mag <br />
									Online Shopping<br />
								</td>

								<td>
								{quoteInfo.customer.nameFirst} {quoteInfo.customer.nameLast}<br />
								{quoteInfo.customer.mobile}<br />
								{quoteInfo.customer.email}
								</td>
							</tr>
						</table>
					</td>
				</tr>
				</tbody>

				{/* <tr className="heading">
					<td>Payment Method</td>

					<td>Check #</td>
				</tr>

				<tr className="details">
					<td>Check</td>

					<td>1000</td>
				</tr> */}
				<tbody>
				<tr className="heading">
					<td className="column1-width">Item</td>
					<td className="column2-width">Price</td>
				</tr>
				</tbody>

				{quoteInfo.cart.map((cart,i) =>{
					if(cart.active){
						return(
							<tbody key={cart.id + 100}>
								<tr className="item">
									<td className="invoice-prevent-overflow  column1-width">{quoteInfo.cart[i].target.description? quoteInfo.cart[i].target.description : quoteInfo.cart[i].target.url? quoteInfo.cart[i].target.url : ""}</td>
									<td className="column2-width">${quoteInfo.cart[i].target.price? quoteInfo.cart[i].target.price: 0.00}</td>
								</tr>
							</tbody>
						)
					}
				})}

				<tbody>
				<tr className="item">
					<td className="column1-width">Total Item Cost</td>
					<td className="column2-width">${quoteInfo.target.itemTotalPrice? quoteInfo.target.itemTotalPrice: 0.00}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td className="column1-width">Items U.S Taxes</td>
					<td className="column2-width">${quoteInfo.target.itemTotalTax? quoteInfo.target.itemTotalTax: 0.00}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td className="column1-width">Shipping Cost</td>
					<td className="column2-width">${quoteInfo.target.itemTotalWeightPrice? quoteInfo.target.itemTotalWeightPrice: 0.00}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td className="column1-width">Local Fees (Customs)</td>
					<td className="column2-width">${quoteInfo.target.freight? quoteInfo.target.freight: 0.00}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item last">
					<td className="column1-width">Business Charges</td>
					<td className="column2-width">${quoteInfo.target.businessCharges? quoteInfo.target.businessCharges: 0.00}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="total">
					<td className="column1-width"></td>
					<td className="column2-width">Total: ${quoteInfo.target.grandTotal? quoteInfo.target.grandTotal: 0.00}</td>
				</tr>
				</tbody>
			</table>
		</div>
    </div>
   );
}
 
export default QuoteTemplate;