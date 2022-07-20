import {Link} from "react-router-dom"

const Navbar = () => {
  return ( 
    <header className="container">
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