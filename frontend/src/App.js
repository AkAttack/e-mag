import {BrowserRouter, Routes, Route} from "react-router-dom"

// pages & components
import Home from "./pages/Home"
import CreateQuote from "./pages/CreateQuote"
import Invoices from "./pages/Invoices"
import Quotes from "./pages/Quotes"
import NavBar from "./components/Navbar"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
          <Route 
            path= "/"
            element={<Home />}
          />
          <Route 
            path= "/createquote"
            element={<CreateQuote />}
          />
          <Route 
            path= "/invoices"
            element={<Invoices />}
          />
          <Route 
            path= "/quotes"
            element={<Quotes />}
          />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
