import Logo from "../images/AnsaLogo.png"

const QuoteTemplate = ({quoteInfo, itemTotalPrice, itemTotalPriceGYD, itemTotalUSTax, itemTotalCustoms, itemTotalWeightPrice, businessCharge, grandTotal, itemTotalUSShipping}) => {

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
									<td className="column2-width">${quoteInfo.cart[i].target.itemPrice}</td>
								</tr>
							</tbody>
						)
					}
				})}

				<tbody>
				<tr className="item">
					<td className="column1-width">US Taxes</td>
					<td className="column2-width">${itemTotalUSTax}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td className="column1-width">Shipping</td>
					<td className="column2-width">${itemTotalUSShipping}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td className="column1-width">Total Item Cost(USD)</td>
					<td className="column2-width">${itemTotalPrice}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td className="column1-width"> </td>
					<td className="column2-width"> </td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td className="column1-width">Total Item Cost(GYD) @ ${quoteInfo.adminInfo.usdExchange}</td>
					<td className="column2-width">${itemTotalPriceGYD}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td className="column1-width">Freight Cost</td>
					<td className="column2-width">${itemTotalWeightPrice}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td className="column1-width">Local Fees (Customs)</td>
					<td className="column2-width">${itemTotalCustoms}</td>
				</tr>
				</tbody>


				<tbody>
				<tr className="item last">
					<td className="column1-width">Business Charges</td>
					<td className="column2-width">${businessCharge}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="total">
					<td className="column1-width"></td>
					<td className="column2-width">Total(GYD): ${grandTotal}</td>
				</tr>
				</tbody>
			</table>
		</div>
    </div>
   );
}
 
export default QuoteTemplate;