import Logo from "../images/AnsaLogo.png"
import useQuoteInfoStore from "../store/useQuoteInfo";

const QuoteTemplate = () => {

 const quoteID = useQuoteInfoStore(state=> state.quoteInfo.quoteID ) 
 const adminInfo = useQuoteInfoStore(state=> state.quoteInfo.adminInfo ) 
 const itemTotalPrice = useQuoteInfoStore(state=> state.quoteInfo.target.itemTotalPrice ) 
 const itemTotalPriceGYD = useQuoteInfoStore(state=> state.quoteInfo.target.itemTotalPriceGYD ) 
 const itemTotalUSTax = useQuoteInfoStore(state=> state.quoteInfo.target.itemTotalUSTax ) 
 const itemTotalCustoms = useQuoteInfoStore(state=> state.quoteInfo.target.itemTotalCustoms ) 
 const itemTotalWeightPrice = useQuoteInfoStore(state=> state.quoteInfo.target.itemTotalWeightPrice ) 
 const businessCharges = useQuoteInfoStore(state=> state.quoteInfo.target.businessCharges ) 
 const grandTotal = useQuoteInfoStore(state=> state.quoteInfo.target.grandTotal ) 
 const itemTotalUSShipping = useQuoteInfoStore(state=> state.quoteInfo.target.itemTotalUSShipping )
 const today = new Date()
 const customer = useQuoteInfoStore(state=> state.quoteInfo.customer)
 const quoteInfoCart = useQuoteInfoStore(state=> state.quoteInfo.cart)



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
								{customer.namefirst} {customer.namelast}<br />
								{customer.phone}<br />
								{customer.email}
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

				{quoteInfoCart.map((cart,i) =>{
					if(cart.active){
						return(
							<tbody key={cart.id + 100}>
								<tr className="item">
									<td className="invoice-prevent-overflow  column1-width">{cart.target.description? <a href={cart.target.url} target="_blank" rel="noreferrer" >{cart.target.description}</a> : <a href={cart.target.url} target="_blank" rel="noreferrer" >{cart.target.url}</a>}  </td>
									<td >{cart.target.itemPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
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
					<td >Total Item Cost(GYD) @ {adminInfo.USDRates}</td>
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