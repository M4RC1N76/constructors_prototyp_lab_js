const Tag = require('./tag.js')
const Account = require ('./account.js')
const Transaction = require ('./transaction.js')
const Merchant = require ('./merchant.js')

const name = new Merchant('Tesco', 'Groceries');
const account = new Account('Bob', '£500.00');
console.log(name);
// console.log(transactions);