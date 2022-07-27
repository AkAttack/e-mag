const CART_INFO = [{id: 1, active: true, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}},
{id: 2, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}},
{id: 3, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 4, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 5, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 6, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 7, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 8, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 9, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 10, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}},
{id: 11, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}},
{id: 12, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}},
{id: 13, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 14, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 15, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 16, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 17, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 18, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 19, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}}, 
{id: 20, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: Number, itemCustoms: Number, usTax: Number, itemWeight: Number, weightPrice: Number}} ]

const CUSTOMER_INFO = {nameFirst: "", nameLast: "", mobile: "", address: "", email: ""}

const ADMIN_INFO = {usdExchange: 219, businessCharge: 1500, perBChargeAmount: 20000, usTaxPercent: 0.1}

const heavyWeightCharge = 2.10
const WEIGHT_INFO = {1:{min:0, max:1, price: 500},2:{min:1, max:2, price: 1700}, 3:{max:3, min:2, price:1700}, 4:{min:3, max:4, price: 2000}, 5:{min:4, max:5, price: 3100}, 6:{min:5, max:6, price: 3800}, 7:{min:6, max:7, price: 4400}, 8:{min:7, max:8, price: 5100}, 9:{min:8, max:9, price: 5500}, 10:{min:9, max:10, price: 6000},              
51:{min:50, max:9999, multiplier: heavyWeightCharge}, }

const CUSTOMS_INFO = {cars:0.35, toys:0.25,television:0.25,clothes:0.25, "dvds/cds":0.15, computers:0.30}

const QUOTE_INFO = {
  customer: CUSTOMER_INFO, 
  cart: CART_INFO, 
  adminInfo: ADMIN_INFO,
  weightInfo: WEIGHT_INFO, 
  customsInfo: CUSTOMS_INFO,
  target: {itemTotalPrice: Number, itemTotalWeightPrice: Number, itemTotalUSTax: Number, itemTotalWeight: Number, itemTotalCustoms: Number, totalFreight:Number}, 
  }

export default QUOTE_INFO