import {QUOTE_INFO} from "../GlobalVars"
import { saveAs } from 'file-saver';

const Quote = () => {
  const optPost = {method: "POST", headers: {"Content-type": "application/json"}, 
  body: JSON.stringify(QUOTE_INFO)}

  const fetchErrorCheck = (res) => {
    if(res.status >= 200 && res.status <= 299){
      return res.json()
    }else{throw Error(res.statusText)}
  }

  const createAndDownloadPdf = () => {
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


  return ( 
    <div>
      <button onClick={createAndDownloadPdf}>Download Quote</button>
      <button onClick={()=>console.log(QUOTE_INFO)}>QUOTE_INFO</button>
    </div>
   );
}
 
export default Quote;