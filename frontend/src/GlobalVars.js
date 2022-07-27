const CART_INFO = [{id: 1, active: true, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}},
{id: 2, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}},
{id: 3, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 4, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 5, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 6, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 7, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 8, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 9, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 10, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}},
{id: 11, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}},
{id: 12, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}},
{id: 13, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 14, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 15, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 16, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 17, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 18, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 19, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}}, 
{id: 20, active: false, expandShow: true, target: {description: "", url: "", color: "", size: "", itemCategory: "", itemPrice: 0, itemCustoms: 0, usTax: 0, itemWeight: 0, weightPrice: 0}} ]

const heavyWeightCharge = 2.10
const WEIGHT_INFO = {0:{min:0, max:0, price: 500}, 1:{min:0, max:1, price: 500},2:{min:1, max:2, price: 1700}, 
3:{max:3, min:2, price:1700}, 4:{min:3, max:4, price: 2000}, 
5:{min:4, max:5, price: 3100}, 6:{min:5, max:6, price: 3800}, 
7:{min:6, max:7, price: 4400}, 8:{min:7, max:8, price: 5100}, 
9:{min:8, max:9, price: 5500}, 10:{min:9, max:10, price: 6000},
11:{min:0, max:1, price: 500},12:{min:1, max:2, price: 1700}, 
13:{max:3, min:2, price:1700}, 14:{min:3, max:4, price: 2000}, 
15:{min:4, max:5, price: 3100}, 16:{min:5, max:6, price: 3800}, 
17:{min:6, max:7, price: 4400}, 18:{min:7, max:8, price: 5100}, 
19:{min:8, max:9, price: 5500}, 20:{min:9, max:10, price: 6000},
21:{min:0, max:1, price: 500},22:{min:1, max:2, price: 1700}, 
23:{max:3, min:2, price:1700}, 24:{min:3, max:4, price: 2000}, 
25:{min:4, max:5, price: 3100}, 26:{min:5, max:6, price: 3800}, 
27:{min:6, max:7, price: 4400}, 28:{min:7, max:8, price: 5100}, 
29:{min:8, max:9, price: 5500}, 30:{min:9, max:10, price: 6000}, 31:{min:0, max:1, price: 500},32:{min:1, max:2, price: 1700}, 
33:{max:3, min:2, price:1700}, 34:{min:3, max:4, price: 2000}, 
35:{min:4, max:5, price: 3100}, 36:{min:5, max:6, price: 3800}, 
37:{min:6, max:7, price: 4400}, 38:{min:7, max:8, price: 5100}, 
39:{min:8, max:9, price: 5500}, 40:{min:9, max:10, price: 6000},
41:{min:0, max:1, price: 500},42:{min:1, max:2, price: 1700}, 
43:{max:3, min:2, price:1700}, 44:{min:3, max:4, price: 2000}, 
45:{min:4, max:5, price: 3100}, 46:{min:5, max:6, price: 3800}, 
47:{min:6, max:7, price: 4400}, 48:{min:7, max:8, price: 5100}, 
49:{min:8, max:9, price: 5500}, 50:{min:9, max:10, price: 6000},             
51:{min:50, max:9999, multiplier: heavyWeightCharge}, }

const CUSTOMER_INFO = {nameFirst: "", nameLast: "", mobile: "", address: "", email: ""}

const ADMIN_INFO = {usdExchange: 219, businessCharge: 1500, perBChargeAmount: 20000, usTaxPercent: 0.1}

const CUSTOMS_INFO = {cars:0.35, toys:0.25,television:0.25,clothes:0.25, "dvds/cds":0.15, computers:0.30}

const QUOTE_INFO = {
  customer: CUSTOMER_INFO, 
  cart: CART_INFO, 
  adminInfo: ADMIN_INFO,
  weightInfo: WEIGHT_INFO, 
  customsInfo: CUSTOMS_INFO,
  target: {itemTotalPrice: 0, itemTotalWeightPrice: 0, itemTotalUSTax: 0, itemTotalWeight: 0, itemTotalCustoms: 0, businessCharge:0, grandTotal:0}, 
  }

export default QUOTE_INFO