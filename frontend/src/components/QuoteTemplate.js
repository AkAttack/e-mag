import Logo from "../images/AnsaLogo.png"

const QuoteTemplate = ({quoteInfo}) => {

 const itemTotalPrice = quoteInfo.target.itemTotalPrice , 
 itemTotalPriceGYD = quoteInfo.target.itemTotalPriceGYD, 
 itemTotalUSTax = quoteInfo.target.itemTotalUSTax, 
 itemTotalCustoms = quoteInfo.target.itemTotalCustoms, 
 itemTotalWeightPrice = quoteInfo.target.itemTotalWeightPrice, 
 businessCharges = quoteInfo.target.businessCharges, 
 grandTotal = quoteInfo.target.grandTotal, 
 itemTotalUSShipping = quoteInfo.target.itemTotalUSShipping,
 quoteID = quoteInfo.quoteID,
 today = new Date()


  return ( 
    <div className="invoice-page">
      <div className="invoice-box">
			<table>
				<thead>
					<tr>
						<td className="column1-width"></td>
						<td className="column2-width"></td>
					</tr>
				</thead>
				<tbody>
				<tr className="top">
					<td colSpan="2">
						<table>
							<tr>
								<td className="title">
									<img src={Logo} alt="Company logo" className="invoice-company-logo"/>
								</td>

								<td>
									Quote#: {quoteID}<br />
									Created: {today.getDate()}/{today.getMonth()}/{today.getFullYear()} <br />
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
								{quoteInfo.customer.namefirst} {quoteInfo.customer.namelast}<br />
								{quoteInfo.customer.phone}<br />
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
					<td >Item</td>
					<td >Price</td>
				</tr>
				</tbody>

				{quoteInfo.cart.map((cart,i) =>{
					if(cart.active){
						return(
							<tbody key={cart.id + 100}>
								<tr className="item">
									<td className="invoice-prevent-overflow  column1-width">{quoteInfo.cart[i].target.description? <a href={quoteInfo.cart[i].target.url} target="_blank" rel="noreferrer" >{quoteInfo.cart[i].target.description}</a> : <a href={quoteInfo.cart[i].target.url} target="_blank" rel="noreferrer" >{quoteInfo.cart[i].target.url}</a>}  </td>
									<td >{quoteInfo.cart[i].target.itemPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
								</tr>
							</tbody>
						)
					}
				})}

				<tbody>
				<tr className="item">
					<td >US Taxes</td>
					<td >{itemTotalUSTax.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td >Shipping</td>
					<td >{itemTotalUSShipping.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td >Total Item Cost(USD)</td>
					<td >{itemTotalPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td > </td>
					<td > </td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td >Total Item Cost(GYD) @ {quoteInfo.adminInfo.USDRates}</td>
					<td >{itemTotalPriceGYD.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td >Freight Cost</td>
					<td >{itemTotalWeightPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="item">
					<td >Local Fees (Customs)</td>
					<td >{itemTotalCustoms.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
				</tr>
				</tbody>


				<tbody>
				<tr className="item last">
					<td >Business Charges</td>
					<td >{businessCharges.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
				</tr>
				</tbody>

				<tbody>
				<tr className="total">
					<td ></td>
					<td >Total(GYD): {grandTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
				</tr>
				</tbody>
			</table>
			<footer className="footer"> 
				<p>By confirming this quotation and paying, you agree that: </p>
				<p>1. This quotation is accurate and contains exact description of items you require. </p>
				<p>2. This is an estimate and is subject to change based on any adjustments by the vendor or the actual shipping or additional charges incurred in getting the items to you. </p>
				<p>If you have any questions conserning this invoice, use the following contact information: </p>
				<p>Ansa: 592-6638816, adeolafrance@yahoo.com </p>
			</footer>
		</div>
    </div>
   );
}
 
export default QuoteTemplate;