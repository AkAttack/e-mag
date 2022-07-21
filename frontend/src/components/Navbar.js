import {Link} from "react-router-dom"

import Logo from "../images/AnsaLogo.png"

const Navbar = () => {
  return ( 
    <div className="navbar">
      <span>
        <img src={Logo} alt="company Logo" />
        <h4>E-Mag Online</h4>
      </span>

      <ul>
        <li><Link to= "/">Home</Link></li>
        <li><Link to= "/quotes">Quotes</Link></li>
        <li><Link to= "/createquote">Create Quote</Link></li>
        <li><Link to= "/invoices">Invoices</Link></li>
      </ul>
    </div>
   );
}
 
export default Navbar;