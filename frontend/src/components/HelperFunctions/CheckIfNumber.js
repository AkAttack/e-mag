export default function checkIfNumber (num) {
  if(typeof num === "number" && !Number.isNaN(num)){
    return true
  }else{ return false}
}