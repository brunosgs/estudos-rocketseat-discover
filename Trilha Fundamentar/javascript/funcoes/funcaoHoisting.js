// Function hoisting

/*
    É feito o hoisting, é como se a função fosse elevada ao inicio do escopo.
*/
sayMyName()

// function sayMyName() {
//     console.log('Function: Bruno')
// }

/*
    Se estiver sendo declarado uma função anonima definida como 'const' e ela estiver sendo chamada antes da declaração da função, vai gerar erro de inicialização. Caso seja declarado como uma 'var', ela sera elevada, só que dessa forma: 'var sayMyName' para o inicio do escopo, então gerando um erro informando que ela não é uma função.
*/
const sayMyName = function () {
    console.log('Function anonymous: Bruno')
}