const Transaction = function(amount, date, merchant){
    this.amount = amount;
    this.date = date;
    this.merchant = merchant;
}

Transaction.prototype.formattedCurrency = function (amount){
    return this.amount.toLocalString('gb-GB', {
        style: 'currency',
        currency: 'GBP'
    });
}

module.exports = Transaction;