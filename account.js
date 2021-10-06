const Account = function (name, transactions){
    this.name = name;
    this.transactions = []
}
Account.prototype.addTransaction = function(newTransaction){
    this.transactions.push(newTransaction);
    
}

Account.prototype.selectByMerchantName = function(merchantName){
    const results = [];
    for (const transaction of this.transactions){
        if (transaction.merchant.name === merchantName){
            results.push(this.transactions)
        }
    }
    return results
}
console.log();
// An Account should be able to output an array of Transactions
// that match a particular Tag name

Account.prototype.selectByTagName = function(tagName){
    const results = [];
    for (const transaction of this.transactions){
        if (transaction.tag.name === tagName){
            result.push(this.transactions)
        }
    }
    return results
}
console.log('Tom', '£350');
// An Account should be able to output an array of Transactions that are
//  between a minimum and maximum amount.account.transactionsBetween(5, 10)
//  would return all Transactions with a value between 5 and 10,for example.


module.exports = Account;