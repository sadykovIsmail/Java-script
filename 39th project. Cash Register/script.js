let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cashInput  = document.getElementById('cash');
const changeDiv  = document.getElementById('change-due');
const btn        = document.getElementById('purchase-btn');
const priceDisp  = document.getElementById('price-display');

priceDisp.textContent = price.toFixed(2);

const DENOMS = [
  { name: 'ONE HUNDRED', val: 100 },
  { name: 'TWENTY',       val: 20  },
  { name: 'TEN',          val: 10  },
  { name: 'FIVE',         val: 5   },
  { name: 'ONE',          val: 1   },
  { name: 'QUARTER',      val: 0.25},
  { name: 'DIME',         val: 0.1 },
  { name: 'NICKEL',       val: 0.05},
  { name: 'PENNY',        val: 0.01}
];

