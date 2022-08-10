/*
    Expressões e operadores

    - Expressions
    - Operators
        * Binary
        * Unary
        * Ternary
*/

let number = 1; // <- OBS sobre o porque aqui é necessario ";"

(function () {
    console.log("Olá!")
})() // Função auto executável, que executa imediatamente

/*
    OBS: Porque a variável number recebeu um ";" no final?
    R: Geralmente não existe a necessidade de se usar, mas nesse caso sim! Caso você tente executar o código sem o ";", ele vai tentar atribuir essa função ao valor 1, onde o Javascript vai tentar executar o 1, passar uma função como argumento, e o 1 vai receber uma outra função. Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta. 
*/

// Operador binário
console.log(number + 1)

// Operador unário
console.log(++number)

// Operador ternário
console.log(false ? 'Aló' : 'Nada')