import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import { saveAs } from 'file-saver';
import CustomerForm from "../components/CustomerForm";
import OrderItemForm from "../components/OrderItemForm";
import QuoteTemplate from "../components/QuoteTemplate";
import {QUOTE_INFO} from "../GlobalVars";
import { dbCUSTOMERS } from "../GlobalVars";
import createUUID from "../components/HelperFunctions/UUID";
import {updateCart, updateTotalCustoms_GrandTotal}  from "../components/QuoteCalculations";
import useQuoteInfoStore from "../store/useQuoteInfo";
import useCreateQuotePageStore from "../store/useCreateQuotePageStore"
import useDBCustomer from "../store/useDBCustomer";
// import {v4 as uuid} from "uuid";

const CreateQuote = () => {
  const navigate = useNavigate()
  const MAX_CART_AMOUNT = 10
  const MIN_CART_AMOUNT = 1
  let QI = {...QUOTE_INFO}
  let QT = {...QUOTE_INFO.target}

  const [quoteInfo, setQuoteInfo] = useState(QI)
  const [dbCustomer, setdbCustomer] = useState(dbCUSTOMERS)
  const [quoteTarget, setQuoteTarget] = useState(QT)
  const [activeItems, setActiveItems] = useState(MIN_CART_AMOUNT)
  const [pageVars, setPageVars] = useState({quoteStep: "step 1"})
  const [error, setError] = useState(null)

  const DBCustomers = useDBCustomer(state=> state.customers)
  const setDBCustomers = useDBCustomer(state=> state.setCustomers)
  const setQuoteInfoCustomer = useQuoteInfoStore(state=> state.setQuoteInfoCustomer)
  const showCustomerForm = useCreateQuotePageStore(state=> state.showCustomerForm)

  const fetchErrorCheck = (res) => {
    if(res.status >= 200 && res.status <= 299){
      return res.json()
    }else{throw Error(res.statusText)}
  }

  useEffect(()=>{
    const newQuote= {...quoteInfo}, 
    urlWeights = "/api/weights",
    urlCustoms = "/api/customs",  //TODO - store and save to db
    urlCustomerInfo = "/api/customerinfos",
    urlAdminInfo = "/api/adminvars"

    fetch(urlWeights)
      .then(fetchErrorCheck)
      .then(data => {
        newQuote.weightInfo = {...data}
        setQuoteInfo(newQuote)
      })
    fetch(urlAdminInfo)
      .then(fetchErrorCheck)
      .then(data => {
        newQuote.adminInfo = {...data[0]}
        setQuoteInfo(newQuote)
      }) 
    fetch(urlCustomerInfo)
      .then(fetchErrorCheck)
      .then(data => {
        const newCustomers = [ ...data]
        setDBCustomers(newCustomers)
      }) 
  }, [])
  
  const removeItem = () =>{
    if(activeItems >= 2) {
      const id = activeItems - 1
      const newCart = [...quoteInfo.cart]
        newCart[id].active = false
        newCart[id].expandShow = true
        if(id >= 1){newCart[id - 1].expandShow = true}
      if(id < MAX_CART_AMOUNT && id >= MIN_CART_AMOUNT){
        const newQuote = {...quoteInfo}
        newQuote.cart = newCart
        setQuoteInfo(newQuote)
      }
      const newNum = activeItems - 1
      if(newNum >= MIN_CART_AMOUNT && newNum <= MAX_CART_AMOUNT){ 
        setActiveItems(newNum) }    
    }
  }

  const addItem = () => {
    const id = activeItems 
    if(id < MAX_CART_AMOUNT && id >= MIN_CART_AMOUNT){
      const newCart = [...quoteInfo.cart]
      
      newCart.forEach((item,i) => {
        if(i === (id - 1)){
          item.expandShow = false
        } else if (i === id){
          item.active = true
          item.expandShow = true
        }
      })
      const newQuote = {...quoteInfo}
      newQuote.cart = newCart
      setQuoteInfo(newQuote)
    }
    const newNum = activeItems + 1
    if(newNum >= MIN_CART_AMOUNT && newNum <= MAX_CART_AMOUNT){ 
      setActiveItems(newNum) }    
  }

  const toggleExpand = (id) => {
    const newCart = [...quoteInfo.cart]
    newCart[id].expandShow = !quoteInfo.cart[id].expandShow
    const newQuote = {...quoteInfo}
    newQuote.cart = newCart
    setQuoteInfo(newQuote)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newQuote = {...quoteInfo}
    const urlCustomerInfo = "/api/customerinfos"
    const urlQuote = "/api/quotations"
    const quoteID = createUUID("quote")
    newQuote.quoteID = quoteID

    if(newQuote.customer._id.length < 6){
      const options = {method: "POST", headers: {"Content-type": "application/json"}, 
      body: JSON.stringify(newQuote.customer)}
      fetch(urlCustomerInfo, options)
        .then(fetchErrorCheck)
        .then(json => {
          console.log("newCustomer to DB successful: ")
          newQuote.customer = {...json}
        })    
        .then(() => {
          const options = {method: "POST", headers: {"Content-type": "application/json"}, 
          body: JSON.stringify(newQuote)}
          fetch(urlQuote, options)
            .then(fetchErrorCheck)
            .then(json => {
              console.log("newQuote to DB successful", json)         
              createAndDownloadPdf(json)
              navigate("/quotes")
            })    
        })
        .catch(err => {setError(err); }) 
    }else{
      const options = {method: "POST", headers: {"Content-type": "application/json"}, 
      body: JSON.stringify(newQuote)}
      fetch(urlQuote, options)
        .then(fetchErrorCheck)
        .then(json => {
          console.log("newQUOTE to DB successful", json)          
          createAndDownloadPdf(json)
          navigate("/quotes")
        })  
    }
    
    
  }

  const customerHandleValue = (e, type = "") => {
    if(type === ""){
      const name = e.target.name
      const value = e.target.value
      setQuoteInfo(preState => {
        const newQuote = {...preState}
        const newCustomer = {...preState.customer, [name]: value}
        newQuote.customer = newCustomer
        return newQuote
      })
    }else if(type === "full"){
      setQuoteInfo(preState => {
        const newQuote = {...preState}
        newQuote.customer = e
        return newQuote
      })
    }
  }
  const customerSetNextStep = (direction= "next") => {
    if(direction === "next"){
      setPageVars(prevState => {
        const newState = {...prevState}
        newState.quoteStep = "step 2"
        return newState
      })
    } else if(direction === "prev"){
      setPageVars(prevState => {
        const newState = {...prevState}
        newState.quoteStep = "step 1"
        return newState
      })
    }
  }

  const orderItemHandleValue = (e, id,vT) => {
    const name = e.target.name
    let value = e.target.value
    if(vT !== "n"){
      setQuoteInfo(preState => {
        const newQuote = {...preState}
        const newTarget = {...preState.cart[id].target, [name]: value}
        newQuote.cart[id].target = newTarget
        return newQuote
      })
    }else if(vT === "n"){

      if(/^\.$/.test(value)){//if "." only
        value = "0."
        setQuoteInfo(preState => {
          const newQuote = {...preState}
          const newTarget = {...preState.cart[id].target, [name]: value}
          newQuote.cart[id].target = newTarget
          return newQuote
        })
      } else if(/^\.\d*$/.test(value)){//if ".234"
        value = "0" + value
        setQuoteInfo(preState => {
          const newQuote = {...preState}
          const newTarget = {...preState.cart[id].target, [name]: value}
          newQuote.cart[id].target = newTarget
          return newQuote
        })
      } else if(/^\d*\.?\d*$/.test(value)){//if "1.234" number
        setQuoteInfo(preState => {
          const newQuote = {...preState}
          const newTarget = {...preState.cart[id].target, [name]: value}
          newQuote.cart[id].target = newTarget
          return newQuote
        })
      }else{return}
      
    }

    
  }

  const createAndDownloadPdf = (quoteData) => {
    const optPost = {method: "POST", headers: {"Content-type": "application/json"}, body: JSON.stringify(quoteData)}
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
  
  
  //update itemTPrice && itemCustoms && itemWeightChange &&  itemWeightChange
  useEffect(() => {
    updateCart(quoteInfo, setQuoteInfo, setQuoteTarget)
  }, [...quoteInfo.cart.map((item,i)=>{return item.target}), ...quoteInfo.cart.map((item,i)=>{return item.active}) ])

  //update itemTPrice && itemCustoms && itemWeightChange &&  itemWeightChange
  useEffect(() => {
    updateTotalCustoms_GrandTotal(quoteInfo, setQuoteInfo, setQuoteTarget)
  }, [quoteInfo.updateSteps.step1])
  

  return (   
    <div className="create-quote">
      {showCustomerForm &&
      <div>
        <CustomerForm
        dbCustomer={dbCustomer}
        values={quoteInfo.customer}
        handleValue={customerHandleValue}
        nextStep={pageVars}
        setNextStep={customerSetNextStep}
       />
      </div>
      }
      
      {!showCustomerForm &&
        <form className="create-quote" onSubmit={handleSubmit}>
          {quoteInfo.cart.map((e,i) => {
            return (<OrderItemForm 
              key={i} 
              keyId={i}
              itemNum={e.id} 
              updatequoteInfo={removeItem}
              activeItems={activeItems}/>)
              
          })  }
          <div className="action-button">
            <button type="submit" className="button-submit">Generate Quote</button>
          </div>
        </form>
      }
      <button onClick={() => console.log(quoteInfo)}>quoteInfo</button>
      <button onClick={() => console.log(DBCustomers)}>dbCUSTOMER</button>

      <QuoteTemplate quoteInfo={quoteInfo} />
    </div>
   );

}
 
export default CreateQuote;