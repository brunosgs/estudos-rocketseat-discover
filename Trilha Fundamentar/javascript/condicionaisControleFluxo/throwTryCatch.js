/*
    Condicionais e controle de fluxo
*/

// Quando a validação não atige o objetivo dela a mesma lança o throw e o função é parada!
function sayMyName(name = '') {
    if (name === '') {
        throw "Nome é necessário!"
    }

    console.log(name)
    console.log('Dentro da função sayMyName, depois do erro')
}

// sayMyName()
// console.log('Fora da função sayMyName sem try e catch!')

// É importante a utlização do try catch, pois ele vai tentar executar a função mas não vai travar a aplicação, caso capture o erro ele lança no catch 
try {
    sayMyName('')
} catch (e) {
    console.log(e)
}

console.log('Fora da função sayMyName utilizando o try e catch!')