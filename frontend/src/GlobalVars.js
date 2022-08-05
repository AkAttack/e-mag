const CART_INFO = [{id: 1, active: true, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, },
{id: 2, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, },
{id: 3, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 4, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 5, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 6, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 7, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 8, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 9, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 10, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, },
{id: 11, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, },
{id: 12, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, },
{id: 13, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 14, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 15, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 16, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 17, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 18, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 19, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, }, 
{id: 20, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: "", itemCustoms: 0, usTax: 0, itemWeight: "", weightPrice: 0, itemUSShipping: "", purchaseQuantity: "" }, } ]

const heavyWeightCharge = 2.10
const WEIGHT_INFO = {
0:{min:0, max:0, price: 0}, 1:{min:0, max:1, price: 500},
2:{min:1, max:2, price: 1700}, 
3:{max:3, min:2, price:1700}, 4:{min:3, max:4, price: 2000}, 
5:{min:4, max:5, price: 3100}, 6:{min:5, max:6, price: 3800}, 
7:{min:6, max:7, price: 4400}, 8:{min:7, max:8, price: 5100}, 
9:{min:8, max:9, price: 5500}, 10:{min:9, max:10, price: 6000},
11:{min:10, max:11, price: 500},12:{min:11, max:12, price: 1700}, 
13:{max:13, min:12, price:1700}, 14:{min:13, max:14, price: 2000}, 
15:{min:14, max:15, price: 3100}, 16:{min:15, max:16, price: 3800}, 
17:{min:16, max:17, price: 4400}, 18:{min:17, max:18, price: 5100}, 
19:{min:18, max:19, price: 5500}, 20:{min:19, max:20, price: 6000},
21:{min:20, max:21, price: 500},22:{min:21, max:22, price: 1700}, 
23:{max:23, min:22, price:1700}, 24:{min:23, max:24, price: 2000}, 
25:{min:24, max:25, price: 3100}, 26:{min:25, max:26, price: 3800}, 
27:{min:26, max:27, price: 4400}, 28:{min:27, max:28, price: 5100}, 
29:{min:28, max:29, price: 5500}, 30:{min:29, max:30, price: 6000}, 31:{min:30, max:31, price: 500},32:{min:31, max:32, price: 1700}, 
33:{max:33, min:32, price:1700}, 34:{min:33, max:34, price: 2000}, 
35:{min:34, max:35, price: 3100}, 36:{min:35, max:36, price: 3800}, 
37:{min:36, max:37, price: 4400}, 38:{min:37, max:38, price: 5100}, 
39:{min:38, max:39, price: 5500}, 40:{min:39, max:40, price: 6000},
41:{min:40, max:41, price: 500},42:{min:41, max:42, price: 1700}, 
43:{max:43, min:42, price:1700}, 44:{min:43, max:44, price: 2000}, 
45:{min:44, max:45, price: 3100}, 46:{min:45, max:46, price: 3800}, 
47:{min:46, max:47, price: 4400}, 48:{min:47, max:48, price: 5100}, 
49:{min:48, max:49, price: 5500}, 50:{min:49, max:50, price: 6000},             
51:{min:50, max:9999, multiplier: heavyWeightCharge, price:null}, }

const CUSTOMER_INFO = {
  "_id": "",
  "namefirst": "",
  "namelast": "",
  "address": "",
  "email": "",
  "phone": "",
  "createdAt": "",
  "updatedAt": ""
}

const dbCUSTOMERS = []

const ADMIN_INFO = {
  "businessCharges": 100,
  "thresholdBAmount": 20000,
  "USDRates": 100,
  "usTaxPercent": 0,
  "_id": "62ec0d19abbb1e5ba74d8fa9",
  "createdAt": "2022-08-04T18:16:57.317Z",
  "updatedAt": "2022-08-04T18:16:57.317Z",
  "__v": 0
}

const CUSTOMS_INFO = {"All Clothing":{duty:0.2, vat:0.14, total:0.34}, "Album":{duty:0.2, vat:0.14, total:0.34}, "Appliance":{duty:0.2, vat:0.14, total:0.34}, "Car Parts":{duty:0.3, vat:0.14, total:0.44}, "Cosmetics":{duty:0.2, vat:0.14, total:0.34}, "Cars":{duty:0.2, vat:0.14, total:0.74}, "Celluar Phones and Accessories":{duty:0.2, vat:0.14, total:0.34}, "Costume Jewelry":{duty:0.6, vat:0.14, total:0.74}, "Digital Cameras":{duty:0.25, vat:0.14, total:0.39}, "DVDs":{duty:0.3, vat:0.14, total:0.44}, "Eletronics":{duty:0.2, vat:0.14, total:0.34}, "Furniture":{duty:0.2, vat:0.14, total:0.34}, "Toys":{duty:0.2, vat:0.14, total:0.34}, "Watches":{duty:0.5, vat:0.14, total:0.64}   }

const QUOTE_INFO = {
  customer: CUSTOMER_INFO, 
  cart: CART_INFO, 
  adminInfo: ADMIN_INFO,
  weightInfo: {}, 
  customsInfo: CUSTOMS_INFO,
  updateSteps:{step1:Date,step2:Date,step3:Date},
  target: {itemTotalPrice: 0, itemTotalPriceGYD: 0,
    itemTotalWeightPrice: 0, itemTotalUSTax: 0, 
    itemTotalWeight: 0, itemTotalCustoms: 0, 
    businessCharges:0, grandTotal:0, 
    itemTotalUSShipping:0  } 
  }

export {QUOTE_INFO, CART_INFO, dbCUSTOMERS}


