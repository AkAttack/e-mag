import {QUOTE_INFO} from "../GlobalVars"
import { saveAs } from 'file-saver';
import { useEffect, useState } from "react";
import QuoteTemplate from "../components/QuoteTemplate";

const Quote = () => {
  const [allQuotes, setAllQuotes] = useState({loaded: false, quotes: []})
  const [quotePreview, setQuotePreview] = useState({display: false, quote: {}})


  const fetchErrorCheck = (res) => {
    if(res.status >= 200 && res.status <= 299){
      return res.json()
    }else{throw Error(res.statusText)}
  }

  const createAndDownloadPdf = () => {
    const optPost = {method: "POST", headers: {"Content-type": "application/json"}, 
    body: JSON.stringify(QUOTE_INFO)}
    fetch('/api/create-pdf', optPost)
      .then(fetchErrorCheck)
      .then(() => {
        fetch('api/fetch-pdf')
        .then(res => res.blob())
        .then((data) => {
          const pdfBlob = data
          saveAs(pdfBlob, 'newPdf.pdf');
        })
      })  
      .catch(err => {console.log(err)})
  }

  const getAllQuotes = () => {
    fetch("/api/quotations")
      .then(fetchErrorCheck)
      .then((json) => {
        const newAllQuote = {...allQuotes}
        console.log(json)
        newAllQuote.quotes = json
        newAllQuote.loaded = true
        setAllQuotes(newAllQuote)
      })  
      .catch(err => {console.log(err)})
  }
  const showQuotePreview = (quote) =>{
    const newQuotePreview = {...quotePreview}
    newQuotePreview.quote = quote
    newQuotePreview.display = true
    setQuotePreview(newQuotePreview)
  }

  useEffect(() => {
    getAllQuotes()
  }, [])


  return ( 
    <div>

      {!quotePreview.display && allQuotes.quotes.map((item,i) =>{
        return (
        <div className="quote-item" quote={item} onClick={()=>{showQuotePreview(item)}}>
          <p>{item.quoteID}  || Created: {item.createdAt.slice(0,10)}</p>
          <p>Customer: {item.customer.namefirst} {item.customer.namelast}</p>
          <p>Total: {item.target.grandTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})} || No. Items {[...item.cart.map(item=>{ if(item.active){return item} })].length} </p>
        </div>)
      })
      }
      {quotePreview.display && 
        <div>
          <button onClick={()=>{setQuotePreview({display: false, quote: {}})}}>Close Preview</button>
          <QuoteTemplate quoteInfo={quotePreview.quote}/>
        </div>
      }
    </div>
   );
}
 
export default Quote;