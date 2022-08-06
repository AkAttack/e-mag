import {QUOTE_INFO} from "../GlobalVars"
import { saveAs } from 'file-saver';
import { useState } from "react";

const Quote = () => {
  const [allQuotes, setAllQuotes] = useState({loaded: false, quotes: []})

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
    fetch("/api/quotes")
      .then(fetchErrorCheck)
      .then(() => {
        
      })  
      .catch(err => {console.log(err)})
  }


  return ( 
    <div>
      <button onClick={createAndDownloadPdf}>Download PDF Test</button>
      <button onClick={() => console.log(QUOTE_INFO)}>QUOTE_INFO</button>
    </div>
   );
}
 
export default Quote;