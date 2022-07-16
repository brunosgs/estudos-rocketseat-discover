/*
    * Declarando uma função anonima = function anonymous ou function expression;
    * Foram passados dois parametros = parameters para a function.
*/
const sum = function (number1, number2) {
    console.log(number1 + number2);
};

const sum2 = function (number1, number2) {
    total = number1 + number2;

    return total;
};

// Ao invocar a função estão sendo passados argumentos = arguments.
sum(2, 3); // Vai imprimir 5

let number1 = 34;
let number2 = 25;

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);

/* 
    Quando é feita a chamada da função sum(), ele vai mostrar a string como: "A soma é undefined". Basicamente executou a função, imprimiu com o console.log e depois tentou retornar algo, porque toda função retorna algo. Mas quando a função não tem a palavra chave reservada 'return', ela é retornada como "undefined".
*/
console.log(`A soma é ${sum(number1, number2)}`);
console.log(`A soma é ${sum2(number1, number2)}`);

/*
    Quando é criado uma variável no projeto que não tenha como definição seu tipo: var, let ou const, exemplo de 'total' que esta definida no escopo da função sum2(), mas sem um tipo. Pode se acarretar problemas, pois com a chamada de sum2() foi criado essa variavel que agora existe no escopo do código inteiro.
*/
console.log(total)