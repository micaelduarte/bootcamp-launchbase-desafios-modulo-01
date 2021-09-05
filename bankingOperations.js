const user = {
    name: "Luan",
    transactions: [],
    balance: 0
}

function createTransaction(user, transaction) {
    user.transactions.push(transaction)

    if(transaction.type == "credit") {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(user, typeTransaction) {
    let num = 0
    let higherTransaction

    if(typeTransaction == "credit") {
        for (const transaction of user.transactions) {
            if(transaction.type == "credit" && num < transaction.value) {
                num = transaction.value
            }
        }
        for (const transaction of user.transactions) {
            if(num === transaction.value) {
                higherTransaction = transaction
            }
        }
    } else {
        for (const transaction of user.transactions) {
            if(transaction.type == "debit" && num < transaction.value) {
                num = transaction.value
            }
        }
        for (const transaction of user.transactions) {
            if(num === transaction.value) {
                higherTransaction = transaction
            }
        }
    }
    
    return higherTransaction
}

function getAverageTransactionValue(user) {
    let sumOfTransactions = 0

    for(const transaction of user.transactions) {
        sumOfTransactions = sumOfTransactions + transaction.value
    }

    return sumOfTransactions / user.transactions.length
}

function getTransactionsCount(user) {
    let transactionsCount = {credit:0, debit:0}

    for(const transaction of user.transactions) {
        if(transaction.type == "credit") {
            transactionsCount.credit = transactionsCount.credit + 1
        } else {
            transactionsCount.debit = transactionsCount.debit + 1
        }
    }

    return transactionsCount
}

createTransaction(user, { type: "credit", value: 50 })
createTransaction(user, { type: "credit", value: 120 })
createTransaction(user, { type: "debit", value: 80 })
createTransaction(user, { type: "debit", value: 30 })

console.log(user.balance)

console.log(getHigherTransactionByType(user, "credit"))
console.log(getHigherTransactionByType(user, "debit"))

console.log(getAverageTransactionValue(user))

console.log(getTransactionsCount(user))