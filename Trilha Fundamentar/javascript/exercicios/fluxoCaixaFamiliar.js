/*
    ## Sistema de gastos familiar ##

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        -> receitas: []
        -> despesas: []

    Agora, crie uma função que irá calcular o total de receitas e desespesas e irá mostrar uma mensagem se a família
    está com saldo positivo ou negativo, seguindo do valor do saldo.
*/

const account = {
    incomes: [200.96, 1000.67, 100.95],
    expenses: [100.96, 25, 500, 3696.35]
}

calculateBalance(account)

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance(account) {
    const calculateIncomes = sum(account.incomes)
    const calculateExpenses = sum(account.expenses)
    const balance = calculateIncomes - calculateExpenses
    const message = `Saldo total é R$${balance.toFixed(2).replace(".", ",")}`

    if (balance > 0) {
        console.log(`${message}, o saldo é positivo!`)
    } else {
        console.log(`${message}, o saldo é negativo!`)
    }
}