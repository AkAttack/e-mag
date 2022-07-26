import Logo from "../images/AnsaLogo.png"

const QuoteTemplate = ({quote, cart}) => {
  return ( 
    <div className="invoice-page">
      <div className="invoice-box">
			<table>
				<tr className="top">
					<td colSpan="2">
						<table>
							<tr>
								<td className="title">
									<img src={Logo} alt="Company logo" className="invoice-company-logo"/>
								</td>

								<td>
									Invoice #: 123<br />
									Created: January 1, 2015<br />
									Due: February 1, 2015
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr className="information">
					<td colSpan="2">
						<table>
							<tr>
								<td className="logo-text">
									E-Mag <br />
									Online Shopping<br />
								</td>

								<td>
									Acme Corp.<br />
									John Doe<br />
									john@example.com
								</td>
							</tr>
						</table>
					</td>
				</tr>

				{/* <tr className="heading">
					<td>Payment Method</td>

					<td>Check #</td>
				</tr>

				<tr className="details">
					<td>Check</td>

					<td>1000</td>
				</tr> */}

				<tr className="heading">
					<td>Item</td>
					<td>Price</td>
				</tr>

				{cart.map((item,i) =>{
					if(item.active){
						<tr className="item" key={i}>
							<td>{item.target.description? item.target.description : item.target.url? item.target.url : ""}</td>
							<td>${item.target.price? item.target.price: 0.00}</td>
						</tr>
					}
				})}
				<tr className="item">
					<td>Total Item Cost</td>
					<td>${quote.target.itemTotalPrice? quote.target.itemTotalPrice: 0.00}</td>
				</tr>

				<tr className="item">
					<td>Items U.S Taxes</td>
					<td>${quote.target.itemTotalTax? quote.target.itemTotalTax: 0.00}</td>
				</tr>

				<tr className="item">
					<td>Shipping Cost</td>
					<td>${quote.target.itemTotalWeightPrice? quote.target.itemTotalWeightPrice: 0.00}</td>
				</tr>

				<tr className="item">
					<td>Local Fees (Customs)</td>
					<td>${quote.target.freight? quote.target.freight: 0.00}</td>
				</tr>

				<tr className="item last">
					<td>Business Charges</td>
					<td>${quote.target.businessCharges? quote.target.businessCharges: 0.00}</td>
				</tr>

				<tr className="total">
					<td></td>
					<td>Total: ${quote.target.grandTotal? quote.target.grandTotal: 0.00}</td>
				</tr>
			</table>
		</div>
    </div>
   );
}
 
export default QuoteTemplate;