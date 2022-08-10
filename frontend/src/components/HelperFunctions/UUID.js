const createUUID = (type) => {
  const today = new Date()
  let invoice = "INV-", quote = "QOT-"
  const inner = `${today.getFullYear().toString().slice(2)}${today.getMonth().toString()}${today.getDate().toString()}${today.getHours().toString()}${today.getMinutes().toString()}${today.getSeconds().toString()}`
  invoice = invoice + inner
  quote = quote + inner
  if(type === "invoice"){return invoice}
  else if(type === "quote"){return quote}
  else{console.log("Error wrong type passed to generate UUID"); return null}
}


export default createUUID