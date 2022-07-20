import {Link} from "react-router-dom"

const Navbar = () => {
  return ( 
    <header className="container">
      <span>
        <img src="process.env.PUBLIC_URL/company-logo.png" alt="company Logo" />
        <h4>E-Mag Online</h4>
      </span>

      <ul>
        <li><Link to= "/">Home</Link></li>
        <li><Link to= "/quotes">Quotes</Link></li>
        <li><Link to= "/createquote">Create Quote</Link></li>
        <li><Link to= "/invoices">Invoices</Link></li>
      </ul>
    </header>
   );
}
 
export default Navbar;