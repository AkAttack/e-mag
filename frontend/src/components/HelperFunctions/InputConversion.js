export default function inputConversion (e) {
  const type = e.target.inputtype
  console.log("inputType === ", )
  let value = e.target.value

  if(type === "text"){
    return value
  }
  else if(type === "number"){
    if(/^\.$/.test(value)){//if "." only
      value = "0."
      return value
    } 
    else if(/^\.\d*$/.test(value)){//if ".234"
      value = "0" + value
    } 
    else if(/^\d*\.?\d*$/.test(value)){//if "1.234" number
      return value
    }    
  }
  
}