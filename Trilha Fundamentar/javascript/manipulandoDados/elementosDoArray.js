/*
    Manipulando Arrays

    - Contar elementos de um array
*/

// O array pode receber desde um dados simples como uma string, até um objeto ou mesmo uma função. É possível acessar os elementos desse array pela posição e manipular.
console.log([
    "a",
    {
        type: "array"
    },
    function () {
        return "alo"
    }
][2]())

console.log([
    "a",
    "b",
    "c"
].length)